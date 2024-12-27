export interface Intent {
  type: 'question' | 'statement' | 'command' | 'emotion';
  confidence: number;
  original: string;
}

export interface ProcessingContext {
  message: string;
  context: any;
  emotion: any;
  memories: any[];
}