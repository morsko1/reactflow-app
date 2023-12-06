import { useCallback } from 'react';
import ReactFlow, { Connection, Controls, MiniMap, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomNode } from '../CustomNode/CustomNode';
import { getMinimapNodeColor } from '../../utils/flow';
import { useFlowContext } from '../../context/flow';

const nodeTypes = { custom: CustomNode };

export const Flow = () => {
  const { nodes, edges, setEdges, onNodesChange, onEdgesChange } = useFlowContext();

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
    </div>
  );
};
