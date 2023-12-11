import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from 'reactflow';
import { IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFlowContext } from '../../context/flow';

export const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, selected }: EdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const { setEdges, hoveredEdge } = useFlowContext();

  const onClick = () => {
    setEdges((eds) => eds.filter((e) => e.id !== id));
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      {(selected || hoveredEdge === id) && (
        <EdgeLabelRenderer>
          <div
            className="nodrag nopan"
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
            }}
          >
            <StyledIconButton size="small" onClick={onClick}>
              <CloseIcon fontSize="inherit" />
            </StyledIconButton>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

const StyledIconButton = styled(IconButton)`
  background-color: #F8F9F9;
  &:hover {
    background-color: #F8F9F9;
  }
`;
