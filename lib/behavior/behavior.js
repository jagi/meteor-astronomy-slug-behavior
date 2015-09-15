Astro.createBehavior({
  name: 'slug',
  options: {
    fieldName: 'name',
    slugFieldName: 'slug',
    canUpdate: false,
    unique: true,
    separator: '-'
  },
  createSchemaDefinition: function(options) {
    var schemaDefinition = {
      fields: {},
      events: events
    };

    // Add a slug field.
    schemaDefinition.fields[options.slugFieldName] = {
      type: 'string',
      immutable: !options.canUpdate
    };

    return schemaDefinition;
  }
});
