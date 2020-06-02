//general interface that a custom workflow should implement and which is implemented by the current git workflow
export interface Workflow {
  init: (ctx: Ctx) => Promise<void>;

  shouldBackup: (ctx: Ctx) => Promise<void>;

  getStagedFilesList: (ctx: Ctx) => Promise<void>;

  prepare: (ctx: Ctx) => Promise<void>;

  hideUnstagedChanges: (ctx: Ctx) => Promise<void>;

  applyModifications: (ctx: Ctx) => Promise<void>;

  restoreUnstagedChanges: (ctx: Ctx) => Promise<void>;

  restoreOriginalState: (ctx: Ctx) => Promise<void>;

  cleanup: (ctx: Ctx) => Promise<void>;
}
