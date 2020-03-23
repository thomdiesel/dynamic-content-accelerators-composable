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
            "name": "example---product-selector",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-selector",
            "deliveryId": "d5df20a7-c4ea-45c9-84a7-8b06d2deb2fe"
        },
        "products": ["525cf54f-5aa0-471e-be06-eba6d4311459", "d461c692-0b10-4768-b3fd-8c29e2838565", "595b2fd0-1017-4657-adfc-9f7468aeb0d5"]
    }
};

storiesOf('Product Selector', module)
    .add('Example content', () => renderContent('acc-template-productSelector', sampleContent.content));