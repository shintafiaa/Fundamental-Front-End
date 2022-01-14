class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  //setter supaya fungsi event dapat diterapkan dari luar class SearchBar
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    //memanfaatkan value dari element <input> untuk mendapatkan kata kunci pencarian club
    //kita buat fungsi getter yang mengembalikan nilai value dari elemen <input>
    return this.querySelector("#searchElement").value;
  }

  render() {
    //ambil elemen yang dibutuhkan untuk ditampilkan dari berkas indes.html
    this.innerHTML = `
    <div id="search-container" class="search-container">
        <input placeholder="Search football club" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
    </div>
    `;
    //terapkan this._clickEvent sebagai event pada element <button> dengan cara menuliskan kode berikut pada akhir fungsi render()
    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

//definisikan custom element yang kita buat agar dapat digunakan pada DOM
customElements.define("search-bar", SearchBar);
