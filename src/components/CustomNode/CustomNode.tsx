import { useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow'
import { Collapse, IconButton, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { NodeData } from '../../types/Node';
import { getNodeStatusColor } from '../../utils/flow';
import { NODE_WIDTH } from '../../utils/constants';

export const CustomNode = ({ data }: NodeProps<NodeData>) => {
  const color = getNodeStatusColor(data.status);
  const { parameters } = data;

  const [expanded, setExpanded] = useState(false);
  const onExpandClick = () => setExpanded(!expanded);

  return (
    <StyledNode $color={color}>
      <Handle type="target" position={Position.Left} />
      <div>
        <div>{data.label}</div>
        <StyledButtonsContainer>
          <IconButton size="small" disabled={!parameters} onClick={onExpandClick}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </StyledButtonsContainer>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {parameters &&
            Object.entries(parameters).map(([key, value]) => (
              <div key={key}>
                {key}:{value}
              </div>
            ))}
        </Collapse>
      </div>
      <Handle type="source" position={Position.Right} />
    </StyledNode>
  );
};

const StyledNode = styled('div')<{ $color: string }>`
  background-color: white;
  padding: 0.5em;
  width: ${NODE_WIDTH}px;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 4px;
`;

const StyledButtonsContainer = styled('div')`
  text-align: end;
`;
