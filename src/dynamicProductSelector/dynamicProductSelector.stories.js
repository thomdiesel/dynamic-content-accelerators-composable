import {
    storiesOf
} from '@storybook/html';

import {
    renderContent
} from '../../.storybook/rendering-service';

import cardListStyles from './dynamicProductSelector.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "example---dynamic-product-list",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/dynamic-product-list.json",
            "deliveryId": "959be855-b1c2-4c42-aaef-b272a350a429"
        },
        "search": "mascara",
        "limit": "5"
    }
};

storiesOf('Dynamic Product Selector', module)
    .add('Example content', () => renderContent('acc-template-dynamicProductSelector', sampleContent.content));