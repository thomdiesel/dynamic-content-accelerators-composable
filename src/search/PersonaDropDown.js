/**
 * @requires module:instantsearch
 */

const PersonaDropDown = instantsearch.connectors.connectConfigure(
  ({ widgetParams, refine }, isFirstRender) => {
    if (isFirstRender) {
      refine({ ruleContexts: 'empty' });
      const container = document.querySelector(widgetParams.container);

      const select = document.createElement('select');
      const baseOption = document.createElement('option');
      baseOption.textContent = 'Choose a persona';
      baseOption.value = '';
      select.appendChild(baseOption);

      for (const persona of widgetParams.personas) {
        const option = document.createElement('option');
        option.value = persona.context;
        option.textContent = persona.label;
        select.appendChild(option);
      }

      select.addEventListener('change', (e) => {
        refine({ ruleContexts: '' });
        if (e.currentTarget.value) {
          refine({
            ruleContexts: e.currentTarget.value,
          });
        } else {
          refine({ ruleContexts: 'empty' });
        }
      });

      container.appendChild(select);
    }
  }
);
