function beforeSave(e) {
  const doc = e.currentTarget;
  const Class = doc.constructor;
  // Check if a field from which we want to create a slug has been
  // modified.
  if (this.options.fieldName) {
    if (!doc.isModified(this.options.fieldName)) {
      return;
    }
  }
  this.generateSlug(doc);
}

export default beforeSave;