import { useEffect, useState } from 'react';

interface UseScriptProps {
  code?: null | string;
  src?: null | string;
  [scriptProps: string]: any;
}

interface UseScriptState {
  error: boolean;
  loaded: boolean;
}

let cachedScripts: string[] = [];

export const useScript = ({
  code = null,
  src,
  ...scriptProps
}: UseScriptProps) => {
  const [state, setState] = useState<UseScriptState>({
    error: false,
    loaded: false,
  });

  useEffect(
    () => {
      const scriptValue = code || src || '';

      if (cachedScripts.includes(scriptValue)) {
        setState({
          loaded: true,
          error: false,
        });
      } else if (scriptValue) {
        cachedScripts.push(scriptValue);

        let script: HTMLScriptElement = document.createElement('script');

        if (src) {
          script.src = src;
        }

        if (code) {
          script.type = 'text/javascript';
          script.text = code;
        }

        if (Object.keys(scriptProps).length > 0) {
          for (let key in scriptProps) {
            (script as any)[key] = scriptProps[key];
          }
        }

        const onScriptLoad = () => {
          setState({
            loaded: true,
            error: false,
          });
        };

        const onScriptError = () => {
          if (src) {
            const index = cachedScripts.indexOf(src);
            if (index >= 0) cachedScripts.splice(index, 1);
          }
          script.remove();

          setState({
            loaded: true,
            error: true,
          });
        };

        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        document.body.appendChild(script);

        return () => {
          script.removeEventListener('load', onScriptLoad);
          script.removeEventListener('error', onScriptError);
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [code, src]
  );

  return state;
};
