import React from 'react';
import Editor from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';

export function CodePlayground() {
  const handleEditorDidMount = (editor) => {
    // Set up Yjs collaboration
    const doc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:1234', 'monaco', doc);
    const type = doc.getText('monaco');
    
    // Bind Monaco editor with Yjs
    new MonacoBinding(type, editor.getModel(), new Set([editor]), provider.awareness);
  };

  return (
    <div className="rounded-lg border border-[#00ff41]">
      <Editor
        height="400px"
        defaultLanguage="javascript"
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}