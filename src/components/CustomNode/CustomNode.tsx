import { Handle, NodeProps, Position } from 'reactflow'
import { styled } from '@mui/material';
import { NodeData } from '../../types/Node';
import { getNodeStatusColor } from '../../utils/flow';

export const CustomNode = ({ data }: NodeProps<NodeData>) => {
  const color = getNodeStatusColor(data.status);

  return (
    <StyledNode $color={color}>
      <Handle type="target" position={Position.Left} />
      <div>
        <div>{data.label}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </StyledNode>
  );
};

const StyledNode = styled('div')<{ $color: string }>`
  background-color: white;
  padding: 0.5em;
  width: 150px;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 4px;
`;
