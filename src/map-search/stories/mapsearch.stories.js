import {
  storiesOf
} from '@storybook/html';

import { renderContent } from '../../../.storybook/rendering-service';

import styles from '../css/map-search.scss';

export const mapsearch = {
  "content": {
    "_meta": {
      "name": "Map Search - Stores",
      "schema": "https://amplience.com/composablecommerce/map-search.json",
      "deliveryId": "a61f502c-31e1-4708-8de6-0dd6e6e048a9"
    },
    "theme":"Dark",
    "mapTypeControl": false,
    "streetViewControl": false,
    "fullscreenControl": false,
    "indexName": "eu-sfcc-ps-demo.store-locations"
  }
};

storiesOf('Map Search', module)
  .add('Store Locator', () => renderContent('amp-template-map-search', mapsearch.content));