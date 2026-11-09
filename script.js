// DATA GAMBAR DAN HERO
const heroData = [
    {
        nama: "Diangkat Saber",
        gambar: "asset/gambar depan kartu (hero)/1diangkat saber.jpg",
        deskripsi: "santai - menunda-nunda - kecerobohan - kelalaian - kerugian - bodoh - tidak teliti : kamu orang yang terlalu santai dan kurang peduli pada lingkungan sekitar. Sikapmu yang ceroboh dan tidak teliti membuat kamu selalu terjerumus dalam kerugian dan kehilangan yang menyebabkan penyesalan dimasa depan. Kamu juga orang yang suka menunda-nunda sesuatu dan terlalu santai terhadap hidupmu dan menganggap bahwa semua itu sudah ada porsinya. Hal itu menyebabkan dirimu sering kali melewatkan kesempatan emas yang datang dan kamu menyesal pada akhir. Kalimat Keburu Diangkat Saber mengartikan bahwa kamu orang yang lambat dan kurang cepat dalam berfikir serta bertindak terhadap suatu kesempatan yang mengakibatkan kamu kehilangan kesempatan tersebut akibat dirimu yang kurang responsif. Kamu juga orang yang tidak belajar dari kesalahan yang kamu perbuat sehingga kerugian dan penyesalan terjadi terus menerus."
    },
    {
        nama: "Diggiedaw",
        gambar: "asset/gambar depan kartu (hero)/2diggiedaw.jpg",
        deskripsi: "pasrah - komedi - lucu - membosankan - datar - menyebalkan - kesal - sedih - muak : kamu merupakan orang yang sudah pasrah dengan kehidupan yang ada. Apapun yang sudah terjadi padamu apalagi hal itu terjadi terus-menerus membuatmu muak dan bosan akan hal itu. Kamu memiliki fisik dan kepribadian yang unik sehingga menjadi dayatarik orang lain terhadap dirimu entah itu karena kamu lucu atau justru menyebalkan. Kamu juga sering menjadi bahan bullyan dan bercandaan orang-orang disekitarmu karena fisik atau kepribadianmu dan kamu hanya bisa pasrah akan hal itu."
    },
    {
        nama: "Lance Pincang",
        gambar: "asset/gambar depan kartu (hero)/3lance pincang.jpg",
        deskripsi: "kerapuhan - kesombongan - kelemahan - ketidakberdayaan  - keindahan sementara : Kamu merupakan orang yang sangat sombong atas kekuatan dan kemampuan yang kamu miliki. Namun kamu tidak menyadari ternyata terdapat kelemahan fatal dari dirimu yang menjadikan karma bagi kesombonganmu. Lance pincang menggambarkan, walaupun  kamu orang yang cepat dan lincah, ingat kamu punya kelemahan yang sangat rapuh didalam dirimu yang membuat kamu tidak berdaya dan tidak bisa lagi menyombongkan kemampuanmu"
    },
    {
        nama: "Moskov Busung Lapar",
        gambar: "asset/gambar depan kartu (hero)/4moskov busung lapar.jpg",
        deskripsi: "kebebasan - kemiskinan - kekuatan - keinginan untuk hidup - semangat - kelaparan : Kamu adalah orang yang walau dalam kesulitan, namun tetap berjuang. Tidak peduli bagaimana kondisimu, mau itu kamu sedang mengalami kekurangan, tidak menjadikan halanganmu untuk terus berjuang. Kamu yakin kelak semua perjuangan akan menghasilkan hasil yang setimpal. walau kamu memulainya dari kecil, ingat bahwa suatu saat hal kecil yang kamu mulai tersebut perlahan-lahan akan tumbuh menjadi besar."
    },
    {
        nama: "Onty Onty",
        gambar: "asset/gambar depan kartu (hero)/5onty onty.jpg",
        deskripsi: "`kebebasan - mengejek - perayaan - kesenangan - bergairah  : kamu adalah orang yang sangat ceria dan suka melakukan perayaan kecil-kecilam terhadap apa yang sudah kamu lakukan. Tidak peduli masalah apapun yang kamu hadapi, kami tetap menyempatkan diri untuk menghibur diri agar tidak stres. Sikapmu terkadang terlihat tengil dan mengesalkan, namun itulah ciri khas mu dan kamu tidak peduli pandangan orang lain terhadap dirimu. Selagi tindakan yang kamu lakukan menghasilkan kebahagiaan, kamu akan melakukan."
    },
    {
        nama: "Roger Sumatra",
        gambar: "asset/gambar depan kartu (hero)/6roger sumatra.jpg",
        deskripsi: "kesendirian - kesepian - kekuatan yang tertahan - penghakiman - kepedihan - ketidakberdayaan - ketakutan - kelemahan - pendiam - keinginan untuk bebas - ketidakpercayaan diri - cinta yang terpendam : kamu merupakan sosok yang masih terbelenggu dalam masalalu. Kamu sendirian dan mengalami kerinduan berat terhadap kenangan masalalu namun kamu menyadari itu tidak akan dapat kembali. Kamu merelakan orang yang kamu cintai pergi demi kesuksesannya dan kamu sekarang masih terpuruk dalam penderitaan dan kondisi yang sangat sulit. Kamu merasa tidak pantas dan insecure jikalau nantinya harus bertemu kembali dengan masa lalumu dalam kondisi dirimu yang sekarang sedang hancur, namun dalam lubuk hati yang terdalam kamu masih menyimpan rasa cinta yang tulus dan rasa rindu yang mendalam."
    },
    {
        nama: "The Cool",
        gambar: "asset/gambar depan kartu (hero)/7the cool.jpg",
        deskripsi: "dingin - pemberani - keteguhan - percaya diri - angkuh - perjuangan - kebebasan : kamu merupakan sosok pemberani dan pejuang yang sangat kuat dan berani mengambil resiko. (Aku?! Berlutut?! Tidak akan!!!) tidak peduli seberapa besar tantangan yang kamu hadapi kamu memegang teguh keberanian serta kebebasan dan tidak akan tunduk atau berlutut pada siapapun. kalimat Dingin tetapi tidak kejam mengartikan bahwa kamu merupakan orang yang tenang dan kalem namun menyimpan jiwa kepemimpinan yang baik dan bijaksana."
    },
     {   nama: "The Niggas Cipox",
        gambar: "asset/gambar depan kartu (hero)/8the niggas cipox.jpg",
        deskripsi: "cinta - kasih sayang - kepedulian -belenggu - pasrah - keberanian - kegelapan hati - kebebasan -resiko : kamu merupakan orang yang mungkin kurang percaya diri terhadap fisikmu, namun kamu yakin bahwa kamu memiliki cinta yang besar dan kuat. Kamu orang sangat suka berinteraksi fisik dengan orang lain, mau itu pacar, teman, atau bahkan orang tidak dikenal siapapun. Kamu menganggap semua orang itu bisa diperlakukan dengan sama. Kamu juga orang yang tidak peduli siapa orang yang kamu hadapi, kamu tetap melakukan apa yang kamu inginkan dengan berani mengambil resiko apapun itu. Kamu juga orang yang percaya diri dan sangat pemberani, tidak peduli bagaimana penampilanmu, kamu tetap teguh menjalani hidup dan berhubungan."
    }
];


