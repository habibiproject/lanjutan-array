// Soal Nomor 1
type Person = {
  name: string;
  age: number;
  languange: string
}

let person: Person = {
  name: "Jhon",
  age: 22,
  languange: "Indonesia"
};

console.info(person.languange);

// Soal Nomor Dua
let arrayDaftarPeserta: Array<string|number> = [
  "Jhon Dea",
  "Laki Laki",
  "Baca Buku",
  1992
];

let objDaftarPeserta = {...arrayDaftarPeserta};
console.info(objDaftarPeserta);