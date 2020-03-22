import {
    storiesOf
} from '@storybook/html';

import { renderContent } from '../../.storybook/rendering-service';

import textStyles from './ulta-image.scss';

export const sampleContent = {};

storiesOf('Ulta Image', module)
    .add('Example content', () => renderContent('ultapoc-template-ulta-image', sampleContent));