import {
  storiesOf
} from '@storybook/html';

import { renderContent } from '../../.storybook/rendering-service';

import textStyles from './customRichText.scss';

export const sampleContent = {};

storiesOf('Custom Rich Text', module)
  .add('Example content', () => renderContent('acc-template-text', sampleContent));