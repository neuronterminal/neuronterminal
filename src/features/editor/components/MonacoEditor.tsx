import React from 'react';
import Editor from '@monaco-editor/react';
import { useMonacoTheme } from '../hooks/useMonacoTheme';
import { defaultEditorOptions } from '../config/editorOptions';
import type { Language } from '../types';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  language: Language;
  readOnly?: boolean;
}

export function MonacoEditor({
  value,
  onChange,
  language,
  readOnly = false
}: MonacoEditorProps) {
  useMonacoTheme();

  return (
    <Editor
      height="400px"
      language={language}
      value={value}
      onChange={onChange}
      theme="matrix"
      options={{
        ...defaultEditorOptions,
        readOnly
      }}
      loading={
        <div className="h-full w-full flex items-center justify-center text-matrix-green">
          Loading editor...
        </div>
      }
    />
  );
}