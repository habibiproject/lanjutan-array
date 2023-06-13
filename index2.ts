// Array Method

// 1. Filter
// Melakukan filterisasi pada array
let sum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result: number[] = sum.filter((value: number, index: number, array) => {
  return value >= 5;
  // mengecek apakah value dari array lebih dari 5? kalo true ia akan menjalankan program tersebut
});

console.info(result);

// 2. ForEach
// Melakukan perulangan untuk sebuah array
// digunakan untuk menjalankan sebuah fungsi pada setiap elemen dalam array. Metode ini tidak mengembalikan nilai apa pun, dan hanya digunakan untuk mengubah nilai yang ada pada array
// BISA DI GUNAKAN PADA ARRAY MAUPUN OBJECT
sum.forEach((element: number) => {
  console.info(element);
});

// 3. Join array
// Melakukan Join "," pada sebuah array
let person: string[] = ['Dimas Bayu', 'James Simamora', 'Chengi', 'George Wibu'];

let resJoin: string = person.join(', ');
console.info(resJoin);

// 4. for in
// Melakukan perulangan pada sebuah index di array
for (const key in person) {
  console.info(`index ke ${key} - ${person[key]}`);
}

// 5. for of
// sama seperti foreach, map yang dapat melakukan perulangan pada sebuah array dan perulangan ini mengambil value nya langsung tidak seperti forin, kalo forin menggambil dari sebuah index pada array
// HANYA BISA DI GUNAKAN PADA ARRAY
for (const per of person) {
  console.info(per);
}

// 6. splice
// dapat digunakan untuk mengubah isi array dengan menghapus atau menambahkan value dari sebuah array
let resSplice: string[] = person.splice(2);
console.info(`Result dari Splice : ${resSplice}`);

// 7. slice
// dapat digunakan untuk membuat salinan dari sebagian isi array. Metode ini mengambil dua parameter
console.info(`Result dari arr.slice(1,2) adalah ${person.slice(1, 2)}`);

// 8. Split
// dapat digunakan untuk membagi sebuah string menjadi array. Metode ini mengambil satu parameter
let character: string = 'Windah Barusadar';
let charSplit: string[] = character.split(' ');
console.info(`Result dari Split : ${charSplit}`);

// 9. Reverse
// Melakukan pembalikan pada sebuah array
let revMet: string[] = person.reverse();
console.info(`Result Dari Reverse : ${revMet}`);
