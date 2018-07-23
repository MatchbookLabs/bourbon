import Component from '@ember/component';
import { inject as service } from '@ember/service';

import layout from '../templates/components/bourbon-modal-content';

export default Component.extend({
  classNames: ['bourbon-modal__content'],
  layout
});
