import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import cardStyles from './product-card.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta-poc---product-card---wk0320-nld-clinique",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
            "deliveryId": "38da95e2-0fb2-4335-a865-1f550cc05618"
        },
        "image":
        {
            "image":
            {
                "crop": [0, 0, 0, 0],
                "rot": 0,
                "hue": 0,
                "sat": 0,
                "bri": 0,
                "fliph": false,
                "flipv": false,
                "poi":
                {
                    "x": -1,
                    "y": -1
                },
                "aspectLock": "clear",
                "image":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "c80f71ee-791d-4f04-be06-67efeab8eb06",
                    "name": "wk0320_nld_clinique",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                }
            },
            "gifImage": false,
            "mobileImage":
            {
                "_meta":
                {
                    "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                },
                "id": "971ecbe7-2230-4fd7-b7b4-77978c502fef",
                "name": "wk0320_nld_clinique_m",
                "endpoint": "ultapoc",
                "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
            },
            "_meta":
            {
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
            },
            "roundel": [
            {
                "roundel":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "547b1756-4081-4a20-ba97-95c3083147d6",
                    "name": "badge-whats-new",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "roundelRatio": 0.2,
                "roundelPosition": "Top Left"
            }]
        },
        "cardPromo": "Free Gift",
        "cardBrand": "CLINIQUE",
        "cardProduct": "Full-Size Eyeliner with any Full-Size Clinique Mascara purchase",
        "cardPrice": "up to a $22 value"
    }
};

storiesOf('Product Card', module)
  .add('Example content', () => renderContent('ultapoc-template-product-card', sampleContent.content));