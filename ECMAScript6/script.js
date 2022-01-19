// 1. Deklarasi var dan Hoisting
// 1.1.
// function makeTea(isCold) {
//   if (isCold) {
//     var tea = "Make an Ice Tea!";
//   } else {
//     var tea = "Make a Hot Tea!";
//   }
//   return tea;
// }
// console.log(makeTea(false));
// Variabel yang dideklarasikan menggunakan var akan selalu diangkat pada tingkatan atas sebuah fungsi walaupun kita menuliskannya bukan pada tingkatan atas fungsi. Proses pengangkatan deklarasi variabel ini disebut dengan hoisting.
// Padahal kita mendeklarasikan variabel tea di dalam blok if dan blok else. Seharusnya kita tidak dapat mengaksesnya diluar blok tersebut dan menghasilkan error.
// Di belakang layar, JavaScript mengangkat proses deklarasi variabel tea pada tingkatan atas fungsi. Sehingga variabel tersebut akan tersedia selama kita berada di dalam fungsi makeTea.

// 1.2.
// function getFood() {
//   food = "choocolate";
//   console.log(food);
//   var food;
// }
// getFood();
// menginisialisasi nilai dan menggunakan variabel, sebelum ia dideklarasikan (hoisting)

// 2. let dan const
// 2.1. let atau const tersedia pada cakupan block bukan pada fungsi
// function makeTea(isCold) {
//   if (isCold) {
//     let tea = "Make an Ice Tea!";
//   } else {
//     let tea = "Make a Hot Tea!";
//   }
//   return tea;
// }
// console.log(makeTea(false));

// 2.2. let atau const tidak dapat diakses sebelum ia dideklarasikan
// function getFood() {
//   food = "choocolate";
//   console.log(food);
//   let food;
// }
// getFood();

// variabel yang dideklarasikan dengan let atau const tidak dapat di deklarasikan ulang pada cakupan yang sama
// Perbedaanya antara let dan const adalah jika kita menggunakan let maka variabel tersebut dapat diinisialisasi ulang nilainya. Sedangkan const tidak bisa, sehingga jika kita menggunakan const pastikan kita langsung menginisialisasi nilai dari variabel tersebut.

// 3. Mengubah dan Menginisialisasi Ulang variabel bertipe const
// mengubah dan menginisialisasikan ulang nilai pada variabel merupakan hal yang berbeda. Kita bisa lihat perbedaanya dengan jelas ketika sebuah variabel tersebut merupakan array atau objek.
// 3.1. Menginisialisasikan ulang Array
// const fruits = ["apple", "orange"];
// fruits = ["apple", "orange", "banana"];
// console.log(fruits);

// 3.2. Menginisialisasikan ulang object
// const people = { name: "John", age: 18 };
// people = { name: "John", age: 18, regency: "Bandung" };
// console.log(people);

// 3.3. Mengubah nilai array
// const fruits = ["apple", "orange"];
// fruits.push("banana");
// console.log(fruits);

// 3.4. Mengubah nilai object
// const people = { name: "John", age: 18 };
// people.regency = "Bandung";
// console.log(people);

// 4. Template Literals-Mengelola String
// 4.1. menggabungkan nilai string adalah dengan menggunakan operator (+)
// const user = {
//   firstName: "Dimas",
//   lastName: "Saputra",
//   age: 18,
// };

// console.log(
//   "Nama: " + user.firstName + " " + user.lastName + ", Umur: " + user.age
// );

// 4.2. Penggabungan string menggunakan operator (+) menjadi susah dalam pengetikan ganti baris
// const user = {
//   firstName: "Dimas",
//   lastName: "Saputra",
//   age: 18,
// };

// const admin = {
//   name: "Jane",
//   position: "Marketing",
// };

// const message =
//   "Dear, " +
//   user.firstName +
//   " " +
//   user.lastName +
//   "\n\n" +
//   "Selamat ulang tahun yang ke-" +
//   user.age +
//   " semoga selalu diberikan kesehatan." +
//   "\n\n" +
//   "Best Regards,\n" +
//   admin.name +
//   "\n" +
//   admin.position;

// console.log(message);

// 4.3. Menggunakan template literals

// const user = {
//   firstName: "Dimas",
//   lastName: "Saputra",
//   age: 18,
// };

