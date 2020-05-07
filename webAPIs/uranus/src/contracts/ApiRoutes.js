const version = "/v1";

const ApiRoutes = {
  users: {
    all: version + "/users",
    index: version + "/users/:user_id",
    create: version + "/users",
  },

  notebooks: {
    allByUser: `${version}/notebooks`,
    index: `${version}/notebooks/:notebook_id`,
    create: `${version}/notebooks`,
    allVirtualPapers: `${version}/notebooks/:notebook_id/virtual_papers`,
    test: {
      index: (notebook_id) => `${version}/notebooks/${notebook_id}`,
      allVirtualPapers: (notebook_id) =>
        `${version}/notebooks/${notebook_id}/virtual_papers`,
    },
  },

  virtual_papers: {
    index: `${version}/virtual_papers/:vPaper_id`,
    create: `${version}/notebooks/:notebook_id/virtual_papers`,
    test: {
      index: (vPaper_id) => `${version}/virtual_papers/${vPaper_id}`,
      create: (notebook_id) =>
        `${version}/notebooks/${notebook_id}/virtual_papers`,
    },
  },

  boards: {
    create: version + "/boards",
    allByUser: version + "/boards",
    index: version + "/boards/:user_id",
  },

  tasks: {
    create: version + "/boards/:board_id/tasks",
    allByBoard: version + "/boards/:board_id/tasks",
  },
};

module.exports = ApiRoutes;
