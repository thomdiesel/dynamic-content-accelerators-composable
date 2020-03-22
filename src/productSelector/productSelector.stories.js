import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import cardListStyles from './productSelector.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta---product-selector",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-selector",
            "deliveryId": "55544eaa-f986-4ed2-8d80-e956e53c669b"
        },
        "products": [
        {
            "id": "64e37229-8922-4c37-8413-1007df2ebc29"
        },
        {
            "id": "c846bb63-21a6-4542-9b58-8da32ad50f7f"
        },
        {
            "id": "5561e03a-c35a-4033-8b69-f186f72cde56"
        }]
    }
};

storiesOf('Product Selector', module)
  .add('Example content', () => renderContent('acc-template-productSelector', sampleContent));