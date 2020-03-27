import Mixin from '@ember/object/mixin';

export default Mixin.create({
  init() {
    this._super(...arguments);
    this.set('clickOutsideElement', this.get('clickHandler').bind(this));
  },

  willInsertElement() {
    this._super(...arguments);
    document.addEventListener('click', this.get('clickOutsideElement'), false);
  },

  willDestroyElement() {
    this._super(...arguments);
    document.removeEventListener(
      'click',
      this.get('clickOutsideElement'),
      false
    );
  },
});
