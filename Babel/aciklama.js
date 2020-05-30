// Dosyaların gönderilebilmesi için paketler silindi-> yüklemek için "npm install"
// Önce bir paket oluşturduk. -> "npm init"
// Babel için 4 paket  kurduk. (Aşağıdaki komut ile)
// npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env --save-dev
// Bundan sonra package.json'a devDependencies altına bu paketler geldi.

// "babel"
// babel'ı şuan windows görmüyor o yüzden terminalde çalıştıramıyoruz.
// O yüzden babel'ı kullanmak için node_modules altındaki bin klasörünün altındaki babel.cmd ye giderek kullanabiliriz
// https://babeljs.io/setup#installation -> burdaki sitede anlatıyor.
// Önce bir .babelrc adında configuration file üretmemiz gerekir.
// İçine de sitede yazan kodu yapıştırdık ve babel için işlemlerimiz bitti

// Şimdi test1.js ve test2.js adındaki dosyalarda bunu test edelim
// Öncelikle bu dosyaları src adında bir klasör açıp oraya kopyalıyoruz
// Kodları yukarıdaki js dosyalarına yazdıktan sonra terminale
// ".\node_modules\.bin\babel src -d lib"
// Bu komuttan sonra lib klasörü açılır ve dosyalarımız orda dönüşmüş halde bulunur.

// veya (Çok daha kolay bir yöntem)
// package.json'daki scripts'e 
// "build": "babel src -d lib" ekleriz.
// Sonrasında komut satırına
// "npm run build" diyerek de aynı işlemi yapabiliriz.
