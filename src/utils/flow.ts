import { Edge, Node, getOutgoers } from 'reactflow';
import { NodeData, NodeStatus } from '../types/Node';
import { NODE_STATUS_COLOR } from './constants';

export const getNodeStatusColor = (status: NodeStatus): string => {
  return NODE_STATUS_COLOR[status];
};

export const getMinimapNodeColor = (node: Node<NodeData>): string => {
  return NODE_STATUS_COLOR[node.data.status];
};

const getOutgoersRecursively = (
  node: Node,
  nodes: Node[],
  edges: Edge[],
): Node[] => {
  const outgoers = getOutgoers(node, nodes, edges);
  const newOutgoers = outgoers.flatMap((val) =>
    getOutgoersRecursively({ id: val.id } as Node, nodes, edges)
  );
  return [...outgoers, ...newOutgoers];
};

export const getUpdatedNodesAfterSwitch = (
  nodeId: string,
  nodes: Node[],
  edges: Edge[],
  checked: boolean,
) => {
  const outgoers = getOutgoersRecursively({ id: nodeId } as Node, nodes, edges);
  return nodes.map((node) => {
    const isNodeOrOutgoer =
      node.id === nodeId || outgoers.find((outgoer) => outgoer.id === node.id);

    if (isNodeOrOutgoer) {
      return {
        ...node,
        data: {
          ...node.data,
          disabled: !checked,
        },
      };
    }

    return node;
  });
};
