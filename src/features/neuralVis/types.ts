import { SimulationNodeDatum, SimulationLinkDatum } from 'd3';

export interface NeuralNode extends SimulationNodeDatum {
  id: string;
  label: string;
  type: 'input' | 'hidden' | 'output';
  activation: number;
  bias: number;
}

export interface NeuralLink extends SimulationLinkDatum<NeuralNode> {
  weight: number;
  source: string;
  target: string;
}

export interface NetworkData {
  nodes: NeuralNode[];
  links: NeuralLink[];
}

export interface NetworkStats {
  totalNodes: number;
  totalConnections: number;
  averageActivation: number;
  averageWeight: number;
}