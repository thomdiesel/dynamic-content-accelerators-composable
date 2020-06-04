const searchClient = algoliasearch(
  'T7I8W0D1V2',
  'c572522c02c617013a1f53c1fa9968e5'
)

const search = instantsearch({
  indexName: 'products_test_demo',
  searchClient,
})

const renderPageStats = (renderOptions, isFirstRender) => {
  const { nbHits, page, hitsPerPage, widgetParams } = renderOptions
  const start = page * hitsPerPage + 1
  const end = (page + 1) * hitsPerPage
  widgetParams.container.innerHTML = `<span class="ais-Page-stats">Results ${start}-${end} of ${nbHits}</span>`
}

const customPageStats = instantsearch.connectors.connectStats(renderPageStats)

const renderBanner = ({ widgetParams, hits }, isFirstRender) => {
  const container = document.querySelector(widgetParams.container)
  console.log('rendering', hits)
  $.ajaxSetup({
    // Disable caching of AJAX responses
    cache: false,
  })

  if (hits && hits.length) {
    $(container).load(hits[0].ampURLHTML)
  } else {
    container.innerHTML = ''
  }
}

const customBanner = instantsearch.connectors.connectHits(renderBanner)

search.addWidgets([
  PersonaDropDown({
    container: '#personas-dropdown',
    personas: [
      {
        label: 'John',
        context: 'persona_john',
      },
      {
        label: 'Mary',
        context: 'persona_mary',
      },
    ],
    searchParameters: {},
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements-desktop',
    templates: {
      resetLabel: `<div class="clear-filters">
              <i class="materialIcons">refresh</i>
              Clear all filters
            </div>`,
    },
  }),

  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements-mobile',
    templates: {
      resetLabel: 'Clear all filters',
    },
  }),

  instantsearch.widgets.stats({
    container: '#stats-mobile',
    templates: {
      text: `
            {{#hasNoResults}}<strong>0</strong> result{{/hasNoResults}}
            {{#hasOneResult}}<strong>1</strong> result{{/hasOneResult}}
            {{#hasManyResults}}<strong>{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}}</strong> results{{/hasManyResults}}`,
    },
  }),

  instantsearch.widgets.stats({
    container: '#stats-bottom',
    templates: {
      text: `
            <button class="button button-primary" data-action="close-filtering">
              {{#hasNoResults}}No results{{/hasNoResults}}
              {{#hasOneResult}}1 result{{/hasOneResult}}
              {{#hasManyResults}}See {{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}}&nbsp;results{{/hasManyResults}}
            </button>`,
    },
  }),

  instantsearch.widgets.hitsPerPage({
    container: '#hitsPerPage',
    items: [
      { label: '8 hits per page', value: 8, default: true },
      { label: '16 hits per page', value: 16 },
      { label: '32 hits per page', value: 32 },
      { label: '64 hits per page', value: 64 },
    ],
  }),

  instantsearch.widgets.pagination({
    container: '#pagination',
    totalPages: 5,
    showFirst: false,
    showLast: false,
    templates: {
      previous: '←',
      next: '→',
    },
  }),

  instantsearch.widgets.searchBox({
    container: '#search-input',

    loadingIndicator: false,
    magnifier: true,
    queryHook(query, search) {
      if (query) document.querySelector('.demo').classList.add('searching')
      else document.querySelector('.demo').classList.remove('searching')
      search(query)
    },
  }),

  instantsearch.widgets.configure({
    getRankingInfo: true,
    attributesToSnippet: ['undefined:10'],
    snippetEllipsisText: '...',
    enablePersonalization: true,
  }),

  instantsearch.widgets.queryRuleCustomData({
    container: '#queryRuleCustomData',
    transformItems(items) {
      let banner = ''
      if (items.length > 0) {
        if (items.find((el) => el['image']) !== undefined) {
          banner = items.find((el) => el['image']).image
        }
      }
      return { banner: banner }
    },
    templates: {
      default: `
        {{#items}}
          {{#banner}}
            <section>
              <h2>{{title}}</h2>
              <a href="{{link}}">
                <img src="{{banner}}" alt="{{title}}">
              </a>
            </section>
          {{/banner}}
        {{/items}}
      `,
    },
  }),

  instantsearch.widgets.hits({
    container: '#search-results',
    transformItems(items) {
      return items.map((item) => ({
        ...item,
        price: item.prices.find((o) => o.currency === 'USD'),
        isPromoted: item._rankingInfo && item._rankingInfo.promoted,
      }))
    },
    templates: {
      item: `<article class="hit">
              <a href="https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/interflora/product.html?productcode={{objectID}}">
              <figure class="hit-image-container">
                <div class="hit-image-container-box">
                  <img class="hit-image" src="{{{images}}}">
                  {{#isPromoted}}
                    <div class="hit-promoted-container">
                      <span class="hit-promoted">
                        <i class="materialIcons">star</i> promoted
                      </span>
                    </div>
                  {{/isPromoted}}
                </div>
              </figure>
              <main class="hit-info-container">
                <p class="hit-category">&#8203;</p>
                
                <h1>
                  <span class="ais-Highlight">
                    {{{_highlightResult.name.en.value}}}
                  </span>
                </h1>
                
                <div class="hit-description"><b class="hit-currency">$</b> {{{price.amount}}}</div>
                
              </main>
              </a>
            </article>`,
      empty: `
    <section class="ais-Hits-list ais-Hits-list-no-result">
      <div class="max-w-xs mx-auto text-center"><svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" width="138" height="138" class="block mx-auto">
          <defs>
            <linearGradient id="c" x1="50%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stop-color="#F5F5FA"></stop>
              <stop offset="100%" stop-color="#FFF"></stop>
            </linearGradient>
            <path id="b" d="M68.71 114.25a45.54 45.54 0 1 1 0-91.08 45.54 45.54 0 0 1 0 91.08z"></path>
            <filter id="a" width="140.6%" height="140.6%" x="-20.3%" y="-15.9%" filterUnits="objectBoundingBox">
              <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5.5"></feGaussianBlur>
              <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1"
                values="0 0 0 0 0.145098039 0 0 0 0 0.17254902 0 0 0 0 0.380392157 0 0 0 0.15 0"></feColorMatrix>
              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
              <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="1.5"></feGaussianBlur>
              <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2"
                values="0 0 0 0 0.364705882 0 0 0 0 0.392156863 0 0 0 0 0.580392157 0 0 0 0.2 0"></feColorMatrix>
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle cx="68.85" cy="68.85" r="68.85" fill="#5468FF" opacity=".07"></circle>
            <circle cx="68.85" cy="68.85" r="52.95" fill="#5468FF" opacity=".08"></circle>
            <use fill="#000" filter="url(#a)" xlink:href="#b"></use>
            <use fill="url(#c)" xlink:href="#b"></use>
            <path
              d="M76.01 75.44c5-5 5.03-13.06.07-18.01a12.73 12.73 0 0 0-18 .07c-5 4.99-5.03 13.05-.07 18a12.73 12.73 0 0 0 18-.06zm2.5 2.5a16.28 16.28 0 0 1-23.02.09A16.29 16.29 0 0 1 55.57 55a16.28 16.28 0 0 1 23.03-.1 16.28 16.28 0 0 1-.08 23.04zm1.08-1.08l-2.15 2.16 8.6 8.6 2.16-2.15-8.6-8.6z"
              fill="#5369FF"></path>
          </g>
        </svg>
        <h3 class="my-6 text-2xl font-bold font-brand leading-none">Sorry, we can't find any matches to your query!</h3>
        <p class="text-grey-600">Please try another query.</p>
      </div>
    </section>
    `,
    },
  }),

  instantsearch.widgets.index({ indexName: 'content_test' }).addWidgets([
    customBanner({
      container: '#hits-content_test',
      transformItems(items) {
        return items.slice(0, 1).map((item) => ({
          ...item,
          isPromoted: item._rankingInfo && item._rankingInfo.promoted,
        }))
      },
    }),
  ]),

  instantsearch.widgets.index({ indexName: 'article_test' }).addWidgets([
    instantsearch.widgets.hits({
      container: '#hits-articles_test',
      transformItems(items) {
        return items.map((item) => ({
          ...item,
          isPromoted: item._rankingInfo && item._rankingInfo.promoted,
        }))
      },
      templates: {
        item: `<article class="hit">
                <a href="https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/interflora/templates/acc-template-preview-interflora.html?menukey=interflora/web/navigation&cid={{id}}">
                  <figure class="hit-image-container article">
                    <div class="hit-image-container-box">
                      <img class="hit-image" src="{{{image}}}">
                      {{#isPromoted}}
                        <div class="hit-promoted-container">
                          <span class="hit-promoted">
                            <i class="materialIcons">star</i> promoted
                          </span>
                        </div>
                      {{/isPromoted}}
                    </div>
                  </figure>
                  <main class="hit-info-container">
                    <p class="hit-category">&#8203;</p>
                    <h1>
                      <span class="ais-Highlight">
                        {{{_highlightResult.name.en.value}}}
                      </span>
                    </h1>
                    <div class="hit-description">{{segment.title}}</div>
                    <div></div>
                  </main>
                </a>
              </article>`,
        empty: `
      <section class="ais-Hits-list ais-Hits-list-no-result">
        <div class="max-w-xs mx-auto text-center"><svg xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="138" height="138" class="block mx-auto">
            <defs>
              <linearGradient id="c" x1="50%" x2="50%" y1="100%" y2="0%">
                <stop offset="0%" stop-color="#F5F5FA"></stop>
                <stop offset="100%" stop-color="#FFF"></stop>
              </linearGradient>
              <path id="b" d="M68.71 114.25a45.54 45.54 0 1 1 0-91.08 45.54 45.54 0 0 1 0 91.08z"></path>
              <filter id="a" width="140.6%" height="140.6%" x="-20.3%" y="-15.9%" filterUnits="objectBoundingBox">
                <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5.5"></feGaussianBlur>
                <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1"
                  values="0 0 0 0 0.145098039 0 0 0 0 0.17254902 0 0 0 0 0.380392157 0 0 0 0.15 0"></feColorMatrix>
                <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
                <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="1.5"></feGaussianBlur>
                <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2"
                  values="0 0 0 0 0.364705882 0 0 0 0 0.392156863 0 0 0 0 0.580392157 0 0 0 0.2 0"></feColorMatrix>
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                  <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle cx="68.85" cy="68.85" r="68.85" fill="#5468FF" opacity=".07"></circle>
              <circle cx="68.85" cy="68.85" r="52.95" fill="#5468FF" opacity=".08"></circle>
              <use fill="#000" filter="url(#a)" xlink:href="#b"></use>
              <use fill="url(#c)" xlink:href="#b"></use>
              <path
                d="M76.01 75.44c5-5 5.03-13.06.07-18.01a12.73 12.73 0 0 0-18 .07c-5 4.99-5.03 13.05-.07 18a12.73 12.73 0 0 0 18-.06zm2.5 2.5a16.28 16.28 0 0 1-23.02.09A16.29 16.29 0 0 1 55.57 55a16.28 16.28 0 0 1 23.03-.1 16.28 16.28 0 0 1-.08 23.04zm1.08-1.08l-2.15 2.16 8.6 8.6 2.16-2.15-8.6-8.6z"
                fill="#5369FF"></path>
            </g>
          </svg>
          <h3 class="my-6 text-2xl font-bold font-brand leading-none">Sorry, we can't find any matches to your query!</h3>
          <p class="text-grey-600">Please try another query.</p>
        </div>
      </section>
      `,
      },
    }),
  ]),

  instantsearch.widgets.panel({
    templates: {
      header: 'Colour',
      collapseButtonText: `{{#collapsed}}<i class="materialIcons ais-Panel-collapseButton">add</i>{{/collapsed}}
                  {{^collapsed}}<i class="materialIcons ais-Panel-collapseButton">remove</i>{{/collapsed}}`,
    },
    collapsed: () => false,
  })(instantsearch.widgets.refinementList)({
    container: '#main_category_c1ba1cfc-e6f9-d919-0850-21f77ee2e9a3',
    attribute: 'color',
    limit: 5,
    showMoreLimit: 10,
    // note that searchable doesn't work for the menu widget
    searchable: true,
    searchablePlaceholder: 'Search here...',
    showMore: true,
    cssClasses: {
      count: 'not-hidden',
    },
  }),

  instantsearch.widgets.panel({
    templates: {
      header: 'Colour',
      collapseButtonText: `{{#collapsed}}<i class="materialIcons ais-Panel-collapseButton">add</i>{{/collapsed}}
                  {{^collapsed}}<i class="materialIcons ais-Panel-collapseButton">remove</i>{{/collapsed}}`,
    },
    collapsed: () => false,
  })(instantsearch.widgets.refinementList)({
    container: '#main_category_c1ba1cfc-e6f9-d919-0850-21f77ee2e9a3',
    attribute: 'style',
    limit: 5,
    showMoreLimit: 10,
    // note that searchable doesn't work for the menu widget
    searchable: true,
    searchablePlaceholder: 'Search here...',
    showMore: true,
    cssClasses: {
      count: 'not-hidden',
    },
  }),

  instantsearch.widgets.panel({
    templates: {
      header: 'Gender',
      collapseButtonText: `{{#collapsed}}<i class="materialIcons ais-Panel-collapseButton">add</i>{{/collapsed}}
                  {{^collapsed}}<i class="materialIcons ais-Panel-collapseButton">remove</i>{{/collapsed}}`,
    },
    collapsed: () => false,
  })(instantsearch.widgets.refinementList)({
    container: '#main_category_gender',
    attribute: 'gender',
    limit: 5,
    showMoreLimit: 10,
    // note that searchable doesn't work for the menu widget
    searchable: false,
    searchablePlaceholder: 'Search here...',
    showMore: true,
    cssClasses: {
      count: 'not-hidden',
    },
  }),

  customPageStats({
    container: document.querySelector('#stats-top'),
  }),
])

search.start()
