import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../.storybook/rendering-service';

import bannerStyles from './banner.scss';

export const sampleContent = {"content":{"_meta":{"name":"ulta---advanced-banner-example","schema":"https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/banner.json","deliveryId":"5c1ffdc4-7fb4-497d-9c5b-2774cc340af1"},"image":{"image":{"crop":[0,0,0,0],"rot":0,"hue":0,"sat":0,"bri":0,"fliph":false,"flipv":false,"poi":{"x":0.5,"y":0.5},"aspectLock":"poi","image":{"_meta":{"schema":"http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"},"id":"1c537455-af0a-465a-8253-6a2829a33ea3","name":"wk0820d_hero_21dob_","endpoint":"ultapoc","defaultHost":"x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"},"query":"poi=0.5,0.5,0,0&scaleFit=poi"},"gifImage":false,"_meta":{"schema":"https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/advanced-image.json"}},"button":{"label":"Shop Now","value":"http://www.ulta.com"},"stackMobileLayout":true,"header":"The New Factor","subheader":"Discover Your Next Fav","textPositionLeft":"43","textPositionTop":"60"}};

storiesOf('Banner', module)
  .add('Example Content', () => renderContent('ultapoc-template-advanced-banner', sampleContent.content));