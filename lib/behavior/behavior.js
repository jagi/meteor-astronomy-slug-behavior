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
  createSchemaDefinition: function(options) {
    var schemaDefinition = {
      fields: {},
      events: events,
      methods: methods
    };

    // Add a slug field.
    schemaDefinition.fields[options.slugFieldName] = {
      type: 'string',
      immutable: !options.canUpdate
    };

    return schemaDefinition;
  }
});
