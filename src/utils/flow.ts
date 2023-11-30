import { Node } from 'reactflow';
import { NodeData, NodeStatus } from '../types/Node';
import { NODE_STATUS_COLOR } from './constants';

export const getNodeStatusColor = (status: NodeStatus): string => {
  return NODE_STATUS_COLOR[status];
};

export const getMinimapNodeColor = (node: Node<NodeData>): string => {
  return NODE_STATUS_COLOR[node.data.status];
};
