import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CodeEditor } from '../components/CodeEditor';
import { AnalysisPanel } from '../features/codeAnalysis';
import { ExecutionPanel } from '../features/codeExecution';
import { NetworkVis } from '../features/neuralVis';
import { PerformanceMonitor } from '../features/performance';
import { LearningProgress } from '../features/learning';
import { SuggestionsPanel } from '../features/codeSuggestions';
import { useCodeAnalysis } from '../features/codeAnalysis';
import { useCodeExecution } from '../features/codeExecution';
import { useCodeSuggestions } from '../features/codeSuggestions';
import { usePerformanceMonitor } from '../features/performance/hooks/usePerformanceMonitor';
import { useLearningMetrics } from '../features/learning';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';
import { Tabs } from '../components/Tabs';
import { NetworkData } from '../features/neuralVis/types';

const DEFAULT_CODE = `// Welcome to the Neural Code Editor
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Try running this code!
console.log(fibonacci(10));`;

// Sample network data with proper types and values
const networkData: NetworkData = {
  nodes: [
    { id: 'input1', label: 'Input 1', type: 'input', activation: 0.5, bias: 0.1, x: 0, y: 0 },
    { id: 'input2', label: 'Input 2', type: 'input', activation: 0.7, bias: 0.2, x: 0, y: 0 },
    { id: 'hidden1', label: 'Hidden 1', type: 'hidden', activation: 0.6, bias: 0.1, x: 0, y: 0 },
    { id: 'hidden2', label: 'Hidden 2', type: 'hidden', activation: 0.4, bias: 0.2, x: 0, y: 0 },
    { id: 'output1', label: 'Output', type: 'output', activation: 0.8, bias: 0.1, x: 0, y: 0 }
  ],
  links: [
    { source: 'input1', target: 'hidden1', weight: 0.5 },
    { source: 'input1', target: 'hidden2', weight: 0.3 },
    { source: 'input2', target: 'hidden1', weight: 0.6 },
    { source: 'input2', target: 'hidden2', weight: 0.4 },
    { source: 'hidden1', target: 'output1', weight: 0.7 },
    { source: 'hidden2', target: 'output1', weight: 0.5 }
  ]
};

export function Workspace() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [activeTab, setActiveTab] = useState('editor');
  const { analysis, isAnalyzing, analyzeCode } = useCodeAnalysis();
  const { result, isExecuting, executeCode } = useCodeExecution();
  const { suggestions, isLoading, requestSuggestions } = useCodeSuggestions();
  const performanceData = usePerformanceMonitor();
  const learningMetrics = useLearningMetrics();

  const handleCodeChange = useCallback((value: string | undefined) => {
    if (value) {
      setCode(value);
      analyzeCode(value);
      requestSuggestions({
        code: value,
        cursorPosition: value.length,
        language: 'javascript'
      });
    }
  }, [analyzeCode, requestSuggestions]);

  const handleExecute = useCallback(() => {
    executeCode(code);
  }, [code, executeCode]);

  useKeyboardShortcut('s', handleExecute);

  const tabs = [
    { id: 'editor', label: 'Editor' },
    { id: 'metrics', label: 'Metrics' }
  ];

  return (
    <div className="space-y-6 p-4">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === 'editor' ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="space-y-6">
            <CodeEditor
              value={code}
              onChange={handleCodeChange}
              language="javascript"
            />
            <ExecutionPanel
              result={result}
              isExecuting={isExecuting}
              onExecute={handleExecute}
            />
            <SuggestionsPanel
              suggestions={suggestions}
              isLoading={isLoading}
              onApplySuggestion={(suggestion) => setCode(suggestion.content)}
            />
          </div>
          
          <div className="space-y-6">
            <AnalysisPanel
              analysis={analysis}
              isAnalyzing={isAnalyzing}
            />
            <NetworkVis data={networkData} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <LearningProgress metrics={learningMetrics} />
          <PerformanceMonitor data={performanceData} />
        </motion.div>
      )}
    </div>
  );
}