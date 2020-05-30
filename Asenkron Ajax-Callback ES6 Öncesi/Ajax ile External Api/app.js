document.getElementById("change").addEventListener("click", change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest");

    xhr.onload = function(){
        if(this.status) {
            // console.log(this.responseText);
            const response =JSON.parse(this.responseText);
            // console.log(response);
            // console.log(response.rates)
            // console.log(response.rates.TRY)

            const rate = response.rates.TRY;
            // const amount = document.getElementById("amount").value;
            // console.log(typeof rate) // Number Değer, Sıkıntı Yok
            // console.log(typeof amount) // String Değer, Number'a çevirmeliyiz.
            const amount = Number(document.getElementById("amount").value);
            // console.log(amount*rate);
            document.getElementById("tl").value = amount * rate;
        }
    }
    
    xhr.send();


}