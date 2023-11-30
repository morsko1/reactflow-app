import { useCallback } from 'react';
import ReactFlow, { Connection, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { initialEdges, initialNodes } from '../../data/initialData';
import { CustomNode } from '../CustomNode/CustomNode';

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
      style={{ backgroundColor: '#F6F6F6' }}
    >
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};
