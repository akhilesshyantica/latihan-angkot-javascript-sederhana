var noAngkot = 1;
var angkotBeroperasi = 6;
var jumlahAngkot = 10;

for(noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    }
    else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
    }
}