import { BaseEdge, EdgeProps, getBezierPath } from 'reactflow';

export const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition  }: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <BaseEdge id={id} path={edgePath} />
  );
};
