import { useCallback } from 'react';
import ReactFlow, { Connection, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { initialEdges, initialNodes } from '../../data/initialData';
import { CustomNode } from '../CustomNode/CustomNode';
import { getMinimapNodeColor } from '../../utils/flow';

const nodeTypes = { custom: CustomNode };

export const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      style={{ backgroundColor: '#F8F9F9' }}
    >
      <Controls />
      <MiniMap
        pannable
        zoomable
        zoomStep={2}
        nodeColor={getMinimapNodeColor}
        style={{ backgroundColor: '#E5E8E8' }}
      />
    </ReactFlow>
  );
};
