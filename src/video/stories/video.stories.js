import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import videoStyles from '../css/video.scss';

export const sampleContent = {
  "@id": "http://content.cms.amplience.com/05c1affc-ac26-4f4f-98dc-9f12dc912583",
  "video": {
    "@id": "http://video.cms.amplience.com/39685e7b-3dbe-43f4-aebe-df94474f994e",
    "mediaType": "video",
    "name": "Amplience Overview",
    "endpoint": "csdemo",
    "defaultHost": "i1.adis.ws"
  },
  "_title": "test_video",
  "@type": "https://unpkg.com/@amplience/dynamic-content-accelerators/dist/contentTypes/video.json"
};

export const sampleContentAmplience = {
  "_meta": {
    "name": "CC - Video Amplience",
    "schema": "https://amplience.com/composablecommerce/video.json",
    "deliveryId": "ffdd0cb2-64a1-487b-b6ff-d3e76ec2358f"
  },
  "amplienceVideo": {
    "_meta": {
      "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/video-link"
    },
    "id": "18d7c604-f5f9-4d92-be11-af1fdd4d51d3",
    "name": "nly2019_campaign_Party-puffs_08",
    "endpoint": "nmdemo",
    "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
  },
  "backgroundFullScreen": false,
  "backgroundEffect": false,
  "component": "Video"
}

export const sampleContentYoutube = {
  "_meta": {
    "name": "CC - Video Youtube",
    "schema": "https://amplience.com/composablecommerce/video.json",
    "deliveryId": "3eddd16b-497f-4a25-a698-52c50056beca"
  },
  "backgroundFullScreen": false,
  "backgroundEffect": false,
  "component": "Video",
  "addYoutube": "https://www.youtube.com/embed/EdD99M8c4us"
}

storiesOf('Video', module)
  .add('OLD CS Example content', () => renderContent('amp-template-video', sampleContent))
  .add('Video - Amplience', () => renderContent('amp-template-video', sampleContentAmplience))
  .add('Video - Youtube', () => renderContent('amp-template-video', sampleContentYoutube));