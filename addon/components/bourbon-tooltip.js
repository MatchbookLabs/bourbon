import Component from '@ember/component';
import layout from '../templates/components/bourbon-tooltip';

export default Component.extend({
  layout,
  tagName: '',

  init() {
    this._super(...arguments);

    this.setProperties({
      tooltipClass: 'bourbon-tooltip__bg-default',
      tooltipPosition: (this.get('position') || 'top'),
      tooltipEvent: (this.get('event') || 'hover'),
      tooltipBackgroundColor: (this.get('background') || 'default')
    })

    this.set('tooltipBackgroundClass', `bourbon-tooltip__bg-${this.get('tooltipBackgroundColor')} bourbon-tooltip__${this.get('tooltipPosition')} bourbon-tooltip`)

    // if (this.get('position')) {
    //   return this.set('tooltipPosition', this.get('position'))
    // }

  },


});
