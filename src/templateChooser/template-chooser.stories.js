import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

const components = [
  ['Banner', 'banner'],
  ['Blog Post', 'blogPost'],
  ['Card', 'card'],
  ['Card List', 'cardList'],
  ['External Block', 'externalBlock'],
  ['Page', 'page'],
  ['Promo', 'promo'],
  ['Promo List', 'promo', 'samplePromoListContent'],
  ['Slider', 'slider'],
  ['Split Block', 'splitBlock'],
  ['Text', 'text'],
  ['Video', 'video'],
  ['Header Subheader', 'header-subheader'],
  ['Custom Rich Text', 'customRichText'],
  ['Mega Menu', 'megaMenu'],
  ['Product Selector', 'productSelector'],
  ['Ulta Image', 'ulta-image']
];

const stories = storiesOf('Template Chooser', module);

components.forEach(([label, name, contentName = 'sampleContent']) => {
  stories.add(label, () => renderContent('templateChooser', require(`../${name}/${name}.stories`)[contentName]));
});