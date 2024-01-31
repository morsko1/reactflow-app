import { Node } from 'reactflow';
import { NodeData, NodeStatus } from '../types/Node';

const position = { x: 0, y: 0 };

export const initialNodes: Node<NodeData>[] = [
  {
    id: '1',
    type: 'custom',
    data: {
      label: 'node 1',
      status: NodeStatus.SUCCESS,
      parameters: {
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
      },
    },
    position,
  },
  {
    id: '2',
    type: 'custom',
    data: {
      label: 'node 2',
      status: NodeStatus.SUCCESS,
    },
    position,
  },
  {
    id: '3',
    type: 'custom',
    data: {
      label: 'node 3',
      status: NodeStatus.INIT,
      disabled: true,
    },
    position,
  },
  {
    id: '4',
    type: 'custom',
    data: {
      label: 'node 4',
      status: NodeStatus.ERROR,
    },
    position,
  },
  {
    id: '5',
    type: 'custom',
    data: {
      label: 'node 5',
      status: NodeStatus.INIT,
    },
    position,
  },
  {
    id: '6',
    type: 'custom',
    data: {
      label: 'node 6',
      status: NodeStatus.WARNING,
    },
    position,
  },
  {
    id: '7',
    type: 'custom',
    data: {
      label: 'node 7',
      status: NodeStatus.RUNNING,
      parameters: {
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
      },
    },
    position,
  },
  {
    id: '8',
    type: 'custom',
    data: {
      label: 'node 8',
      status: NodeStatus.RUNNING,
      parameters: {
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
      },
    },
    position,
  },
  {
    id: '9',
    type: 'custom',
    data: {
      label: 'node 9',
      status: NodeStatus.INIT,
      disabled: true,
    },
    position,
  },
  {
    id: '10',
    type: 'custom',
    data: {
      label: 'node 10',
      status: NodeStatus.INIT,
      disabled: true,
    },
    position,
  },
];

export const initialEdges = [
  { id: 'e_1-2', type: 'custom', source: '1', target: '2' },
  { id: 'e_1-3', type: 'custom', source: '1', target: '3' },
  { id: 'e_1-4', type: 'custom', source: '1', target: '4' },
  { id: 'e_1-5', type: 'custom', source: '1', target: '5' },
  { id: 'e_1-6', type: 'custom', source: '1', target: '6' },
  { id: 'e_2-7', type: 'custom', source: '2', target: '7' },
  { id: 'e_2-8', type: 'custom', source: '2', target: '8' },
  { id: 'e_3-9', type: 'custom', source: '3', target: '9' },
  { id: 'e_3-10', type: 'custom', source: '3', target: '10' },
];
