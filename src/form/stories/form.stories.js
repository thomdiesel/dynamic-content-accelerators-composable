import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import globalBannerStyles from '../../common/css/o-dc-components.css';
import advancedBannerStyles from '../css/form.scss';

export const sampleContent = {
	"content": {
	  "_meta": {
		"name": "CC - Example Form",
		"schema": "https://amplience.com/composablecommerce/form.json",
		"deliveryId": "65fe8d85-c30d-4976-980d-57187ac7c1b1"
	  },
	  "header": {
		"text": "My Form"
	  },
	  "subheader": {
		"text": "Fill out this form for a chance to win all of the money in the world!",
		"fontSize": "small"
	  },
	  "formFields": [
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "inputType": "text",
		  "name": "name",
		  "label": "Name"
		},
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "options": [
			"Option 1",
			"Option 2",
			"Option 3",
			"Option 4"
		  ],
		  "inputType": "select",
		  "name": "select",
		  "label": "Select"
		},
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "inputType": "checkbox",
		  "name": "yesno",
		  "label": "Yes / No"
		},
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "inputType": "textarea",
		  "name": "textarea",
		  "label": "Text Area",
		  "numLines": 5
		},
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "inputType": "email",
		  "name": "email",
		  "label": "Email"
		},
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "inputType": "tel",
		  "name": "tel",
		  "label": "Tel"
		},
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "inputType": "number",
		  "name": "number",
		  "label": "Number"
		},
		{
		  "_meta": {
			"schema": "https://amplience.com/composablecommerce/form-input.json"
		  },
		  "required": false,
		  "inputType": "hidden",
		  "name": "hidden",
		  "label": "Hidden"
		}
	  ],
	  "buttonText": "Submit"
	}
  };

storiesOf('Form', module)
  .add('Form', () => renderContent('amp-template-form', sampleContent.content));