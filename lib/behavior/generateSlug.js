import {
  isNull,
  each
} from 'lodash';
import check from './check';
import diacriticsMap from './diacriticsMap';

function generateSlug(doc) {
  const Class = doc.constructor;

  // Check validity of the class for generating slug.
  check.call(this, Class);

  let value;
  if (this.options.fieldName) {
    // Get value of a field to make a slug from.
    value = doc.get(this.options.fieldName);
  }
  else if (this.options.helperName) {
    // Generate value by a method to make a slug from.
    value = doc[this.options.helperName]();
  }

  // If a value is null then we can not create a slug.
  if (isNull(value)) {
    return;
  }

  // Take the current value of the slug field.
  const oldSlug = doc.get(this.options.slugFieldName);
  // If the current slug is not empty and we can not update, then we have to
  // stop here.
  if (oldSlug && !this.options.canUpdate) {
    return;
  }

  // GENERATE A NEW SLUG.
  // Lower case.
  let newSlug = value.toLowerCase();
  // Remove diacriticts.
  each(diacriticsMap, function(diacriticMap) {
    newSlug = newSlug.replace(diacriticMap.letters, diacriticMap.base);
  });
  // Remove unsupported characters.
  newSlug = newSlug.replace(/[^\w\s-]+/g, '');
  // Trim.
  newSlug = newSlug.replace(/^\s+|\s+$/g, '');
  // Replace white characters with separator.
  newSlug = newSlug.replace(/\s+/g, this.options.separator);

  // If the "unique" option was set, then check whether there are any
  // duplicates. If there is any document with the same slug, then we have to
  // add number at the end of the slug.
  if (newSlug !== oldSlug) {
    // We have to check uniquness of the slug.
    if (this.options.unique) {
      const selector = {
        [this.options.slugFieldName]: newSlug
      };
      const count = Class.find(selector, {
        disableEvents: true
      }).count();

      if (count > 0) {
        // Prepare the selector with a regular expression querying all the
        // documents that contains our slug and ends with number.
        const prefix = newSlug + this.options.separator;
        const re = new RegExp('^' + prefix + '\\d+$');
        selector[this.options.slugFieldName] = re;
        // Limit the amount of fields being fetched to only the slug field.
        const options = {
          fields: {
            [this.options.slugFieldName]: 1
          },
          disableEvents: true
        };
        // Set the first number that will be added at the end of the slug to 2.
        let index = 2;
        // Loop through all the documents with the same slug.
        Class.find(selector, options).forEach((d) => {
          let dSlug = d.get(this.options.slugFieldName);
          let dIndex = parseInt(dSlug.replace(prefix, ''), 10);
          if (dIndex >= index) {
            index = dIndex + 1;
          }
        });

        newSlug = prefix + index;
      }
    }

    // Set a new slug.
    doc.set(this.options.slugFieldName, newSlug);
  }
}

export default generateSlug;