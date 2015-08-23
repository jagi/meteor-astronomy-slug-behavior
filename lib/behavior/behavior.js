Astro.createBehavior({
  name: 'slug',
  options: {
    fieldName: 'name',
    slugFieldName: 'slug',
    canUpdate: false,
    unique: true,
    separator: '-'
  },
  events: events
});