// console.log(`Nama: ${user.firstName} ${user.lastName} Umur: ${user.age}`);

// 4.4. Template literal dapat membaca line space tanpa escape character (karakter-karakter yang diawali dengan \)

// const user = {
//   firstName: "Dimas",
//   lastName: "Saputra",
//   age: 18,
// };

// const admin = {
//   name: "Jane",
//   position: "Marketing",
// };

// const message = `
// Dear, ${user.firstName} ${user.lastName}

// Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.

// Best Regards,
// ${admin.name}
// ${admin.position}`;

// console.log(message);

// 5. Destructuring
// 5.1. Destructuring pada array sebelum ES6
// const foods = ["Pie", "Cake", "Honey"];

// const myFood = foods[0];
// const yourFood = foods[1];
// const ourFood = foods[2];

// console.log(myFood, yourFood, ourFood);

//5.2. Destructuring pada object sebelum ES6
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const age = profile.age;

// console.log(firstName, lastName, age);

// 6. Destructuring dengan Objek literal di sisi kiri assignment (penugasan)
// 6.1. Seluruh properti objek
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const { firstName, lastName, age } = profile; // pastikan penamaan variabel-variabelnya sama seperti yang dimiliki oleh properti objeknya
// Melalui nama variabel ini, nilai-nilai properti objek akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, dan variabel age akan berisikan nilai profile.age.
// console.log(firstName, lastName, age);

//6.2. Destructuring pada spesifik properti
// const { firstName } = profile;
// console.log(firstName);

// 7. Destructuring Assignment
// destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct (terpisah) variables.
// 7.1. Pakai "()"
// const profile = {
//   firstName : "John",
//   lastName : "Bill",
//   age : 10
// }

// let firstName = "Dimas";
// let lastName = "Sasongko";
// let age = 20;

// ({firstName, lastName, age} = profile)

// console.log(firstName, lastName, age)
// 7.2. Nama variabel destruksi harus sama seperti nama properti dari objek. Jika tidak, maka nilai variabel menjadi undefined
// const {firstName, lastName, sex} = profile;
// console.log(firstName, lastName, sex)

// 7.3. Isikan nilai default pada properti tertentu jika tidak ditemukan
// const {firstName, lastName, sex=false} = profile;
// console.log(firstName, lastName,  sex)

// 7.4. Destruksi dengan nama variabel berbeda dari properti suatu objek
// const {firstName: namaPertama, lastName: namaTerakhir, age: umur} = profile;
// console.log(namaPertama, namaTerakhir, umur)

// 8. Destructuring Array menggunakan "[]" sedangkan destructuring objek menggunakan "{}". Selain itu, destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
// 8.1. Posisi Array
// const favorites = ["bakso", "pecel", "mi", "nasgorbat", "kwetiau"]
// const [makanan1, makanan2, makanan3, makanan4, makanan5] = favorites
// console.log(makanan1, makanan2, makanan3, makanan4, makanan5)

// 8.2. Mengkosongkan array. Tetap perhatikan posisi.

// const [, , makanan3, , ] = favorites
// console.log(makanan3)  //expected output is mi

// 8.3. Swapping dengan array destructuring
// let kado1 = "sepatu";
// let kado2 = "tas";

// [kado1, kado2] = [kado2, kado1]
// console.log(kado1, kado2);

// 8.4. Undefined pada nilai array yang tidak dapat dijangkau
// const favourites = ["mawar", "melati"];
// const [bunga1, bunga2, bunga3] = favourites;
// console.log(bunga1, bunga2, bunga3)

// 8.5. Default value pada nilai array yang tidak dapat dijangkau
// const [bunga1, bunga2, bunga3 = "kamboja"] = favourites;
// console.log(bunga1, bunga2, bunga3)

// 9. Spreading Operators
// 9.2. Beda menampilkan array dan menampilkan penjabaran isi array
// const anakBuRT = ["Dita", "Putri", "Agus", "Fina"]
// console.log(anakBuRT); //menampilkan array atau "[]" ikut muncul
// console.log(...anakBuRT); //menampilkan isi array
// console.log(anakBuRT[0], anakBuRT[1], anakBuRT[2], anakBuRT[3]) //hasilnya sama dengan spreading operator

