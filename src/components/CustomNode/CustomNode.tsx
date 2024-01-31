import { useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { Collapse, IconButton, Switch, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { NodeData } from '../../types/Node';
import { getNodeStatusColor, getUpdatedNodesAfterSwitch } from '../../utils/flow';
import { NODE_WIDTH } from '../../utils/constants';
import { useFlowContext } from '../../context/flow';

export const CustomNode = ({ id, data }: NodeProps<NodeData>) => {
  const { status, parameters, disabled } = data;

  const { nodes, edges, setNodes } = useFlowContext();

  const color = getNodeStatusColor(status);

  const [expanded, setExpanded] = useState(false);
  const onExpandClick = () => setExpanded(!expanded);

  const enabled = Boolean(!disabled);
  const onEnabledChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const updatedNodes = getUpdatedNodesAfterSwitch(id, nodes, edges, checked);
    setNodes(updatedNodes);
  };

  return (
    <StyledNode $color={color}>
      <Handle type="target" position={Position.Left} />
      <div>
        <StyledRow>
          <div>{data.label}</div>
          <Switch size="small" checked={enabled} onChange={onEnabledChange} />
        </StyledRow>
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

const StyledRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
