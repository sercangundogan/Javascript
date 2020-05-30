// Elementleri Seçme
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit", getData);

    // Son arananları temizlemek(Butona tıklandığında)
    clearLastUsers.addEventListener("click", clearAllSearched);

    // Sayfa yüklendiğinde son arananları göstermek (Çok önemli değil kafa yorma)
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

// Forma Submit Edildiğinde Çalışacak
function getData(e){
    // Form Submit Edildi,
    // Trim fonksiyonu ile boşlukları kaldırdık
    let username = nameInput.value.trim();
    
    // Username girildi mi diye konrol ediyoruz
    if (username === ""){
        alert("Lütfen geçerli bir kullanıcı adı girin")
    }
    else{
        // İsim girildiyse class'taki fonksiyon çağrılıcak
        // Elde ettiğimiz username(kullanıcının girdiği) fonk.na gönderilecek.
        github.getGithubData(username)
        // Bu fonksiyondan gelen değerı .then ile yakaladık.
        .then(response => {
            // Kullanıcı bulunuyor mu diye kontrol
            if (response.user.message === "Not Found"){
                // Hata Mesajı
                ui.showError("Kullanıcı bulunamadı.")
            }
            else{
                // Son aranan kişiyi sayfada gösteriyoruz.
                ui.addSearchedUserToUI(username);

                // Sorgulanan kullanıcıyı Storage'a ekliyoruz.
                Storage.addSearchedUserToStorage(username);

                // Kullanıcı var demektir
                // Aranan kişinin bilgilerini sayfada gösteriyoruz.
                ui.showUserInfo(response.user);

                // Bilgileri gösterdikten sonra, son repoları da göstericez.
                ui.showRepoInfo(response.repo);
            }
        })
        // Fonksiyondan bir değer gelmezse hatamızı yakaladık.
        .catch(err => ui.showError(err));
    }
    // Aramayı yaptıktan sonra input alanını temizlemek
    ui.clearInput();


    // Sayfanın yenilenmesini iptal ediyoruz.
    e.preventDefault();

}


// Son aramaları temizleme Butonuna Tıklandığında çalışacak.
function clearAllSearched(){
    // Son Arananları Temizle Butonuna Tıklandı,
    if (confirm("Emin misiniz?")){
        // Silme işlemi başladı
        // Storage'dan Temizleme
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}

// Sayfa Yenilendiğinde çalışacak
function getAllSearched(){
    // Sayfa yenilendi
    let result = "";
    let users = Storage.getSearchedUsersFromStorage();
    users.forEach(user => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        // Elementi Oluşturmak
        result += `<li class="list-group-item">${user}</li>`;

        lastUsers.innerHTML = result;
    });
}

