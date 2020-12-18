import { registerPlugin } from '@scullyio/scully';
import { renderToString } from '@ionic/core/hydrate';

export const HydrateIonicComponents = 'hydrateIonicComponents';

export const hydrateIonicComponentsPlugin = async (html: string): Promise<string> => {

  const hydrateResult = await renderToString(html, {
    clientHydrateAnnotations: false,
    excludeComponents: [
      // overlays
      'ion-action-sheet',
      'ion-alert',
      'ion-loading',
      'ion-modal',
      'ion-picker',
      'ion-popover',
      'ion-toast',
      'ion-toast',

      // navigation
      'ion-router',
      'ion-route',
      'ion-route-redirect',
      'ion-router-link',
      'ion-router-outlet',

      // tabs
      'ion-tabs',
      'ion-tab',

      // auxiliar
      'ion-picker-column',
      'ion-virtual-scroll'
    ]
  })
  .then(hydrateResults => {
    console.log(hydrateResults.html);
    hydrateResults.diagnostics.forEach(d => {
      if (d.type === 'error') {
        console.error(d.messageText);
      } else if (d.type === 'debug') {
        console.debug(d.messageText);
      } else {
        console.log(d.messageText);
      }
    });

    return hydrateResults;

    /*if (doc.head != null) {
      const styleElms = doc.head.querySelectorAll('style[data-styles]') as NodeListOf<HTMLStyleElement>;
      for (let i = 0; i < styleElms.length; i++) {
        styleElms[i].setAttribute('ng-transition', appId);
      }
    }

    if (doc.body != null) {
      const ionPages = doc.body.querySelectorAll('.ion-page.ion-page-invisible') as NodeListOf<HTMLElement>;
      for (let i = 0; i < ionPages.length; i++) {
        ionPages[i].classList.remove('ion-page-invisible');
      }
    }*/
  });

  return Promise.resolve(hydrateResult.html);
};

// no validation implemented
const hydrateIonicComponentsPluginValidator = async () => [];

// @ts-ignore
registerPlugin('render', HydrateIonicComponents, hydrateIonicComponentsPlugin);
