import { useEffect } from 'react';
import { loader } from '@monaco-editor/react';
import { matrixTheme } from '../themes/matrix';

export function useMonacoTheme() {
  useEffect(() => {
    loader.init().then(monaco => {
      monaco.editor.defineTheme('matrix', matrixTheme);
      monaco.editor.setTheme('matrix');
    });
  }, []);
}