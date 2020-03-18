try {
  alert( 'Lagi mencoba' );
  if (confirm('Membuat kesalahan?')) BAD_CODE();
} catch (e) {
  alert( 'Lagi menangkap' );
} finally {
  alert( 'Dan akhirnyaa' );
}