// const anakBuRW = ["Udin", "Fifah", "Yuda"];
// console.log(anakBuRT, anakBuRW) // menampilkan array yang terdiri dari dua array
// console.log(...anakBuRT, ...anakBuRW) //menggabungkan nama anak-anak para ibu

// 9.2. spreading operator berguna untuk variadic function (function of indefinite [tak terbatas] airty [arity: the number of arguments that a function can take;])
// const nilai = [90, 95, 85, 100, 75, 80]
// console.log(Math.max(...nilai))

// 10. Rest parameter
// 10.1. Menjumlahkan beberapa nilai
// function sum (...inputs){
//   let total = 0;
//   for (let input of inputs){
//     total += input;
//   }
//   return total
// }

// console.log(sum(1,2,3,4,5,6,7))

// 10.2. rest parameter menggabungkan beberapa elemen menjadi array
// const refrigerator = ["samsung", "2", "navy", "coconut", "ice cube", "meat", "cheese"];
// const [merk, door, color, ...fill] = refrigerator;
// console.log(merk);
// console.log(door);
// console.log(color);
// console.log(fill) 

// 11. Arrow Function Expression
//  map() method menghasilkan array baru dari hasil masing2 elemen array yang diaplikasikan pada fungsi map itu sendiri, tanpa merubah array aslinya. dan method ini punya return value sehingga bisa di terapkan pada sebuah variabel
//  forEach() method hanya menjalankan sebuah fungsi sebanyak jumlah elemen array dengan variabel masing2 elemen itu sendiri. dan method ini tidak memiliki return value

// 11.1. uppercase dengan regular function
// const uppercaseNames = ["Shinta", "dita", "ViVi", "inDy", "OVI"].map(function(name){
//   return name.toUpperCase();
// });

// console.log(...uppercaseNames);

// 11.2. uppercase dengan arrow
// const uppercaseNames = ["Shinta", "dita", "ViVi", "inDy", "OVI"].map(name => name.toUpperCase());
// console.log(...uppercaseNames)
//arrow function hanya dapat digunakan dalam bentuk function expression saja, tida function declaration

// 11.3 arrow function sebagai nilai objek properti
// const introduction = { greeting : (name => console.log(`Halo, my name is ${name}.`))}

// 11.4 arrow function sebagai argumen sebuah fungsi expression
// const introduction = name => console.log(`Halo, my name is ${name}.`)

// 11.5 arrow function sebagai argumen sebuah fungsi
// ["Shinta", "dita", "ViVi", "inDy", "OVI"].forEach(name => {
//   console.log(`Halo, my name is ${name}`)
// });
// The forEach() method calls a function for each element in an array.

// 11.6. lebih dari satu parameter
// const introduction = (greeting, name) => console.log(`${greeting}, my name is ${name}.`)
// introduction("Good morning", "shinta")

// 11.7. tanpa parameter ()
// const greeting = () => console.log(`Selamat pagi semuanya!`)
// greeting()

// 11.8. tanpa parameter _
// const greeting = _ => console.log(`Selamat pagi semuanya!`)
// greeting()

// 11.9. lebih dari satu argumen atau expression pada arrow function
// const greeting = language => {
//   if (language == "bahasa"){
//     console.log("Selamat pagi");
//   } else{
//     console.log("Good morning");
//   }
// }

// greeting("inggris")

// 12. function this
// 12.1. function, new, this, regular function, objek
// jika regular function dipanggil dengan menggunakan keyword new maka nilainya akan menjadi objek
// pada reguler function, jika fungsi dipanggil tanpa menggunakan keyword new, this akan memiliki nilai global object (Window jika di browser).
// function people(name, age, hobby){
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }
// const programmer = new people("bobby", 21, ["tenis", "lari", "renang"]);
// console.log(programmer.name, programmer.age, programmer.hobby);

// 12.2. Penjelasan nomor 12.1. sama halnya seperti membuat objek dengan objek literal
// const programmer = {
//   name : "bobby",
//   age : 21,
//   hobby : ["tenis", "lari", "renang"]
// }
// console.log(programmer.name, programmer.age, programmer.hobby);

