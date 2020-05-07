interface UsersRoutes {
  all: string;
  index: string;
  create: string;
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
  users: UsersRoutes;
  notebooks: NotebooksRoutes;
  tasks: TasksRoutes;
  boards: BoardsRoutes;
  virtual_docs: VirtualPapersRoutes;
}

export interface RoutesState {
  api: ApiRoutes;
}
export enum RoutesTypes {
  // ACTIONS
  ROUTES_LOADED = "ROUTES_LOADED",
  ROUTES_LOAD_ERROR = "ROUTES_LOAD_ERROR",

  // SAGAS
  LOADING_ROUTES = "LOADING_ROUTES",
}
