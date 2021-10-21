/**
 * Marke UI Core JS class
 */

class Core {
  static usedModules = [];
  constructor() {
    if (!Core._instance) {
      Core._instance = this;
    }
    this.load(Core.usedModules);
    return Core._instance;
  }

  /**
   * Returns the singleton instance
   * @returns {Core}
   */
  static getInstance() {
    return this._instance;
  }

  /**
   * Set static modules to use.
   * @param {*[]} modules
   */
  static use(modules) {
    Core.usedModules = modules;
  }

  /**
   * Load static modules.
   * @param {*[]} modules
   */
  load(modules) {
    for (let module of modules) {
      if (module.className) {
        document.querySelectorAll(`.${module.className}`).forEach((element) => {
          new module(element);
        });
      }
    }
  }

  /**
   * Load modules dynamically.
   * @param {*} modules
   */
  loadDynamically(moduleNames) {
    for (const moduleName of moduleNames) {
      if (document.querySelector(`.${moduleName}`)) {
        import(
          /* webpackInclude: /\.js$/ */
          /* webpackChunkName: "[request]" */
          /* webpackMode: "lazy" */
          /* webpackExports: ["default"] */
          `../../components/${moduleName}/${moduleName}`).then(({ default: module }) => {
          if (module.className) {
            document.querySelectorAll(`.${module.className}`).forEach((element) => {
              new module(element);
            });
          }
        });
      }
    }
  }
}

export { Core as default };
