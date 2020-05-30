/*
Öncelikle paketimizi kuruyoruz.
-> npm init
webpack ile babel arasındaki ilişkiyi kurmak için,
babel için gerekli modülleri buraya kurmalıyız.
->npm install @babel/core @babel/polyfill @babel/preset-env babel-loader --save-dev
Burada @babel/cli'yi kurmadık çünkü webpack onunla iletişe geçecek
fakat iletişime geçmesi için aynı zamanda babel-loader'ı kurduk

Webpack'i kurucaz
->npm install webpack-cli webpack --save-dev

src dosyamızı oluşturduk.
app1.js, app2.js, index.js'yi oluşturduk.
İçine kodları yazdık
app1 ve app2 de class'ları oluşturup
index'te bu class'ları import yardımıyla kullandık.
Şimdi webpack.config.js'yi oluşturucaz fakat bunun ayarları uzun
olduğu için kodları kopyala yapıştır yaptık

Config dosyasını ayarladıktan sonra sırada package.json
ayarlamak var
Onun için scripts'e yeni bir öğe daha eklememiz gerekiyor.
-> "build": "webpack --watch"
Webpack --watch ifadesi, anlık olarak değiştirmeyi sağlar, dosya üzerinde oynasan bile
webpack bunu algılar ve düzenler.

Sonrasında "npm run build" ile çalıştırıyoruz.

web-pack işlemini bitirdikten sonra bundles klasörü oluştu.
bundle.js tek bir dosya haline geldi.(app1, app2, index.js)

Yeni bir html dosyası açıp bu dosyayı kullanacağız.
Console'u açıp kontrol edebilirsin.
İndex'te bir şey değiştirirsen sıkıntı olmayacak, watch olduğu için
seninle beraber o da her şeyi değiştirecek. normal bir şekilde çalışmaya devam edebilirsin.


REQUIRE MODULU
src dosyasına bir tane module1.js dosyası açıyoruz.
Oraya modülümüzü yazdıktan sonra,
index dosyasında require ile o modulü app'a eşitledik.
Sonrasında yazdırdık ve webpack'i çalıştırarak(npm run buid)
index.html'i kontrol ettik.



*/


