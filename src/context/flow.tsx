import React from 'react';
import { Edge, Node, OnEdgesChange, OnNodesChange, useEdgesState, useNodesState } from 'reactflow';
import { NodeData } from '../types/Node';
import { getLayoutedElements } from '../utils/autoLayout';
import { initialEdges, initialNodes } from '../data/initialData';

interface IFlowContext {
  nodes: Node<NodeData>[];
  edges: Edge[];
  setNodes: React.Dispatch<React.SetStateAction<Node<NodeData>[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
}

const FlowContext = React.createContext<IFlowContext | null>(null);

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);

export const FlowProvider = ({ children }: React.PropsWithChildren) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  return (
    <FlowContext.Provider
      value={{ nodes, setNodes, edges, setEdges, onNodesChange, onEdgesChange }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export const useFlowContext = () => {
  const context = React.useContext(FlowContext);
  if (!context) {
    throw new Error('`useFlowContext` must be used within `FlowProvider`');
  }

  return context;
};
