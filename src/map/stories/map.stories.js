import {
  storiesOf
} from '@storybook/html';

import { renderContent } from '../../../.storybook/rendering-service';

import styles from '../css/map.scss';

export const map = {
  "content": {
    "_meta": {
      "name": "CC - Map",
      "schema": "https://amplience.com/composablecommerce/map.json",
      "deliveryId": "9d5c13fb-3d31-4282-a335-df76a31f0d05"
    },
    "location": {
      "lat": 51.51131570256718,
      "lng": -0.12221419021300584
    },
    "zoomControl": true,
    "mapTypeControl": true,
    "streetViewControl": true,
    "fullscreenControl": false,
    "locationName": "Amplience HQ",
    "theme": "Dark",
    "mapZoom": "18"
  }
};

storiesOf('Map', module)
  .add('Location', () => renderContent('amp-template-map', map.content));