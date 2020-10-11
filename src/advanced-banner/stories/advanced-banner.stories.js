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

export const sampleContent = {
	"content": {
	  "_meta": {
		"name": "Advanced Banner - CC",
		"schema": "https://amplience.com/composablecommerce/advanced-banner.json",
		"deliveryId": "8c4a0b35-57d8-4a35-8893-72beb87c8457"
	  },
	  "bannerImage": {
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
			  "x": 0.2359223300970874,
			  "y": 0.45548471236052746
			},
			"aspectLock": "poi",
			"image": {
			  "_meta": {
				"schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
			  },
			  "id": "e6a26855-9533-49d9-9dd4-b2ab91182422",
			  "name": "hp-banner-desktop-full-1920x670",
			  "endpoint": "nmdemo",
			  "defaultHost": "j8k03awso8f81on4oigwzgwv1.staging.bigcontent.io"
			},
			"query": "poi=0.2359,0.4555,0,0&scaleFit=poi"
		  }
		},
		"gifImage": false,
		"togglePOI": false,
		"component": "Image",
		"_meta": {
		  "schema": "https://amplience.com/composablecommerce/image.json"
		}
	  },
	  "headerloc": "FEED YOUR ASPIRATIONS",
	  "hideMobileText": false,
	  "button": {
		"buttonLabel": "SHOP NOW",
		"buttonLink": "https://www.bodyandfit.com/en-gb/en-gb/c/back-to-your-best?hpbanner",
		"buttonStyle": "white",
		"_meta": {
		  "schema": "https://amplience.com/composablecommerce/advanced-button.json"
		},
		"buttonFontWeight": "bold"
	  },
	  "hasVideo": false,
	  "video": {
		"backgroundFullScreen": false,
		"backgroundEffect": false,
		"component": "Video",
		"_meta": {
		  "schema": "https://amplience.com/composablecommerce/video.json"
		}
	  },
	  "showVideoTitle": false,
	  "headerStyle": "white",
	  "headerFontSize": "medium",
	  "headerFontWeight": "bold",
	  "subheader": "UP TO",
	  "subheaderStyle": "white",
	  "subheaderFontSize": "small",
	  "subheaderFontWeight": "normal",
	  "description": "50% OFF",
	  "descriptionStyle": "white",
	  "descriptionFontSize": "large",
	  "descriptionFontWeight": "bold",
	  "textPositionHorizontal": "right",
	  "textPositionVertical": "middle",
	  "backgroundGradient": "right",
	  "textPositionHorizontalMobile": "center",
	  "textPositionVerticalMobile": "bottom",
	  "backgroundGradientMobile": "bottom",
	  "disclaimer": "#IGNITEYOURFIT",
	  "disclaimerFontColour": "rgb(255, 255, 255)",
	  "disclaimerTextHorizontal": "center"
	}
  };

storiesOf('Advanced Banner', module)
  .add('Example Content', () => renderContent('amp-template-advanced-banner', sampleContent.content));