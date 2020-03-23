import {
    storiesOf
} from '@storybook/html';

import { renderContent } from '../../.storybook/rendering-service';

import textStyles from './content-block.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta-poc---content-block",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/content-block.json",
            "deliveryId": "74a05940-824d-433a-be0d-1361d72728c3"
        },
        "content": [
        {
            "_meta":
            {
                "name": "ulta-poc---bopis-image",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json",
                "deliveryId": "6d00759f-229b-4991-b107-6e61037fc6e9"
            },
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
                    "id": "ab2c9f76-1ee8-4c27-b0bd-ffa627ef8f60",
                    "name": "wk0320_nld_bopis",
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
                "id": "3ab0df00-1c82-45de-b304-cb16a2cb6717",
                "name": "wk0320_nld_bopis_m",
                "endpoint": "ultapoc",
                "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
            }
        },
        {
            "_meta":
            {
                "name": "ulta-poc--credit-card-image",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json",
                "deliveryId": "6c8ae50d-4e8e-4fc6-bfbf-4046da727a3f"
            },
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
                    "id": "b99ebb82-ea83-488d-8ab6-993ff8038e68",
                    "name": "wk0320_nld_creditcard",
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
                "id": "3d179037-7745-4673-a87b-41afd2d90dc7",
                "name": "wk0320_nld_creditcard_m",
                "endpoint": "ultapoc",
                "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
            },
            "imageAltText": "creditcard",
            "seoText": "creditcard"
        }],
        "split": "50/50"
    }
};

storiesOf('Content Block', module)
    .add('Example content', () => renderContent('ultapoc-template-content-block', sampleContent.content));