// mengambil form dari html
const userForm = document.getElementById("userForm");

// mendeteksi ketika form dikirim
userForm.addEventListener("submit", function(event) {
    
    event.preventDefault();

   document.getElementById("startPage").style.display = "none";
   document.getElementById("heroPage").hidden = false;

   sessionStorage.setItem("currentPage", "heroPage")
});

// mengambil semua kartu
 const cards = Array.from(document.querySelectorAll(".card"));

// mengambil wadah kartu
const cardContainer = document.getElementById("cardContainer");

function shuffledCardsOrder() {
    // membuat sallinan kartu
    const shuffledCards = [...cards];

    // mengacak posisi kartu
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffledCards[i], shuffledCards[randomIndex]] =
        [shuffledCards[randomIndex], shuffledCards[i]]
    }


    // memasukkan kartu ke html sesuai rutan kartu
    shuffledCards.forEach(function(card) {
        cardContainer.appendChild(card);
    })
    // menyimpan urutan kartu
    sessionStorage.setItem(
        "cardOrder", JSON.stringify(
            shuffledCards.map(card => Number(card.dataset.card)))
    );
}

// memeriksa apakah urutan kartu sudah tersimpan
const savedOrder = JSON.parse(
    sessionStorage.getItem("cardOrder") || "null"
);

if (savedOrder && savedOrder.length === cards.length) {

    // mengembalikan urutan kartu seelumnya
    savedOrder.forEach(function(number) {
        const card = cards.find(function(item) {
            return Number(item.dataset.card) === Number(number);
        });

        if (card) {
            cardContainer.appendChild(card);
        }


    });
} else {
    // mengacak kartu ketika pertama kali dibuka
    shuffledCardsOrder();
}

 const selectedCount = document.getElementById("selectedCount");

 const openButton = document.getElementById("openButton");

 const shuffledButton = document.getElementById("shuffleButton");

 let selectedCards = [];
//  mengambil data kartu yang tersimpan
 const savedSelectedCards = window.JSON.parse(
    sessionStorage.getItem("selectedCards") || "[]"
 );

//  mengembalikan pilihan kartu sebelumnya
savedSelectedCards.forEach (function(number) {

    const card = document.querySelector(
        `.card[data-card="${number}"]`
    );

    if (card) {
        selectedCards.push(card);
        card.classList.add("selected");
    }
});

// memperbarui jumlah kartu
selectedCount.textContent = `Kartu dipilih: ${selectedCards.length}/2`;

