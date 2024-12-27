export const defaultEditorOptions = {
  fontSize: 14,
  fontFamily: "'Fira Code', 'Courier New', monospace",
  lineNumbers: 'on',
  roundedSelection: true,
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
  automaticLayout: true,
  tabSize: 2,
  wordWrap: 'on',
  suggestOnTriggerCharacters: true,
  quickSuggestions: true,
  bracketPairColorization: {
    enabled: true
  }
} as const;