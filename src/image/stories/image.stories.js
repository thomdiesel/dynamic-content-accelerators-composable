import {
  storiesOf
} from '@storybook/html';

import { renderContent } from '../../../.storybook/rendering-service';

export const sampleContent = {
  "@id": "http://content.cms.amplience.com/38476590-9594-4d46-8f5a-c54e293fd094",
  "_meta": {
    "schema": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json",
    "name": "accelerator-image-1"
  },
  "image": {
    "@id": "http://image.cms.amplience.com/f46fecc5-945c-451c-879e-5c974a821891",
    "_meta": {
      "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
    },
    "id": "f46fecc5-945c-451c-879e-5c974a821891",
    "name": "textwireframe",
    "endpoint": "solutions",
    "defaultHost": "i1.adis.ws",
    "mediaType": "image"
  },
  "roundel": [{
    "roundel": {
      "id": "cad6cb31-1936-4193-82de-1844a1235c91",
      "name": "shutterstock_151174712",
      "endpoint": "solutions",
      "defaultHost": "i1.adis.ws",
      "mediaType": "image",
      "_meta": {
        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
      }
    }
  }],
  "imageAltText": "pexels-photo-128939",
  "seoText": "pexels-photo-128939",
  "@type": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json"
};

export const sampleImage = {
  "_meta": {
    "name": "CC - image",
    "schema": "https://amplience.com/composablecommerce/image.json",
    "deliveryId": "f96c9e35-b5d4-4a9d-a995-96a16546cc48"
  },
  "imageholder": {
    "image": {
      "crop": [
        0,
        0,
        0,
        0
      ],
      "rot": 0,
      "hue": 0,
      "sat": 0,
      "bri": 0,
      "fliph": false,
      "flipv": false,
      "poi": {
        "x": -1,
        "y": -1
      },
      "aspectLock": "clear",
      "image": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "35cce885-5e64-4288-86f2-9fd8dcbf7460",
        "name": "anyafinn_Fashion_Mens_Collection_SS",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      }
    }
  },
  "gifImage": false,
  "togglePOI": false,
  "component": "Image",
  "imageAltText": "This is some sample Alt Text",
  "seoText": "sample-seo-text"
}

export const sampleImagePOI = {
  "_meta": {
    "name": "CC - image POI",
    "schema": "https://amplience.com/composablecommerce/image.json",
    "deliveryId": "13ebe220-20ad-482d-a3eb-040fa90ee082"
  },
  "imageholder": {
    "image": {
      "crop": [
        0,
        0,
        0,
        0
      ],
      "rot": 0,
      "hue": 0,
      "sat": 0,
      "bri": 0,
      "fliph": false,
      "flipv": false,
      "poi": {
        "x": 0.2914893617021277,
        "y": 0.30278378275875145
      },
      "aspectLock": "poi",
      "image": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "35cce885-5e64-4288-86f2-9fd8dcbf7460",
        "name": "anyafinn_Fashion_Mens_Collection_SS",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      },
      "query": "poi=0.2915,0.3028,0,0&scaleFit=poi"
    }
  },
  "gifImage": false,
  "togglePOI": false,
  "imageAltText": "This is some sample Alt Text",
  "seoText": "sample-seo-text",
  "component": "Image"
}

export const sampleImagePOI_Effect_ZoomInDark = {
  "_meta": {
    "name": "CC - image POI",
    "schema": "https://amplience.com/composablecommerce/image.json",
    "deliveryId": "13ebe220-20ad-482d-a3eb-040fa90ee082"
  },
  "imageholder": {
    "image": {
      "crop": [
        0,
        0,
        0,
        0
      ],
      "rot": 0,
      "hue": 0,
      "sat": 0,
      "bri": 0,
      "fliph": false,
      "flipv": false,
      "poi": {
        "x": 0.2914893617021277,
        "y": 0.30278378275875145
      },
      "aspectLock": "poi",
      "image": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "35cce885-5e64-4288-86f2-9fd8dcbf7460",
        "name": "anyafinn_Fashion_Mens_Collection_SS",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      },
      "query": "poi=0.2915,0.3028,0,0&scaleFit=poi"
    }
  },
  "gifImage": false,
  "togglePOI": false,
  "imageAltText": "This is some sample Alt Text",
  "seoText": "sample-seo-text",
  "component": "Image",
  "imageEffect": "Zoom-in dark"
}

export const sampleImagePOI_Effect_ZoomInBlur = {
  "_meta": {
    "name": "CC - image POI",
    "schema": "https://amplience.com/composablecommerce/image.json",
    "deliveryId": "13ebe220-20ad-482d-a3eb-040fa90ee082"
  },
  "imageholder": {
    "image": {
      "crop": [
        0,
        0,
        0,
        0
      ],
      "rot": 0,
      "hue": 0,
      "sat": 0,
      "bri": 0,
      "fliph": false,
      "flipv": false,
      "poi": {
        "x": 0.2914893617021277,
        "y": 0.30278378275875145
      },
      "aspectLock": "poi",
      "image": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "35cce885-5e64-4288-86f2-9fd8dcbf7460",
        "name": "anyafinn_Fashion_Mens_Collection_SS",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      },
      "query": "poi=0.2915,0.3028,0,0&scaleFit=poi"
    }
  },
  "gifImage": false,
  "togglePOI": false,
  "imageAltText": "This is some sample Alt Text",
  "seoText": "sample-seo-text",
  "component": "Image",
  "imageEffect": "Zoom-in blur"
}

