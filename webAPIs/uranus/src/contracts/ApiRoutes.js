const version = "/v1";

const ApiRoutes = {
  users: {
    all: version + "/users",
    index: version + "/users/:user_id",
    create: version + "/users"
  },

  notebooks: {
    allByUser: `${version}/notebooks`,
    index: `${version}/notebooks/:notebook_id`,
    create: `${version}/notebooks`,
    allVirtualDocs: `${version}/notebooks/:notebook_id/virtual_docs`,
    test: {
      index: notebook_id => `${version}/notebooks/${notebook_id}`,
      allVirtualDocs: notebook_id => `${version}/notebooks/${notebook_id}/virtual_docs`
    }
  },

  virtual_docs: {
    index: `${version}/virtual_docs/:vDoc_id`,
    create: `${version}/notebooks/:notebook_id/virtual_docs`,
    test: {
      index: vDoc_id => `${version}/virtual_docs/${vDoc_id}`,
      create: notebook_id => `${version}/notebooks/${notebook_id}/virtual_docs`
    }
  },

  boards: {
    create: version + "/boards",
    allByUser: version + "/boards",
    index: version + "/boards/:user_id"
  },

  tasks: {
    create: version + "/boards/:board_id/tasks",
    allByBoard: version + "/boards/:board_id/tasks"
  }
};

module.exports = ApiRoutes;