// 13. this untuk arrow function dan regular function
// 13.1. this pada regular function
// function People(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }
 
 
// // menambahkan introMyself ke People
// People.prototype.introMyself = function () {
//     // this -> People
//     setTimeout(function() {
//        // this -> ??
//         console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
//         console.log(`Hobby saya adalah ${this.hobby}`)
//     }, 300)
// }
 
 
// const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
// programmer.introMyself();

// 13.2. this pada arrow function
// function People(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }

// // menambahkan introMyself ke People
// People.prototype.introMyself = function () {
//     // this -> People
//     setTimeout(() => {
//        // this -> ??
//         console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
//         console.log(`Hobby saya adalah ${this.hobby}`)
//     }, 300)
// }

// const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
// programmer.introMyself();

// 14. default parameter digunakan untuk memberikan nilai default bila saat pemanggilan fungsi, parameter tidak diberikan nilai
// dapat digunakan pada regular function maupun arrow function
// 14.1. default value pada parameter arrow function
// const salam = (greeting = "Holla", name = "stranger") => console.log(`${greeting}, ${name}`);
// salam("Hai", "Idham");
// salam()

// 14.2. default value pada parameter regular function
// const salam = function (greeting = "Holla", name = "stranger") {console.log(`${greeting}, ${name}`);}
// salam("Hai", "Idham");
// salam()

// 15. Class OOP menggunakan prototype pada JavaScript
// Car merupakan constructor function yang akan membuat instance Car baru setiap kali kode new Car() dieksekusi
// function Car (manufacture, color) {
//   this.manufacture = manufacture;
//   this.color = color;
//   this.active = false;
// }
// // Melalui Car.prototype, method engineActive() diwarisi pada setiap instance Car yang dibuat, sehingga mobilFia (sebagai instance Car) dapat mengakses kedua method tersebut.
// Car.prototype.engineActive = function() {
//   this.active = true;
//   console.log(`Mobil ${this.manufacture} dengan warna ${this.color} ${(this.active ? "hidup" : "mati")}`);
// }

// let mobilFia = new Car("BMW","merah")
// mobilFia.engineActive();

// 16. Class
// class Car {
  // sebenarnya kita juga dapat menuliskan logika di dalam constructor jika memang kita memerlukan beberapa kondisi sebelum nilai properti diinisialisasi.
  // constructor (manufacture, color) { //  method spesial constructor
  //   this.manufacture = manufacture;
  //   this.color = color;
  //   this.active = false;
  // }
  // Melalui Car.prototype, method engineActive() diwarisi pada setiap instance Car yang dibuat, sehingga mobilFia (sebagai instance Car) dapat mengakses kedua method tersebut.
//   engineActive() {
//     this.active = true;
//     console.log(`Mobil ${this.manufacture} dengan warna ${this.color} ${(this.active ? "hidup" : "mati")}`);
//   }
// }


// let mobilFia = new Car("BMW","merah")
// mobilFia.engineActive();

// let mobilAdam = new Car("Mercedes-benz","biru")
// mobilAdam.engineActive();

// Ketika kita hendak membuat sebuah constructor function ataupun class. Secara code convention (aturan penulisan), gunakan PascalCase dalam penamaannya. Contohnya Car daripada car

// 17. Mengubah nilai properti instance

// let mobilAdam = new Car("Mercedes-benz","biru")
// mobilAdam.engineActive();

// mobilAdam.color = "emas"
// mobilAdam.engineActive();

// 18. getter setter menggunakan underscore untuk membedakan properti asli dengan properti accessor (pengakses)
// class Car {
//   constructor (name, color) {
//     this.name = name;
//     this._color = color;
//   }

//   get color(){
//     return `Warna mobil ${this.name} adalah ${this._color}`
//   }

//   set color(value){
//     console.log(`Warna mobil diubah dari ${this._color} menjadi ${value}`);
//     this._color = value;
//   }
// }

// const hindiaCar = new Car("Hindia", "gold");
// console.log(hindiaCar.color)
// hindiaCar._color = "grey" //gak boleh diakses langsung. tandanya pakai underscore
// console.log(hindiaCar.color) //gak boleh
// hindiaCar.color = "pink"
// hindiaCar.color

// 19. class dan method pada body class
// class Car{
//   constructor (name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   info(){
//     console.log(`Mobil ${this.name} berwarna ${this.color}`)
//   }
// }

// const hanifCar = new Car("Hanif", "hijau")
// hanifCar.info()