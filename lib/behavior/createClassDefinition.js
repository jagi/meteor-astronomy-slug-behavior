import {
  bind
} from 'lodash';
import afterInit from '../class_events/afterInit';
import beforeSave from '../class_events/beforeSave';

function createClassDefinition() {
  const definition = {
    fields: {
      [this.options.slugFieldName]: {
        type: String,
        immutable: !this.options.canUpdate,
        optional: true
      }
    },
    events: {
      afterInit: bind(afterInit, this),
      beforeSave: bind(beforeSave, this)
    }
  };

  return definition;
}

export default createClassDefinition;