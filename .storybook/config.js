import { configure, addDecorator } from '@storybook/ember';
import { withNotes } from '@storybook/addon-notes';
import { checkA11y } from "@storybook/addon-a11y";
import Centered from "@storybook/addon-centered/ember";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { setConsoleOptions } from '@storybook/addon-console';
import { configureViewport } from '@storybook/addon-viewport';
import { withOptions } from "@storybook/addon-options";

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

addDecorator(
  withOptions({
    name: "Bourbon",
    url: 'https://github.com/MatchbookLabs/bourbon',
    goFullScreen: false,
    showStoriesPanel: true
  })
);

function loadStories() {
    require('../stories/Buttons.stories.js');
    require('../stories/Tooltip.stories.js');
    require('../stories/TextField.stories.js');
    require('../stories/Modals.stories.js');
    require('../stories/SelectField.stories.js');
    require('../stories/SearchSelectField.stories.js');
    require('../stories/StaticComponents.stories.js');
    require('../stories/Icons.stories.js');
}

configure(loadStories, module);
