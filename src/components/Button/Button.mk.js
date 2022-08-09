function Button(content, href, theme, target, id, size, classes, atts) {
  function getTarget() {
    return target ? `target="${target}"` : "";
  }

  function getId() {
    return id ? `id="${id}"` : "";
  }

  function getSize() {
    return size ? `btn-${size}` : "";
  }

  function getAtts() {
    if (typeof atts !== "object") {
      return "";
    }
    let str = "";
    for (const key in atts) {
      str += `${key}="${atts[key]}"`;
    }
    return str;
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return "";
    }
    return classes.join(" ");
  }

  return `
    <a class="btn btn-${theme} ${getSize()} ${getClasses()}" 
    href="${href}" role="button" ${getTarget()} ${getId()} ${getAtts()}>${content}</a>
  `;
}

module.exports = Button;