// mengaktifkan atau menonaktifkan tombol
openButton.disabled = selectedCards.length !== 2;
 cards.forEach(function(card) {

    card.addEventListener("click", function() {
             console.log("Kartu berhasil diklik:", card.dataset.card);


 if (selectedCards.includes(card)) {
    selectedCards = selectedCards.filter(function(item) {
        return item !== card;
    });
    card.classList.remove("selected");
 }

 else {
    if  (selectedCards.length < 2) {
        selectedCards.push(card);
        card.classList.add("selected");
    }
 }
// memperbarui jumlah kartu
 selectedCount.textContent = `Kartu dipilih: ${selectedCards.length}/2`;
//  mengaktifkan atau menonaktifkan tombol
 openButton.disabled = selectedCards.length !== 2;
sessionStorage.setItem(
    "selectedCards", 
    JSON.stringify( 
       selectedCards.map(function(card) {
        return Number(card.dataset.card);
       }
       )
));
 });
  });

//  ketika tombol acak kartu diklik
shuffleButton.addEventListener("click", function(){
    // menghapus pilohan kartu sebeumnya
    selectedCards = [];
    cards.forEach(function(card) {
        card.classList.remove("selected");
    });

    // memperbarui jumlah kartu
    selectedCount.textContent = "kartu dipilih: 0/2";

    // menonaktifkan tombol buika kartu
    openButton.disabled = true;

    // menghapus data pilihan sebelumnya
    sessionStorage.removeItem("selectedCards");

    // menjalaknkan pengacakan 
    shuffledCardsOrder();
});

 
// perpindahan halaman
const resultPage = document.getElementById("resultPage");
const backButton = document.getElementById("backButton");

// ketika tombol buka kartu di klik
openButton.addEventListener("click", function() {

   // hasil kartu
   showResultCards();
   sessionStorage.setItem("currentPage", "resultPage");

   

   // menyembunyikan halaman pemilihan kartu
   document.getElementById("heroPage").hidden = true;

   // menampilkan halaman hasil
   resultPage.hidden = false;
});

// saat tombol kebali diklik
backButton.addEventListener("click", function() {

    sessionStorage.setItem("currentPage", "startPage");
   
   // menyembunyikan halaman hasil
   resultPage.hidden = true;
   heroPage.hidden = true;

//    menampilkan halawan awal
startPage.hidden = false;
startPage.style.display = "";

// menghapus pilihan kartu sebelumnya
selectedCards = [];


// menghapus pilihan kartu sebeleumna
cards.forEach(function(card){ 
card.classList.remove("selected");
 });

selectedCount.textContent = "Kartu dipilih: 0/2";

// menonaktifkan tombol buka kartu
openButton.disabled = true;

// menghapus data pilihan sebelumnya
sessionStorage.removeItem("selectedCards");
});

// mengambil trmpat gambar dan nama hero
const resultCardsContainer = document.getElementById("resultCards");
const resultDescription = document.getElementById("resultDescription");
// fungsi menampilkan hasil kartu
function showResultCards() {

   // mengosongkan hasil sebelumnya
   resultCardsContainer.innerHTML ="";
   resultDescription.innerHTML = "<h3>Penjelasan</h3>"
   
   // membaca setiap kartu yang dipilih 
   selectedCards.forEach(function(card) {

      // mengambil nomor kartu
      const cardNumber = Number(card.dataset.card);

      // mengambil data hero sesuai nomor kartu
      const hero = heroData[cardNumber - 1];

      // membuat wadah kartu
      const resultCard = document.createElement("div");
      resultCard.classList.add("result-card");

      // membuat gambar hero
      const heroImage = document.createElement("img");
      heroImage.src = hero.gambar;
      heroImage.alt = hero.nama;

      // membuat nama hero
      const heroName = document.createElement("h3");
      heroName.textContent = hero.nama;

      // memasukkan element ke kartu hasil
      resultCard.appendChild(heroImage);
      resultCard.appendChild(heroName);

      // masukkan kartu ke area gambar
      resultCardsContainer.appendChild(resultCard);

      // penjelasan hero
      const description = document.createElement("p");
      description.textContent = hero.nama + " : " + hero.deskripsi;

      // memasukkan penjelasn ke panes
      resultDescription.appendChild(description);
   });
}

// mengambil halaman yang terbuka
const savedPage = sessionStorage.getItem ("currentPage");

// ?mengambil elemen halaman
const startPage = document.getElementById("startPage");
const heroPage = document.getElementById("heroPage");

// jika terakhir berada di halaman pemilihan kartu
if (savedPage === "heroPage") {
    startPage.style.display = "none";
    heroPage.hidden = false;
    resultPage.hidden = true;
}

// jika terakhir berada di halaman hasil
else if (savedPage === "resultPage") {
    startPage.style.display = "none";
    heroPage.hidden = true;
    resultPage.hidden = false;

    //  menampilkan kenbali hasil kartu
    showResultCards();
}

else {
    startPage.hidden = false;
    startPage.style.display = "";

    heroPage.hidden = true;
    resultPage.hidden = true;
}