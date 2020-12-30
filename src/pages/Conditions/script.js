// if dan else statement

// rules buat sebuah variable, intialValue 0, ketika value menyentuh angka 20, tanya user untuk menginput angka, jika bukan angka alert user pesan error, Lalu lanjutkan value ke 30

// for (let i = 0; i < 30; i++) {
//   if (i === 20) {
//     let value = parseInt(prompt('masukkan value: '));
//     if (!value) {
//       alert('masukkan angka!');
//       break;
//     } else {
//       console.log(value);
//     }
//   } else {
//     console.log(i);
//   }
// }

let umur = parseInt(prompt('masukan umur anda : '));

// if (!umur) {
//   alert('please lahh yang bener!');
// } else if (umur > 18 && umur < 50) {
//   alert('Anda sudah boleh melakukan hal hal yang bersifat lebih dewasa');
// } else if (umur < 18) {
//   alert('Anda belum cukup umur');
// } else if (umur > 50) {
//   alert('yah gpp sih , tapi inget umur lahh');
// }

switch (umur) {
  case 1:
    alert('yah gpp sih , tapi inget umur lahh');
    break;
  case 2:
    alert('Anda sudah boleh melakukan hal hal yang');
    break;
  case 3:
    alert('Anda belum cukup umur');
    break;
  default:
    alert('Default');
    break;
}
