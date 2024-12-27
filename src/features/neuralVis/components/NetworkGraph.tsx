import React, { useRef, useEffect } from 'react';
import { NetworkData } from '../types';
import { useNetworkSimulation } from '../hooks/useNetworkSimulation';
import { NetworkLinks } from './NetworkLinks';
import { NetworkNodes } from './NetworkNodes';
import { NetworkGlowFilter } from './NetworkGlowFilter';

interface NetworkGraphProps {
  data: NetworkData;
  showWeights: boolean;
  showActivations: boolean;
  selectedNode: string | null;
  onNodeSelect: (nodeId: string | null) => void;
}

export function NetworkGraph({
  data,
  showWeights,
  showActivations,
  selectedNode,
  onNodeSelect
}: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const width = 600;
  const height = 400;

  const simulation = useNetworkSimulation(data, width, height);

  useEffect(() => {
    if (!simulation) return;

    simulation.on('tick', () => {
      // Force re-render on simulation tick
      svgRef.current?.forceUpdate?.();
    });
  }, [simulation]);

  return (
    <svg
      ref={svgRef}
      viewBox={[0, 0, width, height].join(' ')}
      className="w-full h-full bg-matrix-dark"
      onClick={() => onNodeSelect(null)}
    >
      <NetworkGlowFilter />
      <NetworkLinks links={data.links} showWeights={showWeights} />
      <NetworkNodes
        nodes={data.nodes}
        selectedNode={selectedNode}
        showActivations={showActivations}
        onNodeSelect={onNodeSelect}
      />
    </svg>
  );
}