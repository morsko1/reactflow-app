import { Handle, NodeProps, Position } from 'reactflow'
import './CustomNode.css';
import { NodeData } from '../../types/NodeData';

export const CustomNode = ({ data }: NodeProps<NodeData>) => {
  return (
    <div className="custom_node">
      <Handle type="target" position={Position.Left} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};
