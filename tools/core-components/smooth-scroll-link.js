class SmoothScrollLink {
  constructor(el) {
    if (el instanceof HTMLAnchorElement) {
      this.el = el;
      this.targetEl = document.querySelector(this.el.hash);
      this.headerOffset = SmoothScrollLink.getheaderOffset();
      this._addListener();
    }
  }

  _addListener() {
    this.el.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      this.handleClick();
    });
  }

  static scrollTo(targetEl, hash, offset) {
    window.location.hash = hash;
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: targetEl.getBoundingClientRect().top + window.scrollY - offset,
    });
  }

  static getheaderOffset() {
    const header = document.querySelector('header');
    if (header.style.position === 'sticky') {
      return header.offsetHeight;
    }
    return false;
  }

  handleClick() {
    SmoothScrollLink.scrollTo(this.targetEl, this.el.hash, this.headerOffset);
  }
}

export default SmoothScrollLink;
