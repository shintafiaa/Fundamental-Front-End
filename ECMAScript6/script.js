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
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// const { firstName, lastName, age } = profile; // pastikan penamaan variabel-variabelnya sama seperti yang dimiliki oleh properti objeknya
// Melalui nama variabel ini, nilai-nilai properti objek akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, dan variabel age akan berisikan nilai profile.age.
// console.log(firstName, lastName, age);

//6.2. Destructuring pada spesifik properti
const { firstName } = profile;
console.log(firstName);
