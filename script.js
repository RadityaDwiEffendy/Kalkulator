function tambah(){
    var angka = parseInt (document.getElementById('atas').value)
    var angka1 = parseInt (document.getElementById('bawah').value)

    var hasil = angka + angka1
    
    document.getElementById('hasil').value = hasil
    }

function kurang(){
    var angka = parseInt(document.getElementById('atas').value)
    var angka1 = parseInt(document.getElementById('bawah').value)

    var hasil = angka - angka1
    document.getElementById('hasil').value = hasil
    }

function kali(){
    var angka = parseInt(document.getElementById('atas').value)
    var angka1 = parseInt(document.getElementById('bawah').value)

    var hasil = angka * angka1
        
    document.getElementById('hasil').value = hasil
    }

function bagi(){
    var angka = parseInt(document.getElementById('atas').value)
    var angka1 = parseInt(document.getElementById('bawah').value)

    var hasil = angka/angka1

    document.getElementById('hasil').value = hasil
    }
