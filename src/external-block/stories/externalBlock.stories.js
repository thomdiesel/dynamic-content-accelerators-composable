import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../../.storybook/rendering-service';

import externalBlockStyles from '../css/externalBlock.scss';

export const spotify = {
  "content": {
    "_meta": {
      "name": "CC - External Block - Spotify",
      "schema": "https://amplience.com/composablecommerce/external-block.json",
      "deliveryId": "ae18c48c-c7d5-4f38-a4a3-c5a334f6e297"
    },
    "external": "<iframe src=\"https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4bUbXk\" width=\"100%\" height=\"380px\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    "component": "ExternalBlock"
  }
};

export const youtube = {
  "content": {
    "_meta": {
      "name": "CC - External Block - YouTube video",
      "schema": "https://amplience.com/composablecommerce/external-block.json",
      "deliveryId": "4e86ae88-4239-4a8f-b2a1-24e1bf62c728"
    },
    "external": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7AZBPiPkO0o\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    "component": "ExternalBlock"
  }
};

export const purehtml = {
  "content": {
    "_meta": {
      "name": "CC - External Block - Pure HTML",
      "schema": "https://amplience.com/composablecommerce/external-block.json",
      "deliveryId": "47457e00-f32c-44a6-a074-6cf451e70a0f"
    },
    "external": "<!-- CSS required -->\n<link rel=\"stylesheet\" href=\"https://dpabadv9l3tpt.cloudfront.net/public/css/main.css\" media=\"screen, projection\">\n<!-- Template -->\n<div class=\"amp-ca-banner js_ca_banner\">\n        <div class=\"amp-ca-banner-pic-wrap\">\n            <div class=\"amp-ca-image-holder\">\n    <picture class=\"amp-ca-image\">\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=1600&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=3200&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(min-width: 1280px)\" type=\"image/webp\">\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=1600&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=3200&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(min-width: 1280px)\">\n\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=1280&$poi$&aspect=2:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=2560&$poi$&aspect=2:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(min-width: 1024px)\" type=\"image/webp\">\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=1280&$poi$&aspect=2:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=2560&$poi$&aspect=2:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(min-width: 1024px)\">\n\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=1024&$poi$&aspect=1.5:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=2048&$poi$&aspect=1.5:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(min-width: 768px)\" type=\"image/webp\">\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=1024&$poi$&aspect=1.5:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=2048&$poi$&aspect=1.5:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(min-width: 768px)\">\n\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=768&$poi$&aspect=1:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=1536&$poi$&aspect=1:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(max-width: 768px)\" type=\"image/webp\">\n        <source srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=768&$poi$&aspect=1:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=1536&$poi$&aspect=1:1&upscale=false&fmt.jpeg.interlaced=true 2x\" media=\"(max-width: 768px)\">\n\n        <img src=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=1600&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true\" srcset=\"//i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=1600&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20.webp?w=3200&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 2x,\n                 //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=1600&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 1x, //i1.adis.ws/i/nmdemo/anyafinn_Fashion_Mens_Collection_SS/Example%20SEO%20Text%20?w=3200&$poi$&aspect=2.6:1&upscale=false&fmt.jpeg.interlaced=true 2x\" class=\"amp-ca-image-pic\"  alt=\"Example Alt Text\"   title=\"Example SEO Text \"  />\n    </picture>\n</div>        </div>\n    <div class=\"amp-ca-banner-info-wrap\n    amp-ca-info-bottom\n\"\n         data-align=\"right\">\n\n        <div class=\"amp-ca-banner-info\" style=\"\">\n                <div class=\"amp-ca-banner-header\">Example Banner Header</div>\n                <div class=\"amp-ca-banner-subheader\">Subheader is here</div>\n                <div class=\"amp-ca-banner-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n                <a href=\"\"\n                   class=\"amp-ca-banner-button readMore white\">SHOP NOW</a>\n        </div>\n    </div>\n</div>",
    "component": "ExternalBlock"
  }
}

storiesOf('External Block', module)
  .add('External Block - Spotify Playlist', () => renderContent('amp-template-external-block', spotify.content))
  .add('External Block - YouTube', () => renderContent('amp-template-external-block', youtube.content))
  .add('External Block - Pure HTML', () => renderContent('amp-template-external-block', purehtml.content))