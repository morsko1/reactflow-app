import { useCallback } from 'react';
import ReactFlow, { Connection, Controls, Edge, MiniMap, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomNode } from '../CustomNode/CustomNode';
import { CustomEdge } from '../CustomEdge/CustomEdge';
import { getMinimapNodeColor } from '../../utils/flow';
import { useFlowContext } from '../../context/flow';

const nodeTypes = { custom: CustomNode };
const edgeTypes = { custom: CustomEdge };

export const Flow = () => {
  const { nodes, edges, setEdges, onNodesChange, onEdgesChange, setHoveredEdge } = useFlowContext();

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), []);

  const onEdgeMouseEnter = (_event: React.MouseEvent, edge: Edge) => {
    setHoveredEdge(edge.id);
  };

  const onEdgeMouseLeave = () => {
    setHoveredEdge(null);
  };

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
        edgeTypes={edgeTypes}
        style={{ backgroundColor: '#F8F9F9' }}
        onEdgeMouseEnter={onEdgeMouseEnter}
        onEdgeMouseLeave={onEdgeMouseLeave}
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
