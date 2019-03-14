import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Mixin.create({
  setValue(value) {
    let path = this.get('_valuePath');

    let checkValue = this.getCheckValue(value);

    if (path && checkValue) {
      this.set(
        'value',
        (typeof checkValue.get === 'function' ? checkValue.get(path) : void 0) ||
        checkValue[path]
      );
    } else {
      this.set('value', checkValue);
    }
  },

  getCheckValue(value) {
    // TODO check if still needed
    if (value.groupHeader) {
      return this.get('value');
    } else {
      if (typeof value === 'number') {
        return value;
      } else {
        return value ? value : this.get('value');
      }
    }
  },

  label: computed('value', 'content', function () {
    let checkValue = this.get('value')

    if (typeof this.get('value') === 'string' || typeof this.get('value') === 'boolean' ) {
      checkValue = this.findValueObject(this.get('value'));
    }

    if (checkValue === null || checkValue === undefined) {
      return this.get('prompt')
    }

    let path = this.get('_labelPath');
    if (path && isPresent(checkValue)) {
      return (typeof checkValue.get === 'function' ? checkValue.get(path) : void 0) || checkValue[path]
    } else {
      return checkValue;
    }
  }),

  _valuePath: computed('optionValuePath', function () {
    if (this.get('optionValuePath') !== null) {
      return this.get('optionValuePath').replace(/^content\.?/, '');
    }
  }),

  _labelPath: computed('optionLabelPath', function () {
    if (this.get('optionLabelPath') !== null) {
      return this.get('optionLabelPath').replace(/^content\.?/, '');
    }
  }),

  findValueObject(valueString) {
    let path = this.get('_valuePath');

    if (path) {
      if (this.get('groupedContent')) {
        let groupList = []
        for (var option of this.get('searchList')) {
          groupList.push(...option.items)
        }
        return groupList.find(v => v[path] == valueString);
      } else {
        return this.get('content').find(v => v[path] == valueString);
      }
    } else {
      return this.get('content').find(v => v == valueString);
    }
  },

  moveUpDown(e) {
    let el = $(e.currentTarget);

    let list = el.find('.BourbonSelectField-menu');
    let allOptions = el.find('.BourbonSelectField-menu .BourbonSelectField-option');
    let numOptions = allOptions.length;

    if (e.keyCode === 40) {
      // e.keyCode 40 is for 'down arrow'
      // resetting all options
      if (this.get('activeOption') !== numOptions - 1) {
        $(allOptions).removeClass('Bourbon--active');
      }

      if (this.get('activeOption') === null) {
        this.set('activeOption', 0);
      } else if (this.get('activeOption') >= 0 && this.get('activeOption') < numOptions - 1) {
        this.set('activeOption', this.get('activeOption') + 1);
      }

      this.selectOption(allOptions, list);
    // e.keyCode 38 is for 'up arrow'
    } else if (e.keyCode === 38) {
      if (this.get('activeOption') === null) {
        return;
      }

      if (this.get('activeOption') > 0 && this.get('activeOption') < numOptions) {
        if (this.get('activeOption') !== numOptions) {
          $(allOptions).removeClass('Bourbon--active');
        }

        this.set('activeOption', this.get('activeOption') - 1);
        this.selectOption(allOptions, list);
      }
    }
  },

  getSelection() {
    let path = this.get('_valuePath');
    if (path && this.get('value') && this.get('content')) {
      return this.get('content').findBy(path, this.get('value'));
    } else {
      return this.get('value');
    }
  },

  selectOption(allOptions, list) {
    let selectedOption = allOptions[this.get('activeOption')];
    this.scrollList(selectedOption, list);
    $(selectedOption).addClass('Bourbon--active');
  },

  scrollList(item, list) {
    let listHeight = list.height();
    let totalHeight = (this.get('activeOption') + 1) * item.scrollHeight;
    let scrollHeight = totalHeight - listHeight;
    list.scrollTop(scrollHeight);
  }
});
