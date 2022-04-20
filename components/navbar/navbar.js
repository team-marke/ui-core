import Offcanvas from 'bootstrap/js/src/offcanvas';
import Dropdown from 'bootstrap/js/src/dropdown';
import SmoothScrollLink from '../../tools/core-components/smooth-scroll-link';

/**
 * Navbar component.
 */

class Navbar {
  constructor(el) {
    el.querySelectorAll('.offcanvas').forEach((offcanvasEl) => {
      const offcanvas = new Offcanvas(offcanvasEl);
      offcanvasEl.querySelectorAll('a[nav-link-internal]').forEach((anchorEl) => {
        new NavLink(anchorEl, offcanvas);
      });
    });
    el.querySelectorAll('.dropdown').forEach((dropdownEl) => {
      new Dropdown(dropdownEl);
    });
  }
}

class NavLink extends SmoothScrollLink {
  constructor(el, offcanvas) {
    super(el);
    this.offcanvas = offcanvas;
  }

  handleClick() {
    const callback = () => {
      NavLink.scrollTo(this.targetEl, this.el.hash, this.headerOffset);
      this.offcanvas._element.removeEventListener('hidden.bs.offcanvas', callback);
    };
    if (this.offcanvas._isShown) {
      this.offcanvas._element.addEventListener('hidden.bs.offcanvas', callback);
      this.offcanvas.hide();
    } else {
      NavLink.scrollTo(this.targetEl, this.el.hash, this.headerOffset);
    }
  }
}

export default Navbar
