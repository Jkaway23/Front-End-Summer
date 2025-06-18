(function (berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  callback(bmi);
})(60, 1.7, function (hasil) {
  console.log(hasil);
});
