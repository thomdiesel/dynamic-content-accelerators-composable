import {
    storiesOf
} from '@storybook/html';

import { renderContent } from '../../.storybook/rendering-service';

import textStyles from './simple-banner.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta-poc---simple-banner",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/simple-banner.json",
            "deliveryId": "89356c3c-64a3-4202-b6a7-109255d2b310"
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
                    "id": "44cdd91e-b053-4a14-8edb-65cc243d4a47",
                    "name": "wk0320_nld_freegift",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                }
            },
            "gifImage": false,
            "_meta":
            {
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
            },
            "imageAltText": "Example Alt Text",
            "seoText": "example-SEO-Text",
            "mobileImage":
            {
                "_meta":
                {
                    "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                },
                "id": "4ac92150-8930-428d-b45b-a44a16ab94c7",
                "name": "wk0320_nld_freegift_m_1",
                "endpoint": "ultapoc",
                "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
            }
        }
    }
};

storiesOf('Simple Banner', module)
    .add('Example content', () => renderContent('ultapoc-template-simple-banner', sampleContent));