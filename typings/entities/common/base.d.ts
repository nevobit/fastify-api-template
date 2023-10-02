import { StatusType } from './constants';
export interface Base {
    id: string;
    status: StatusType;
    createdAt: Date;
    updatedAt: Date;
}
