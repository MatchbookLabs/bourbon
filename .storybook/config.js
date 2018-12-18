import { configure, addDecorator } from '@storybook/ember';
import { withNotes } from '@storybook/addon-notes';
import { checkA11y } from "@storybook/addon-a11y";
import Centered from "@storybook/addon-centered/ember";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { setConsoleOptions } from '@storybook/addon-console';
import { configureViewport } from '@storybook/addon-viewport';

setConsoleOptions({
    panelExclude: [],
});

addDecorator(withNotes);
addDecorator(checkA11y);
addDecorator(Centered);
addDecorator(
    withBackgrounds([
        { name: "white", value: "#FFF" },
        { name: "slate", value: "#474C4F" }
    ])
);

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);
