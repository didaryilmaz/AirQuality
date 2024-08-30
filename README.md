# Dünya Hava Kalite Haritası

[English](#english) | [Türkçe](#türkçe)

## Türkçe

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
Ülkelerin Hava Kalite Endeks değerlerine göre gruplandırılmasını anlamak için graf modeli kullanılır. Hava kalite endeks değerleri kenar yapısı ile, ülkeler ise düğüm yapısı ile görselleştirilir. Kullanıcılar, bu model sayesinde ülkelerin hava kalite endeks sıralamalarını daha iyi analiz edebilir.

## Başlangıç

#### Gereklilikler
Başlamadan önce aşağıdaki gereksinimleri karşıladığınızdan emin olun:

- Kullandığınız ide'de "Live Server" eklentisi kurulu olmalı
- Node.js (includes npm)
- Bu projeyi bilgisayarınıza klonlamalısınız.

#### Kurulum
Projeyi yüklemek ve çalıştırmak için şu adımları izleyin:

Bağımlılıkları yükleyin:
```
npm start
```
Uygulamayı geliştirme modunda çalıştırır. Tarayıcınızda görüntülemek için http://localhost:3000 adresini
açın .

Değişiklik yaptığınızda sayfa yeniden yüklenecektir.
Konsolda herhangi bir lint hatası da görebilirsiniz.

Projeyi yerele klonla:
```
git clone https://github.com/didaryilmaz/AirQuality.git
```

Proje klasörüne git:
```
cd AirQuality
```

## English

## Overview

Air quality is a critical issue for human health and well-being worldwide. Air pollution can lead to various health problems such as respiratory diseases, heart conditions, and cancer. Monitoring air quality and warning people about the potential risks of air pollution is essential. Analyzing air quality in different countries can be a vital tool for taking necessary precautions. In this context, artificial intelligence algorithms can be used to model air quality data and analyze air quality.

This project aims to analyze the air quality of all countries globally, using AI-based graph structures to interpret and classify their relationships with each other.

The site runs on localhost:3000 using the "Live Server" extension.
Note: To run the project, you need to install the "Live Server" extension through your IDE.

## Application Screenshots
<img width="959" alt="Screenshot 2024-07-03 183733" src="https://github.com/didaryilmaz/AirQuality/assets/91085429/c4d19922-070c-475f-995d-c09583ea52dd">

Groups According to Air Quality Index Values (Good, Moderate, Unhealthy for Sensitive Groups, Unhealthy)

<img width="960" alt="Screenshot 2024-07-03 183931" src="https://github.com/didaryilmaz/AirQuality/assets/91085429/e04269d7-6648-456d-baa1-287e7b0c2b29">

## Features

### Detailed Map Visualization:
The Air Quality Index (AQI) values of countries are displayed interactively on a detailed map. Users can observe the grouping of countries' AQI values based on their levels.

### Visualization with Graph Data Model:
A graph model is used to understand the grouping of countries according to their AQI values. AQI values are visualized as edges, and countries are represented as nodes. Through this model, users can better analyze the ranking of countries by their AQI levels.

## Getting Started

### Prerequisites
Before you begin, ensure you meet the following requirements:

- "Live Server" extension should be installed in your IDE.
- Node.js (includes npm).
- You should clone this project to your computer.

### Installation
To install and run the project, follow these steps:

Install dependencies:
```
npm start
```
This runs the app in development mode. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

Clone the project locally:
```
git clone https://github.com/didaryilmaz/AirQuality.git
```

Navigate to the project directory:
```
cd AirQuality
```
