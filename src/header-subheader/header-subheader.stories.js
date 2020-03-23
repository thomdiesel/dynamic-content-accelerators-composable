import {
    storiesOf
} from '@storybook/html';

import { renderContent } from '../../.storybook/rendering-service';

import textStyles from './header-subheader.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta-poc---header--subheader",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/header-subheader.json",
            "deliveryId": "519dca5b-4f83-4898-a4b1-43ba7d7da6c3"
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
                    "id": "ef9e8a05-7635-40d8-abd9-e87e63843aa0",
                    "name": "wk0320_nld_lashes_title",
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
                "id": "e4fd4fd3-ddc6-4a2b-82a3-07291310dc8e",
                "name": "wk0320_nld_lashes_title_m",
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

storiesOf('Header Subheader', module)
    .add('Example content', () => renderContent('ultapoc-template-header-subheader', sampleContent.content));