import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import bannerStyles from '../css/simple-image-banner.scss';

export const sampleContent = {
  "content": {
    "_meta": {
      "name": "Simple Image Banner - CC",
      "schema": "https://amplience.com/composablecommerce/simple-image-banner.json",
      "deliveryId": "a5255324-16ab-473f-8fed-6afae734995e"
    },
    "bannerImage": {
      "gifImage": false,
      "component": "SimpleImage",
      "imageref": "https://www.bodyandfit.com/medias/UK-hp-banner-desktop-full-1920x670-UT50-off.png?context=bWFzdGVyfHJvb3R8NTQ2MTk1fGltYWdlL3BuZ3xoNGQvaDgzLzk1Njc4NjQwMjkyMTQucG5nfDRlNzY4MzRjMWY3YzRlNzljOThkZjcwMTY1MzU4M2ExNDM2NzZiMmI5ZmFiMzU1MTllMDgyMWY5OTUxMjgwYzI",
      "mobileimageref": "https://www.bodyandfit.com/medias/UK-hp-banner-mobile-480x632-UT50-off.png?context=bWFzdGVyfHJvb3R8MTIzNTQwfGltYWdlL3BuZ3xoYWYvaGQxLzk1Njc4NjQxNjAyODYucG5nfGQ5M2IwMGViY2UxZmVhZWMyYmMzN2JmMmE1ODExMjdlZDAwNThkNjM2NWFkMjE3MDM3Y2JjZDA1NmRiMjU3NTA",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/simple-image.json"
      }
    },
    "component": "SimpleImageBanner",
    "link": "https://www.bodyandfit.com/en-gb/en-gb/c/back-to-your-best?hpbanner",
    "analytics": "hpbanner"
  }
};

export const sampleWithAmplienceImages = {
  "content": {
    "_meta": {
      "name": "Simple Image Banner - CC",
      "schema": "https://amplience.com/composablecommerce/simple-image-banner.json",
      "deliveryId": "55db3243-4c15-438a-aae4-ca176a0a9d76"
    },
    "bannerImage": {
      "gifImage": false,
      "component": "SimpleImage",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/simple-image.json"
      },
      "image": {
        "image": {
          "_meta": {
            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
          },
          "id": "c05d1fb7-683f-4065-bfce-c3da93be488a",
          "name": "UK-hp-banner-desktop-full-1920x670-UT50-off",
          "endpoint": "nmdemo",
          "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
        }
      },
      "mobileImage": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "3478c923-fdbb-4e08-8b20-5a9571e56031",
        "name": "UK-hp-banner-mobile-480x632-UT50-off",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      }
    },
    "link": "https://www.bodyandfit.com/en-gb/en-gb/c/back-to-your-best?hpbanner",
    "analytics": "hpbanner",
    "component": "SimpleImageBanner"
  }
}

export const sampleLocalisedNL = {
  "content": {
    "_meta": {
      "name": "Simple Image Banner Localised - CC",
      "schema": "https://amplience.com/composablecommerce/simple-image-banner-localised.json",
      "deliveryId": "6d8a1eb8-5303-407c-bba2-454b8b8d4aa4"
    },
    "bannerImage": {
      "gifImage": false,
      "component": "SimpleImage",
      "_meta": {
        "schema": "https://amplience.com/composablecommerce/simple-image.json"
      },
      "image": {
        "image": {
          "_meta": {
            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
          },
          "id": "323005ac-b1ef-49a3-b56c-839d1b99a3dd",
          "name": "NL-hp-banner-desktop-full-1920x670-UT50-off",
          "endpoint": "nmdemo",
          "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
        }
      },
      "mobileImage": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "0ce6ae06-3e5e-4dfb-9f9f-41250d8240d3",
        "name": "NL-hp-banner-mobile-480x632-UT50-off",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      }
    },
    "link": "https://www.bodyandfit.com/nl-nl/nl-nl/c/back-to-your-best?hpbanner",
    "analytics": null,
    "component": "SimpleImageBannerLocalised"
  }
}

storiesOf('Simple Image Banner', module)
  .add('Simple Image Banner', () => renderContent('amp-template-simple-image-banner', sampleContent.content))
  .add('Simple Image Banner Amplience', () => renderContent('amp-template-simple-image-banner', sampleWithAmplienceImages.content))
  .add('Simple Image Banner Localised NL', () => renderContent('amp-template-simple-image-banner', sampleLocalisedNL.content));