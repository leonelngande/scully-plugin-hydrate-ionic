"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hydrateIonicComponentsPlugin = exports.HydrateIonicComponents = void 0;
const scully_1 = require("@scullyio/scully");
const hydrate_1 = require("@ionic/core/hydrate");
exports.HydrateIonicComponents = 'hydrateIonicComponents';
exports.hydrateIonicComponentsPlugin = async (html) => {
    const hydrateResult = await hydrate_1.renderToString(html, {
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
            }
            else if (d.type === 'debug') {
                console.debug(d.messageText);
            }
            else {
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
scully_1.registerPlugin('render', exports.HydrateIonicComponents, exports.hydrateIonicComponentsPlugin);
//# sourceMappingURL=hydrate-ionic-components.js.map