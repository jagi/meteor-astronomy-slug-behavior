var checks = {};

checks.behaviorData = function(behaviorData) {
  if (!_.isString(behaviorData.fieldName)) {
    throw new Error(
      'The "fieldName" option in the "slug" behavior has to ' +
      'be a string'
    );
  }

  if (!_.isString(behaviorData.slugFieldName)) {
    throw new Error(
      'The "slugFieldName" option in the "slug" behavior has to ' +
      'be a string'
    );
  }

  if (!_.isBoolean(behaviorData.canUpdate)) {
    throw new Error(
      'The "canUpdate" option in the "slug" behavior has to ' +
      'be a boolean'
    );
  }

  if (!_.isBoolean(behaviorData.unique)) {
    throw new Error(
      'The "unique" option in the "slug" behavior has to ' +
      'be a boolean'
    );
  }

  if (!_.isString(behaviorData.separator)) {
    throw new Error(
      'The "separator" option in the "slug" behavior has to ' +
      'be a string'
    );
  }
};

Astro.createBehavior({
  name: 'slug',
  options: {
    fieldName: 'name',
    slugFieldName: 'slug',
    canUpdate: false,
    unique: true,
    separator: '-'
  },
  events: {
    addbehavior: function(behaviorData) {
      var Class = this;
      var behavior = Astro.behaviors.slug;

      // Set default behavior's options if they were not provided in the schema.
      if (_.isUndefined(behaviorData.fieldName)) {
        behaviorData.fieldName = behavior.options.fieldName;
      }
      if (_.isUndefined(behaviorData.slugFieldName)) {
        behaviorData.slugFieldName = behavior.options.slugFieldName;
      }
      if (_.isUndefined(behaviorData.canUpdate)) {
        behaviorData.canUpdate = behavior.options.canUpdate;
      }
      if (_.isUndefined(behaviorData.unique)) {
        behaviorData.unique = behavior.options.unique;
      }
      if (_.isUndefined(behaviorData.separator)) {
        behaviorData.separator = behavior.options.separator;
      }

      // Check validity of options.
      checks.behaviorData.call(Class, behaviorData);

      // Get created field name (can be overridden by user).
      var slugFieldName = behaviorData.slugFieldName;

      // Add field of "date" type.
      Class.addField(slugFieldName, {
        type: 'string',
        default: null
      });

      // Add events to the class.
      Class.addEvents(events);
    }
  }
});
