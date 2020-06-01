import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../.storybook/rendering-service';

import megaMenuStyles from './megaMenu.scss';

export const sampleContent = {
    "content":
        {
            "_meta":
            {
                "name": "mega-menu",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/megaMenu.json",
                "deliveryKey": "ulta-menu",
                "deliveryId": "0f795c5d-1bda-4938-836a-49a959f5d11c"
            },
            "menu": [
            {
                "type": "root-menu",
                "data":
                {
                    "label": "Home",
                    "link": "ulta-home"
                }
            },
            {
                "type": "root-menu",
                "data":
                {
                    "label": "National Lash Day Sale",
                    "link": "ulta-events-nld"
                }
            },
            {
                "type": "root-menu",
                "data":
                {
                    "label": "Skin Care",
                    "link": "ulta-skin-care"
                }
            }]
        }
};

storiesOf('Mega Menu', module)
  .add('Example Content', () => renderContent('acc-template-megaMenu', sampleContent.content));