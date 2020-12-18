import { ScullyConfig } from '@scullyio/scully';
import {HydrateIonicComponents} from './scully/plugins/hydrate-ionic-components';

const postRenderers = [HydrateIonicComponents];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'app',
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,  // for all routes
  routes: {
    '/folder/:id': {
      type: 'json',
      id: {
        url: 'http://localhost:4200/assets/folder.json',
        property: 'id',
      },
    },
  }
};
