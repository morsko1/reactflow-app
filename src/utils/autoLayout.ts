import { Edge, Node } from 'reactflow';
import dagre from 'dagre';
import { NODE_HEIGHT, NODE_WIDTH } from './constants';

export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const g = new dagre.graphlib.Graph();

  g.setDefaultEdgeLabel(() => ({}));

  g.setGraph({ rankdir: 'LR', align: 'UL', ranksep: 100 });

  nodes.forEach((node: Node) =>
    g.setNode(node.id, { label: node.id, width: NODE_WIDTH, height: NODE_HEIGHT }),
  );
  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  dagre.layout(g);

  nodes.forEach((node) => {
    const { x, y } = g.node(node.id);
    node.position = { x, y };
  });

  return { nodes, edges };
};
