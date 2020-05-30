// SADECE ARAYÜZ İŞLEMLERİ YAPILIR
// GEREKLİ ETİKLETLER SEÇİLİR FALAN.
class UI {
    constructor(){
        // Profile Div'ini Seçiyoruz
        this.profileDiv = document.getElementById("profile");

        // Repoların Div'ini seçiyoruz
        this.repoDiv = document.getElementById("repos");

        // En Son arananları listeleyeceğimiz ul etiketini seçiyoruz.
        this.lastUsers = document.getElementById("last-users");

        // Input Alanını seçiyoruz
        this.inputField = document.getElementById("githubname");

        // Mesajları göstericeğimiz için Card Body'i classını seçiyoruz. 
        this.cardBody = document.querySelector(".card-body");
    }   
    // Arama yaptıktan sonra input'u temizlemek
    clearInput(){
        this.inputField.value = "";
    }

    // Aranan Kullanıcının Bilgilerini  Göstermek, user parametresi alacak.
    showUserInfo(user){
        // Div'i dinamik olarak oluşturduk.
        this.profileDiv.innerHTML = `
        
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4">
                    <a href="${user.html_url}" target = "_blank">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                    <hr>
                    <div id="fullName"><strong>${user.name}</strong></div>
                    <hr>
                    <div id="bio">${user.bio}</div>
                    </div>
                        <div class="col-md-8">
                            <button class="btn btn-secondary">Takipçi  <span class="badge badge-light">${user.followers}</span></button>
                            <button class="btn btn-info">Takip Edilen  <span class="badge badge-light">${user.following}</span></button>
                            <button class="btn btn-danger">Repolar  <span class="badge badge-light">${user.public_repos}</span></button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px">${user.company}<span id="company"></span>
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px">${user.location}<span id = "location"></a>
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> ${user.email}<span id="company"></span>
                                    
                            </li>    
                        </div>
                    </div>           
                            
                     
                </div>
        
        `
    }
    showError(message){
        // Yeni bir div oluşturduk
        const div = document.createElement("div");
        // Div'in classını Belirledik ve İçine mesajı gönderdik.
        div.className = "alert alert-danger";
        div.textContent = message
        // cardBody'nin en sonuna bu div'i ekledik.
        this.cardBody.appendChild(div);
        // 2 saniye sonra kalkacak
        setTimeout(() => {
            div.remove();
        }, 2000)
    }
    showRepoInfo(repos){
        // Önce burayı temizliyoruz.(Daha önceki aramaların son repolarını silmek için)
        this.repoDiv.innerHTML = "";
        // Her bir repo'yu div'e ekliyoruz.
        repos.forEach(repo => {
            this.repoDiv.innerHTML += `
            <div class="mb-2 card-body">
                <div class="row">
                    <div class="col-md-2"> 
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-secondary">
                            Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                        </button>

                        <button class="btn btn-info">
                            Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                        </button>
                    
                    </div>
            </div>

            </div>
            `
        })
    }
    addSearchedUserToUI(username) {
        // Arananları Storage'dan çektik
        let users = Storage.getSearchedUsersFromStorage();

        // Arananların içinde, yeni aranan kişi var mı diye kontrol ettik.
        if (users.indexOf(username) === -1 ){
            // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;

            // Last Users Elementinin sonuna oluşturduğumuz li elementini ekliyoruz 
            this.lastUsers.appendChild(li);

        }
    }
    clearAllSearchedFromUI(){
        // Son arananları gösteren ul etiketinin tüm çocuklarını temizleyeceğiz
        // Child olana kadar silmek
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }



}