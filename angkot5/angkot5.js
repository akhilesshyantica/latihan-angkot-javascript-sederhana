var noAngkot = 1;
var angkotBeroperasi = 6;
var jumlahAngkot = 10;

for(noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    }
    else if(noAngkot === 8 || noAngkot ===10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    }
    else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi');
    }
}