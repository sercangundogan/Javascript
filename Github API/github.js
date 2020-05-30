// Sadece Github İşlemleri (GET REQUEST) YAPILIR.

class Github{
    constructor(){
        // Temel Url'yi Özellik olarak ekledik
        this.url ="http://api.github.com/users/";
    }

    async getGithubData(username){
        
        // Get Request - Resolve edilene kadar bekliyoruz
        // Resolve Edildikten sonra responseUser'a resolve'u atıyoruz.
        const responseUser = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username + "/repos");

        // resolve ettiğimiz değeri json verisine çevirdik
        const userData = await responseUser.json();
        const repoData = await responseRepo.json();

        return {
            user : userData,
            repo : repoData
        }
    }
}