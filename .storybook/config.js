import { configure, addDecorator } from '@storybook/ember';
import { withNotes } from '@storybook/addon-notes';
import { checkA11y } from "@storybook/addon-a11y";

addDecorator(withNotes);
addDecorator(checkA11y);

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
