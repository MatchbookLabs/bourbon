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
      tooltipSpacing: (this.get('spacing') || 10),
      tooltipEvent: (this.get('event') || 'hover'),
      tooltipBackgroundColor: (this.get('background') || 'default')
    })

    this.set('tooltipBackgroundClass', `bourbon-tooltip__bg-${this.get('tooltipBackgroundColor')} bourbon-tooltip__${this.get('tooltipPosition')} bourbon-tooltip`)

  },
});
