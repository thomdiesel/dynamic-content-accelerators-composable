import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import globalBannerStyles from '../../common/css/o-dc-components.css';

export const sampleContent = {
  "content": {
    "_meta": {
      "name": "SFCC Product Search",
      "schema": "https://www.amplience.com/examples/sfcc-product-search.json",
      "deliveryId": "ffa9643e-1373-4cb8-8d23-403ff2c1a76b"
    },
    "header": "Product Category List",
    "query": "shirt",
    "numItems": 20,
    "category": "womens"
  }
}

storiesOf('SFCC Product Search', module)
  .add('Womens / Shirt / 20', () => renderContent('amp-template-sfcc-product-search', sampleContent.content));