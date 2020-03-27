import Component from '@ember/component';
import layout from '../templates/components/bourbon-icon';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  classNames: ['BourbonIcon'],
  size: 'medium',
  color: 'black',
  iconSize: computed('size', function () {
    if (this.get('size') === 'small') {
      return '18px';
    } else if (this.get('size') === 'medium') {
      return '24px';
    } else if (this.get('size') === 'large') {
      return '36px';
    } else if (this.get('size') === 'xlarge') {
      return '55px';
    } else if (this.get('size') === 'xxlarge') {
      return '100px';
    }
  }),

  iconColor: computed('color', function () {
    return `btw-text-${this.get('color')} btw-fill-current`;
  }),
});
