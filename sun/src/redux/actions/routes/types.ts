export enum RoutesTypes {
  // ACTIONS
  ROUTES_LOADED = "ROUTES_LOADED",
  ROUTES_LOAD_ERROR = "ROUTES_LOAD_ERROR",

  // SAGAS
  LOADING_ROUTES = "LOADING_ROUTES",
}

export interface NotebooksRoutes {
  index: string;
  create: string;
  allByUser: string;
  allVirtualPapers: string;
}

interface VirtualPapersRoutes {
  index: string;
  create: string;
}

interface BoardsRoutes {
  index: string;
  create: string;
  allByUser: string;
}

interface TasksRoutes {
  create: string;
  allByBoard: string;
}

interface ApiRoutes {
  root: string;
  notebooks: NotebooksRoutes;
  tasks: TasksRoutes;
  boards: BoardsRoutes;
  virtualPapers: VirtualPapersRoutes;
}

interface AuthRoutes {
  root: string;
  login: string;
  register: string;
  user: string;
}

export interface RoutesActionPayload {
  api?: ApiRoutes;
  auth?: AuthRoutes;
}

export interface RoutesState {
  uranus: ApiRoutes;
  auth: AuthRoutes;
}
