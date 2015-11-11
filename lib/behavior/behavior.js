Astro.createBehavior({
  name: 'slug',
  options: {
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
      events: events,
      methods: {
        generateSlug: function() {
          var doc = this;
          var Class = doc.constructor;

          Astro.utils.warn(
            'This method is deprecated. You should use "' + Class.getName() +
            '.getBehavior("slug").generateSlug(doc);" instead.'
          );

          Class.getBehavior('slug').generateSlug(doc);
        }
      }
    };

    // Add a slug field.
    schemaDefinition.fields[options.slugFieldName] = {
      type: 'string',
      immutable: !options.canUpdate
    };

    return schemaDefinition;
  }
});
