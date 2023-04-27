import { Injectable } from '@angular/core';

@Injectable()
export class ScriptLoaderService {
  private scripts: any = {};

  load(...scripts: string[]): Promise<unknown[]> {
    this.scripts = scripts;
    const promises: any[] = [];
    scripts.forEach(script => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string): Promise<unknown> {
    return new Promise(resolve => {
      const script = document.createElement('script') as any;
      script.type = 'text/javascript';
      script.src = name;

      if (script.readyState) {
        script.onreadystatechange = () => {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          }
        };
      } else {
        script.onload = () => {
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
      }

      script.onerror = () => resolve({ script: name, loaded: false, status: 'Loaded' });
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
}
