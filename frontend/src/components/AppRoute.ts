const HOME = "/home";
const LOGIN = "/login";

const WorkStation = {
  TASKBOARD: `${HOME}/taskboard`,
  FLASHCARDS: `${HOME}/flashcards`,
  VIRTUAL_PAPERS: `${HOME}/docs`,
  EDIT_VIRTUAL_PAPER: `${HOME}/docs/:notebook_id?`,
};

const AppRoute = {
  HOME,
  LOGIN,
  WorkStation,
};

export default AppRoute;
