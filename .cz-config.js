module.exports = {
  types: [
    { value: "Feat", name: "Feat:     A new feature" },
    { value: "Fix", name: "Fix:      A bug fix" },
    { value: "Docs", name: "Docs:     Documentation only changes" },
    {
      value: "Style",
      name:
        "Style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)",
    },
    {
      value: "Refactor",
      name:
        "Refactor: A code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "Perf",
      name: "Perf:     A code change that improves performance",
    },
    { value: "Test", name: "Test:     Adding missing tests" },
    {
      value: "Chore",
      name:
        "Chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation",
    },
    { value: "Revert", name: "Revert:   Revert to a commit" },
    { value: "WIP", name: "WIP:      Work in progress" },
  ],

  scopes: [
    { name: "AUTHSERVER" },
    { name: "FRONTEND" },
    { name: "NEPTUNE" },
    { name: "URANUS" },
    { name: "K8S" },
    { name: "ROOT" },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (press enter to skip):",
    subject: "Write a short, imperative tense description of the change:\n",
    body:
      'Provide a LONGER description of the change (press enter to skip). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (press enter to skip):\n",
    footer:
      "List any ISSUES CLOSED by this change (press enter to skip). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },

  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],

  skipQuestions: ["body"],

  // limit subject length
  subjectLimit: 66,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst: true, // default is false
};
