import { WebPlugin } from '@capacitor/core';

import type { SensoresPlugin } from './definitions';

export class SensoresWeb extends WebPlugin implements SensoresPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
