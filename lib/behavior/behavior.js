Astro.createBehavior({
  name: 'slug',
  options: {
    generateOnInit: false,
    fieldName: 'name',
    methodName: null,
    slugFieldName: 'slug',
    canUpdate: false,
    unique: true,
    separator: '-'
  },
  methods: methods,
  createSchemaDefinition: function(options) {
    var schemaDefinition = {
      fields: {},
      methods: {
        generateSlug: function() {
          var doc = this;
          var Class = doc.constructor;

          Astro.utils.warn(
            'This method is depracated. You should use "' + Class.getName() +
            '.getBehavior("slug").generateSlug(doc);" instead.'
          );

          Class.getBehavior('slug').generateSlug(doc);
        }
      }
    };

    // Add events.
    schemaDefinition.events = {
      beforeSave: events.beforeSave
    };
    if (options.generateOnInit) {
      schemaDefinition.events.afterInit = events.afterInit;
    }

    // Add a slug field.
    schemaDefinition.fields[options.slugFieldName] = {
      type: 'string',
      immutable: !options.canUpdate
    };

    return schemaDefinition;
  }
});
