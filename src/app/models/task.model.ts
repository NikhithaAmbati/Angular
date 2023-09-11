export interface Task {
    id: number;
    name: string;
    status: string;
    startDate: string;
    endDate: string;
    editing?: boolean; 
    editingStatus?: string; 
  }
  