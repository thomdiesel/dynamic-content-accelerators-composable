import {
  storiesOf
} from '@storybook/html';

import { renderContent } from '../../../.storybook/rendering-service';

import textStyles from '../css/text.scss';

export const sampleContent = {
  "@id": "http://content.cms.amplience.com/4c09a6ad-3e22-4bea-8c10-05c36fb0e680",
  "_meta": {
    "schema": "https://amplience.com/composablecommerce/text.json",
    "name": "CC - Text"
  },
  "text": "# Fashion For You\n\nEveryday wear to fit every occasion.\n\nWhether you are lounging or partying you need to look good wherever you are.\n\nBrowse our latest collection and be inspired by the possibilities.\n\nKeeping up with the Jones' has never been this easy.",
  "@type": "https://amplience.com/composablecommerce/text.json"
};

export const sampleContentCDv2 = {
    "_meta": {
      "name": "CC - Text",
      "schema": "https://amplience.com/composablecommerce/text.json",
      "deliveryId": "4c09a6ad-3e22-4bea-8c10-05c36fb0e680"
    },
    "text": "This is some text\n\n# This is a h1",
    "component": "Text"
  }

storiesOf('Text', module)
  //.add('Example content', () => renderContent('amp-template-text', sampleContent));
  .add('Text CDV1', () => renderContent('amp-template-text', sampleContent))
  .add('Text CDV2', () => renderContent('amp-template-text', sampleContentCDv2));