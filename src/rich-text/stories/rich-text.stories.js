import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import sliderStyles from '../css/rich-text.scss';

export const sampleContent = {};

const sampleVideoContent = {};

storiesOf('Rich Text', module)
  .add('Looping', () => renderContent('acc-template-rich-text', sampleContent))