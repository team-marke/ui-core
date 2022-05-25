class JsCore {
  constructor() {
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
    ];
  }

  /**
   * TODO: suporte para os componentes accordion e tabs
   * TODO: reestruturar componete Video Modal/Teaser
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
    const { default: Component } = await import(`../../components/${component}/${component}.js`);
    document.querySelectorAll(`.${component}`).forEach((el) => new Component(el));
  }
}

export default JsCore;
