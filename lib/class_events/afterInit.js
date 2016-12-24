function afterInit(e) {
  if (this.options.generateOnInit) {
    const doc = e.currentTarget;
    const Class = doc.constructor;
    this.generateSlug(doc);
  }
}

export default afterInit;