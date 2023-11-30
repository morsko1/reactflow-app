import { NodeStatus } from '../types/Node';

export const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      label: 'node 1',
      status: NodeStatus.SUCCESS,
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: {
      label: 'node 2',
      status: NodeStatus.SUCCESS,
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: 'custom',
    data: {
      label: 'node 3',
      status: NodeStatus.RUNNING,
    },
    position: { x: 400, y: 400 },
  },
  {
    id: '4',
    type: 'custom',
    data: {
      label: 'node 4',
      status: NodeStatus.ERROR,
    },
    position: { x: 400, y: 550 },
  },
  {
    id: '5',
    type: 'custom',
    data: {
      label: 'node 5',
      status: NodeStatus.INIT,
    },
    position: { x: 400, y: 700 },
  },
  {
    id: '6',
    type: 'custom',
    data: {
      label: 'node 6',
      status: NodeStatus.WARNING,
    },
    position: { x: 400, y: 850 },
  },
  {
    id: '7',
    type: 'custom',
    data: {
      label: 'node 7',
      status: NodeStatus.RUNNING,
    },
    position: { x: 700, y: 100 },
  },
  {
    id: '8',
    type: 'custom',
    data: {
      label: 'node 8',
      status: NodeStatus.RUNNING,
    },
    position: { x: 700, y: 250 },
  },
  {
    id: '9',
    type: 'custom',
    data: {
      label: 'node 9',
      status: NodeStatus.INIT,
    },
    position: { x: 700, y: 400 },
  },
  {
    id: '10',
    type: 'custom',
    data: {
      label: 'node 10',
      status: NodeStatus.INIT,
    },
    position: { x: 700, y: 550 },
  },
];

export const initialEdges = [
  { id: 'e_1-2', source: '1', target: '2' },
  { id: 'e_1-3', source: '1', target: '3' },
  { id: 'e_1-4', source: '1', target: '4' },
  { id: 'e_1-5', source: '1', target: '5' },
  { id: 'e_1-6', source: '1', target: '6' },
  { id: 'e_2-7', source: '2', target: '7' },
  { id: 'e_2-8', source: '2', target: '8' },
  { id: 'e_3-9', source: '3', target: '9' },
  { id: 'e_3-10', source: '3', target: '10' },
];
