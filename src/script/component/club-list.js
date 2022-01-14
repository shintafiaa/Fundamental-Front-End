//import club-item.js karena berkas ini menggunakan elemen <club-item>
import "./club-item.js";

class ClubList extends HTMLElement {
  //Fungsi set clubs digunakan untuk menetapkan properti this._clubs pada class ini
  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  //fungsi untuk menangani ketika hasil pencarian mengalami kegagalan atau tidak ditemukkan
  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
  }

  render() {
    //fungsi perulangan dengan forEach pada this._clubs
    //Pada setiap iterasinya kita akan mendapatkan individual club dan pada saat itu juga kita buat custom element < club - item >
    // tiap elemen <club-item> dibuat sebagai child dari element <club-list>
    this.innerHTML = "";
    this._clubs.forEach((club) => {
      const clubItemElement = document.createElement("club-item");
      clubItemElement.club = club;
      this.appendChild(clubItemElement);
    });
  }
}

customElements.define("club-list", ClubList);
