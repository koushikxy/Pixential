export type MilestoneStatus = 'PENDING' | 'IN_PROGRESS' | 'DONE';

export interface Milestone {
  id: string;
  title: string;
  description: string | null;
  status: MilestoneStatus;
  dueDate: string | null;
  position: number;
}

export interface ClientFile {
  id: string;
  name: string;
  size: number;
  mimeType: string;
  uploadedBy: 'ADMIN' | 'CLIENT';
  createdAt: string;
}

export interface Location {
  id?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface Client {
  id: string;
  name: string;
  phone: string | null;
  website: string | null;
  createdAt: string;
  user: { id?: string; email: string; name?: string | null } | null;
  locations: Location[];
  milestones: Milestone[];
  files?: ClientFile[];
  _count?: { files: number };
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  budget: string | null;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'WON' | 'LOST';
  createdAt: string;
}
