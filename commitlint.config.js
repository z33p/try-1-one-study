module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-case": [2, "always", "pascal-case"],
    "type-enum": [
      2,
      "always",
      [
        "Build",
        "Chore",
        "CI",
        "Docs",
        "Feat",
        "Fix",
        "Perf",
        "Refactor",
        "Revert",
        "Style",
        "Test",
        "WIP",
      ],
    ],
    "scope-case": [2, "always", "upper-case"],
    "scope-empty": [2, "never"],
    "scope-enum": [
      2,
      "always",
      ["AUTHSERVER", "FRONTEND", "NEPTUNE", "URANUS", "K8S", "ROOT"],
    ],
  },
};
