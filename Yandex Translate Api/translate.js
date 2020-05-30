// Api Kullanımı

function Translate(word, language){
    
    this.apiKey = "trnsl.1.1.20200526T195449Z.f825a1e3114da096.98d3f9dd4d1acb805f946db71236f8707874c45e"
    this.word = word;
    this.language = language;
    

    // XHR object

    this.xhr = new XMLHttpRequest();
}


Translate.prototype.translateWord = function(callback) {
    // Ajax İşlemleri
    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`
    this.xhr.open("GET", endPoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
            // console.log(JSON.parse(this.xhr.responseText).text[0]);;
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0]
            console.log(text)
            callback(null,text);
        }
        else{
            callback("Bir hata oluştu", null);
        }
    }

    this.xhr.send()
};

Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}