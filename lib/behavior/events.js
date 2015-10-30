events = {};

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

  Class.getBehavior('timestamp').generateSlug(doc);
};
