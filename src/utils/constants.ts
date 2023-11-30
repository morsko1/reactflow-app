import { NodeStatus } from '../types/Node';

export const NODE_STATUS_COLOR = {
  [NodeStatus.INIT]: 'grey',
  [NodeStatus.RUNNING]: 'blue',
  [NodeStatus.WARNING]: 'yellow',
  [NodeStatus.ERROR]: 'red',
  [NodeStatus.SUCCESS]: 'green',
};
