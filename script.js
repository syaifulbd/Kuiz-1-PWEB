const nama = document.getElementById('nama');
const instansi = document.getElementById('instansi');
const alamat = document.getElementById('alamat');
const kodepos = document.getElementById('kodepos');
const provinsi = document.getElementById('provinsi');
const telepon = document.getElementById('telepon');
const email = document.getElementById('email');
const sponsor = document.getElementById('sponsor');
const namap = document.getElementById('namap');
const alamatp = document.getElementById('alamatp');
const cp = document.getElementById('cp');
const telpcp = document.getElementById('telpcp');
const emailp = document.getElementById('emailp');

const namaProvinsi = [
    {"id":"10","nama":""},
    {"id":"11","nama":"ACEH"},
    {"id":"12","nama":"SUMATERA UTARA"},
    {"id":"13","nama":"SUMATERA BARAT"},
    {"id":"14","nama":"RIAU"},
    {"id":"15","nama":"JAMBI"},
    {"id":"16","nama":"SUMATERA SELATAN"},
    {"id":"17","nama":"BENGKULU"},
    {"id":"18","nama":"LAMPUNG"},
    {"id":"19","nama":"KEPULAUAN BANGKA BELITUNG"},
    {"id":"21","nama":"KEPULAUAN RIAU"},
    {"id":"31","nama":"DKI JAKARTA"},
    {"id":"32","nama":"JAWA BARAT"},
    {"id":"33","nama":"JAWA TENGAH"},
    {"id":"34","nama":"DAERAH ISTIMEWA YOGYAKARTA"},
    {"id":"35","nama":"JAWA TIMUR"},
    {"id":"36","nama":"BANTEN"},
    {"id":"51","nama":"BALI"},
    {"id":"52","nama":"NUSA TENGGARA BARAT"},
    {"id":"53","nama":"NUSA TENGGARA TIMUR"},
    {"id":"61","nama":"KALIMANTAN BARAT"},
    {"id":"62","nama":"KALIMANTAN TENGAH"},
    {"id":"63","nama":"KALIMANTAN SELATAN"},
    {"id":"64","nama":"KALIMANTAN TIMUR"},
    {"id":"65","nama":"KALIMANTAN UTARA"},
    {"id":"71","nama":"SULAWESI UTARA"},
    {"id":"72","nama":"SULAWESI TENGAH"},
    {"id":"73","nama":"SULAWESI SELATAN"},
    {"id":"74","nama":"SULAWESI TENGGARA"},
    {"id":"75","nama":"GORONTALO"},
    {"id":"76","nama":"SULAWESI BARAT"},
    {"id":"81","nama":"MALUKU"},
    {"id":"82","nama":"MALUKU UTARA"},
    {"id":"91","nama":"P A P U A"},
    {"id":"92","nama":"PAPUA BARAT"}
];

const displayProvinsi = (options) => {
    options.forEach((element) => {
      const newOption = document.createElement("option");
      newOption.value = element.id;
      newOption.text = element.nama;
      provinsi.appendChild(newOption);
    });
};

displayProvinsi(namaProvinsi);

function submit_form() {
    var letters = /^[A-Za-z]+$/;  
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var num = /^[0-9]+$/;

    if(!letters.test(nama, namap, cp)) {
        alert('Name is incorrect must contain alphabets only');
    }
    else if(!email_val.test(email, emailp)) {
        alert('Invalid Email format please enter valid email');
    }
    else if (!num.test(telepon, telpcp, kodepos)) {
        alert('Invalid format! Telepon, Telp. Kontak Personal, and Kode Pos must contain number only')
    }
    else {
        alert("Registration successfull...");
    }
}