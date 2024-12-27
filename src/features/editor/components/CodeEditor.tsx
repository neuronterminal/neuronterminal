import React from 'react';
import { AnimatedContainer } from '../../../components/AnimatedContainer';
import { MonacoEditor } from './MonacoEditor';
import { EditorToolbar } from './EditorToolbar';
import type { Language } from '../types';

interface CodeEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  language?: Language;
  readOnly?: boolean;
}

export function CodeEditor({
  value,
  onChange,
  language = 'javascript',
  readOnly = false
}: CodeEditorProps) {
  return (
    <AnimatedContainer className="rounded-lg border border-matrix-green overflow-hidden">
      <EditorToolbar language={language} readOnly={readOnly} />
      <MonacoEditor
        value={value}
        onChange={onChange}
        language={language}
        readOnly={readOnly}
      />
    </AnimatedContainer>
  );
}