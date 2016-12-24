import {
  Behavior
} from 'meteor/jagi:astronomy';
import createClassDefinition from './createClassDefinition';
import apply from './apply';
import generateSlug from './generateSlug';

Behavior.create({
  name: 'slug',
  options: {
    generateOnInit: false,
    fieldName: null,
    helperName: null,
    slugFieldName: 'slug',
    canUpdate: false,
    unique: true,
    separator: '-'
  },
  createClassDefinition,
  apply,
  generateSlug
});
