export enum NodeStatus {
  INIT = 'init',
  RUNNING = 'running',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface NodeData {
  label: string;
  status: NodeStatus;
  parameters?: Record<string, string>;
  disabled?: boolean;
}

