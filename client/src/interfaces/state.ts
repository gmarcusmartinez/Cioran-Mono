import { IProject, IUser, IAlert, ITicket, ISprint } from 'interfaces';

export interface IState {
  alerts: IAlert[] | [];
  auth: {
    loading: boolean;
    currentUser: IUser;
  };
  modal: {
    displayModal: boolean;
    component: string;
  };
  projects: {
    loading: boolean;
    project: IProject;
    projects: IProject[];
  };
  sprints: {
    loading: boolean;
    ticketPage: number;
    sprint: ISprint;
  };
  tickets: {
    loading: boolean;
    ticket: ITicket;
  };
}
