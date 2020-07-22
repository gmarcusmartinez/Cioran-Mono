import { IProject, IUser } from 'interfaces';

export interface IState {
  auth: {
    loading: boolean;
    currentUser: IUser;
  };
  projects: {
    loading: boolean;
    project: IProject | null;
    projects: IProject[];
  };
  modal: {
    displayModal: boolean;
    component: string;
  };
}
