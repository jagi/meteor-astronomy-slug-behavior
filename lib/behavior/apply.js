function apply(Class) {
  Class.extend(this.createClassDefinition(), ['fields', 'events']);
}

export default apply;