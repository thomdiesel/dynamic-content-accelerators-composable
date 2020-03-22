import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import cardStyles from './simple-card.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta-poc---simple-card---pro-tip-2",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/simple-card.json",
            "deliveryId": "aa3471f6-b214-4b93-8364-382986aca263"
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
                    "id": "219ebe4f-4006-44fd-9134-30f253b8ce45",
                    "name": "wk0320-nld-pro-tip-2",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                }
            },
            "gifImage": true,
            "mobileImage":
            {
                "_meta":
                {
                    "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                },
                "id": "1771369c-3a96-4854-8411-d7b696f2bfea",
                "name": "wk0320-nld-pro-tip-2_m",
                "endpoint": "ultapoc",
                "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
            },
            "_meta":
            {
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
            }
        }
    }
};

storiesOf('Simple Card', module)
  .add('Example content', () => renderContent('ultapoc-template-simple-card', sampleContent));