events = {};

events.afterInit = function() {
  var doc = this;
  var Class = doc.constructor;

  if(!doc._isNew) {
    return;
  }

  // Find a class on which the behavior had been set.
  var classBehavior = Class.getBehavior('slug');
  var options = classBehavior.options;

  // Find the definition of the field.
  var field = classBehavior.definition.fields[options.slugFieldName];
  if(_.has(field, 'default')) {
    return
  }

  var value = doc[options.slugFieldName];
  if(value === null) {
    Class.getBehavior('slug').generateSlug(doc);
  }
};

events.beforeSave = function() {
  var doc = this;
  var Class = doc.constructor;

  // Find a class on which the behavior had been set.
  var classBehavior = Class.getBehavior('slug');
  var options = classBehavior.options;

  // Check if a field from which we want to create a slug has been
  // modified.
  var modified = doc.getModified();
  if (!_.has(modified, options.fieldName)) {
    return;
  }

  Class.getBehavior('slug').generateSlug(doc);
};
