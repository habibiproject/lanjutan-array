// Soal Nomor 1
let array2: number[] = [5, 2, 4, 1, 3, 5];
console.info(`Before Sorting : ${array2}`);
array2.sort();
console.info(`After Sorting : ${array2}`);

// Soal Nomor 2
let array3: string[] = ['Selamat', 'Anda', 'Melakukan', 'Perulangan', 'Array', 'Dengan', 'For'];
for (let i = 0; i < array3.length; i++) {
  console.info(`Looping with For : ${array3[i]}`);
}

// Soal Nomor 3
let array4: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array4.forEach((value: number) => {
  if (value % 2 == 0) console.info(value);
});

// Soal Nomor 4
let kalimat: string[] = ['Saya', 'sangat', 'senang', 'belajar', 'javascript'];
console.info(`Used Method Join : ${kalimat.join(' ')}`);

// Soal Nomor 5
let sayuran: string[] = [];
let pushing = sayuran.push('Kangkung', 'bayam', 'buncis', 'kubis', 'timun', 'seledri', 'tauge');
console.info(sayuran);
