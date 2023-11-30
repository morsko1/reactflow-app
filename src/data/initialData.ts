export const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      label: 'node 1',
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: {
      label: 'node 2',
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: 'custom',
    data: {
      label: 'node 3',
    },
    position: { x: 400, y: 250 },
  },
];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];
