import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  modalService: service('modal'),

  actions: {
    showModal(options) {
      this.get('modalService').showModal(options);
    }
  }
});
