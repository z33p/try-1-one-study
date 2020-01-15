const version = "/v1";

const ApiRoutes = {
  users: {
    all: version + "/users",
    index: version + "/users/:user_id",
    create: version + "/users"
  },

  books: {
    allByUser: `${version}/books`,
    index: `${version}/books/:book_id`,
    create: `${version}/books`,
    allVirtualDocs: `${version}/books/:book_id/virtual_docs`,
    test: {
      index: book_id => `${version}/books/${book_id}`,
      allVirtualDocs: book_id => `${version}/books/${book_id}/virtual_docs`
    }
  },

  virtual_docs: {
    index: `${version}/virtual_docs/:vDoc_id`,
    create: `${version}/books/:book_id/virtual_docs`,
    test: {
      index: vDoc_id => `${version}/virtual_docs/${vDoc_id}`,
      create: book_id => `${version}/books/${book_id}/virtual_docs`
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
