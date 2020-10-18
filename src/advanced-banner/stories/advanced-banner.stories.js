import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import globalBannerStyles from '../../common/css/o-dc-components.css';
import advancedBannerStyles from '../css/advanced-banner.scss';

export const sampleContent = 

{"content":{"_meta":{"name":"Advanced Banner - TEXT TOP LEFT","schema":"https://amplience.com/composablecommerce/advanced-banner.json","deliveryId":"5d48dafa-2b5d-4b0b-9a4d-153447f242a5"},"bannerImage":{"imageholder":{"image":{"crop":[0,0,0,0],"rot":0,"hue":0,"sat":0,"bri":0,"fliph":false,"flipv":false,"poi":{"x":0.6792237442922374,"y":0.365296803652968},"aspectLock":"poi","query":"poi=0.6792,0.3653,0,0&scaleFit=poi","image":{"_meta":{"schema":"http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"},"id":"61bb6e40-c302-4f82-bade-44a1ab0f0881","name":"banner-womensbags-2-1-large-desktop","endpoint":"nmdemo","defaultHost":"i1.adis.ws"}}},"gifImage":false,"togglePOI":false,"component":"Image","imageAltText":"Women’s handbags","seoText":"Womens-handbags","_meta":{"schema":"https://amplience.com/composablecommerce/image.json"}},"header":{"text":"Women’s handbags","style":"black","fontSize":"medium","fontWeight":"bold"},"subheader":{"text":"Online exclusives & New arrivals","style":"black","fontSize":"small","fontWeight":"bold"},"description":{"text":"What do women look for when looking at women’s handbags? The ideal best friend, actually: always there for them, useful, an open mind and full of personality.","style":"black","fontSize":"small"},"hideMobileText":false,"button":{"buttonLabel":"VIEW ALL BAGS","buttonLink":"#","_meta":{"schema":"https://amplience.com/composablecommerce/advanced-button.json"}},"hasVideo":false,"video":{"backgroundFullScreen":false,"backgroundEffect":false,"component":"Video","_meta":{"schema":"https://amplience.com/composablecommerce/video.json"}},"showVideoTitle":false,"disclaimer":"*This is the disclaimer text","disclaimerFontColour":"rgb(0, 0, 0)","disclaimerTextHorizontal":"center","textPositionHorizontal":"left","textPositionVertical":"top"}}

storiesOf('Advanced Banner', module)
  .add('Example Content', () => renderContent('amp-template-advanced-banner', sampleContent.content));