import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = 'javascript',
  className = ''
}: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      className={`rounded-lg text-sm ${className}`}
    >
      {code}
    </SyntaxHighlighter>
  );
}