export const sampleImagePOI_Effect_Linear = {
  "_meta": {
    "name": "CC - image POI",
    "schema": "https://amplience.com/composablecommerce/image.json",
    "deliveryId": "13ebe220-20ad-482d-a3eb-040fa90ee082"
  },
  "imageholder": {
    "image": {
      "crop": [
        0,
        0,
        0,
        0
      ],
      "rot": 0,
      "hue": 0,
      "sat": 0,
      "bri": 0,
      "fliph": false,
      "flipv": false,
      "poi": {
        "x": 0.2914893617021277,
        "y": 0.30278378275875145
      },
      "aspectLock": "poi",
      "image": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "35cce885-5e64-4288-86f2-9fd8dcbf7460",
        "name": "anyafinn_Fashion_Mens_Collection_SS",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      },
      "query": "poi=0.2915,0.3028,0,0&scaleFit=poi"
    }
  },
  "gifImage": false,
  "togglePOI": false,
  "imageAltText": "This is some sample Alt Text",
  "seoText": "sample-seo-text",
  "component": "Image",
  "imageEffect": "Linear"
}

export const sampleImagePOI_Effect_DoubleLineHorizontal = {
  "_meta": {
    "name": "CC - image POI",
    "schema": "https://amplience.com/composablecommerce/image.json",
    "deliveryId": "13ebe220-20ad-482d-a3eb-040fa90ee082"
  },
  "imageholder": {
    "image": {
      "crop": [
        0,
        0,
        0,
        0
      ],
      "rot": 0,
      "hue": 0,
      "sat": 0,
      "bri": 0,
      "fliph": false,
      "flipv": false,
      "poi": {
        "x": 0.2914893617021277,
        "y": 0.30278378275875145
      },
      "aspectLock": "poi",
      "image": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "35cce885-5e64-4288-86f2-9fd8dcbf7460",
        "name": "anyafinn_Fashion_Mens_Collection_SS",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      },
      "query": "poi=0.2915,0.3028,0,0&scaleFit=poi"
    }
  },
  "gifImage": false,
  "togglePOI": false,
  "imageAltText": "This is some sample Alt Text",
  "seoText": "sample-seo-text",
  "component": "Image",
  "imageEffect": "Double-line Horizontal"
}

export const sampleImagePOI_Effect_Parallax = {
  "_meta": {
    "name": "CC - image POI",
    "schema": "https://amplience.com/composablecommerce/image.json",
    "deliveryId": "13ebe220-20ad-482d-a3eb-040fa90ee082"
  },
  "imageholder": {
    "image": {
      "crop": [
        0,
        0,
        0,
        0
      ],
      "rot": 0,
      "hue": 0,
      "sat": 0,
      "bri": 0,
      "fliph": false,
      "flipv": false,
      "poi": {
        "x": 0.2914893617021277,
        "y": 0.30278378275875145
      },
      "aspectLock": "poi",
      "image": {
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        },
        "id": "35cce885-5e64-4288-86f2-9fd8dcbf7460",
        "name": "anyafinn_Fashion_Mens_Collection_SS",
        "endpoint": "nmdemo",
        "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
      },
      "query": "poi=0.2915,0.3028,0,0&scaleFit=poi"
    }
  },
  "gifImage": false,
  "togglePOI": false,
  "imageAltText": "This is some sample Alt Text",
  "seoText": "sample-seo-text",
  "component": "Image",
  "imageEffect": "Parallax"
}

storiesOf('Image', module)
  .add('OLD CS Example content', () => renderContent('amp-template-image', sampleContent))
  .add('Standard Image', () => renderContent('amp-template-image', sampleImage))
  .add('Image Point of Interest', () => renderContent('amp-template-image', sampleImagePOI))
  .add('Image - Zoom In Dark', () => renderContent('amp-template-image', sampleImagePOI_Effect_ZoomInDark))
  .add('Image - Zoom In Blur', () => renderContent('amp-template-image', sampleImagePOI_Effect_ZoomInBlur))
  .add('Image - Linear', () => renderContent('amp-template-image', sampleImagePOI_Effect_Linear))
  .add('Image - Double line horizontal', () => renderContent('amp-template-image', sampleImagePOI_Effect_DoubleLineHorizontal))
  .add('Image - Parallax', () => renderContent('amp-template-image', sampleImagePOI_Effect_Parallax))


  import imageStyles from '../css/image.scss';