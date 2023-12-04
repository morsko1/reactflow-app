import { NodeStatus } from '../types/Node';

export const NODE_STATUS_COLOR = {
  [NodeStatus.INIT]: 'grey',
  [NodeStatus.RUNNING]: 'blue',
  [NodeStatus.WARNING]: 'yellow',
  [NodeStatus.ERROR]: 'red',
  [NodeStatus.SUCCESS]: 'green',
};

export const NODE_WIDTH = 200;
export const NODE_HEIGHT = 75;
