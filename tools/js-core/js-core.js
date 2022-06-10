class JsCore {
  constructor(components) {
    this._components = [
      'accordion',
      'grid-responsive-slider',
      'carousel',
      'checkbox',
      'actionbar',
      'masthead-slider',
      'modal',
      'navbar',
      'pagination',
      'photo-gallery',
      'post-preview',
      'radio',
      'select',
      'socialbar',
      'tabs',
      'text-field',
      'toast-stack',
      'video-player',
    ];
    if (components) {
      this._components = components;
    }
  }

  /**
   * TODO: Adicionar exemplos ToastStack
   */

  init() {
    this.loadComponents();
  }

  async loadComponents() {
    for (const component of this._components) {
      if (!document.querySelector(`.${component}`)) continue;
      this._loadComponent(component);
    }
  }

  async _loadComponent(component) {
    try {
      const { default: Component } = await import(`../../components/${component}/${component}.js`);
      document.querySelectorAll(`.${component}`).forEach((el) => new Component(el));
    } catch (error) {
      console.error(error);
    }
  }
}

export default JsCore;
