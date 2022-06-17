import { registerPlugin } from '@capacitor/core';

import type { SensoresPlugin } from './definitions';

const Sensores = registerPlugin<SensoresPlugin>('Sensores', {
  web: () => import('./web').then(m => new m.SensoresWeb()),
});

export * from './definitions';
export { Sensores };
