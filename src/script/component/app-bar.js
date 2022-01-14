class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<h2>Club Finder</h2>`;
  }
}

//definisikan custom element agar dapat digunakan pada DOM
customElements.define("app-bar", AppBar);
