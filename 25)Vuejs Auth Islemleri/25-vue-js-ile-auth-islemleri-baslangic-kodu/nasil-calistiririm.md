# vue-cli

> Vue Projesiin Projenin olduğu yere gelerek

# bağımlılıkları yüklemek için
npm install

#ardından proje klasörünün hemen içerisinde .babelrc isimli bir dosya oluşturarak aşağıdaki kodları içerisine yazmanız gerekiyor ki Store ile ilgili mapping işlemlerinde problemlerle karşılaşmayalım
{
  "presets": [
    ["env", { "modules": false }],
    "stage-3"
  ]
}


# uygulamayı çalıştırmak için
npm run dev

# projeyi production ortamına derlemek için
npm run build