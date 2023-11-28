export const initialNodes = [
  {
    id: '1',
    data: {
      label: 'node 1',
    },
    position: { x: 250, y: 100 },
  },
  {
    id: '2',
    data: {
      label: 'node 2',
    },
    position: { x: 100, y: 200 },
  },
  {
    id: '3',
    data: {
      label: 'node 3',
    },
    position: { x: 400, y: 200 },
  },
];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];
