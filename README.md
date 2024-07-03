# Dünya Hava Kalite Haritası

## Genel Bakış

Hava kalitesi, dünya çapında insan sağlığı ve refahı için önemli bir konudur. Hava kirliliği, solunum yolu hastalıkları, kalp hastalıkları ve kanser gibi çeşitli sağlık sorunlarına yol açabilir. Hava kalitesini izlemek ve insanları hava kirliliğinin potansiyel riskleri konusunda uyarmak önemlidir. Ülkelerin hava kalite analizi gerekli önlemler almak için gerekli bir araç olabilir. Bu bağlamda yapay zeka algoritmaları, hava kalite verilerinden model çıkarmak ve hava kalitesini analiz etmek için kullanılabilir.

Bu proje Dünya üzerinde tüm ülkelerin hava kalitesinin analiz edilerek incelendiği ve birbirleriyle olan ilişkilerinin yorumlanması, sınıflandırılmasında yapay zeka tabanlı graf yapılarının kullanılması amaçlanmaktadır.

Site "LiveServer" eklentisi kullanılarak localhost:3000 portundan çalışmaktadır.
Not: Projeyi çalıştırmak için Kullandığınız ide üzerinden "LiveServer" eklentisini kurmalısınız.

## Uygulama içi ekran görüntüleri
<img width="959" alt="Ekran görüntüsü 2024-07-03 183733" src="https://github.com/didaryilmaz/AirQuality/assets/91085429/c4d19922-070c-475f-995d-c09583ea52dd">

Hava Kalite Endeks Değerlerine Göre Girdikleri Gruplar (İyi, Orta, Hassas Gruplar İçin Sağlıksız, Sağlıksız) 

<img width="960" alt="Ekran görüntüsü 2024-07-03 183931" src="https://github.com/didaryilmaz/AirQuality/assets/91085429/e04269d7-6648-456d-baa1-287e7b0c2b29">

## Özellikler

### Detaylı Harita Görselleştirmesi:
Ülkelerin Hava Kalite Endeks değerleri detaylı olarak interaktif bir harita üzerinde gösterilir. Kullanıcılar, değerine göre ülkelerin hava kalite endeks gruplandırılmasını gözlemleyebilir.

### Graf Veri Modeli ile Görselleştirme:
Ülkelerin Hava Kalite Endeks değerlerine göre gruplandırılmasını anlamak için graf veri modeli kullanılır. Hava kalite endeks değerleri kenar yapısı ile, ülkeler ise düğüm yapısı ile görselleştirilir. Kullanıcılar, bu model sayesinde ülkelerin hava kalite endeks sıralamalarını daha iyi analiz edebilir.

## Başlangıç

#### Gereklilikler
Başlamadan önce aşağıdaki gereksinimleri karşıladığınızdan emin olun:

- Kullandığınız ide'de "Live Server" eklentisi kurulu olmalı
- Node.js (includes npm)
- Bu projeyi bilgisayarınıza klonlamalısınız.

#### Kurulum
Projeyi yüklemek ve çalıştırmak için şu adımları izleyin:

Projeyi yerele klonla:
```
git clone https://github.com/didaryilmaz/AirQuality.git
```

Proje klasörüne git:
```
cd AirQuality
```
