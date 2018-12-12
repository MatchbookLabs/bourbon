import Component from '@ember/component';
import layout from '../templates/components/bourbon-svg--upgrade-badge';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  size: 'medium',
  color: 'black',
  iconSize: computed('size', function() {
    if (this.get('size') === 'small') {
      return '18px';
    } else if (this.get('size') === 'medium') {
      return '24px';
    } else if (this.get('size') === 'large') {
      return '36px';
    }
  }),

  iconColor: computed('color', function() {
    return `btw-text-${this.get("color")} btw-fill-current`
  })
});
