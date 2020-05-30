// 
class Storage {


    // Tüm kullanıcıları Storage'dan alıcaz.
    static getSearchedUsersFromStorage(){
        let users; 
        // Users storage'taki searched boş mu yoksa içinde veri varm ı
        if (localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            // Kullanıcıları aldık ve Array'e çevirdik.
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    // Aranan kullanıcıları storage'ı ekleyeceğiz.(username parametresi alıyor)
    static addSearchedUserToStorage(username){
        // Storage class'ının yani bu classın altındaki fonksiyonu kullandık
        // O yüzden this yazdık yani Storage'taki fonksiyonu this'le çağırdık.
        let users = this.getSearchedUsersFromStorage();

        // IndexOf ile kullanıcı var mı yok mu diye sorguluyoruz. 
        // Eğer daha önce aranmışsa bir daha eklemiyeceğiz.
        // eğer -1'e eşitse yok demektir, ekleyebilir.
        if (users.indexOf(username) === -1 ){
            users.push(username);
        }
        // Local Storage'ı güncelliyoruz. (String Halinde)
        localStorage.setItem("searched", JSON.stringify(users));
        
    }

    // Aranan tüm kullanıcıları (Geçmişi) Temizleyeceğiz.
    static clearAllSearchedUsersFromStorage(){
        localStorage.removeItem("searched");
    }
}