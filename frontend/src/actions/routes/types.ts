interface UsersRoutes {
    all: string,
    index: string,
    create: string
}

export interface IBooksRoutes {
    index: string,
    create: string,
    allByUser: string,
    allVirtualDocs: string,
}

interface VirtualDocsRoutes {
    index: string,
    create: string
}

interface BoardsRoutes {
    index: string,
    create: string,
    allByUser: string,
}

interface TasksRoutes {
    create: string,
    allByBoard: string
}

interface ApiRoutes {
    users: UsersRoutes,
    books: IBooksRoutes,
    tasks: TasksRoutes
    boards: BoardsRoutes,
    virtual_docs: VirtualDocsRoutes,
  };


export interface RoutesState {
    api: ApiRoutes
}
export enum RoutesTypes {
    // ACTIONS
    ROUTES_LOADED = "ROUTES_LOADED",
    ROUTES_LOAD_ERROR = "ROUTES_LOAD_ERROR",

    // SAGAS
    LOADING_ROUTES = "LOADING_ROUTES"
}