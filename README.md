# 📸 React Image Search App

Modern, responsive (duyarlı) ve kullanıcı dostu bir görsel arama uygulaması. **React** ve **Vite** kullanılarak geliştirilmiş olup, **Unsplash API** üzerinden yüksek kaliteli görselleri listeler.

![Proje Önizlemesi](https://via.placeholder.com/1200x600?text=Proje+Ekran+Goruntusu+Buraya)
*(Buraya projenin çalışan halinin bir ekran görüntüsünü veya GIF'ini koyabilirsin)*

## 🚀 Özellikler

Bu proje, modern web geliştirme standartlarına uygun olarak aşağıdaki özellikleri içerir:

* **🔍 Görsel Arama:** Kullanıcılar anahtar kelime girerek Unsplash kütüphanesinde arama yapabilir.
* **📄 Sayfalama (Load More):** "Daha Fazla Yükle" butonu ile sonuçlar sayfalandırılır ve listeye eklenir.
* **🖼️ Detaylı Modal:** Görsele tıklandığında açılan, sinematik arka plana sahip detay penceresi (Yazar, Beğeni, Açıklama, Konum bilgileri).
* **📱 Responsive Tasarım:** CSS Grid ve Flexbox kullanılarak mobil, tablet ve masaüstü uyumlu arayüz.
* **✨ Modern UI:** Edge-to-edge modal tasarımı, hover efektleri ve yumuşak geçiş animasyonları.
* **⚠️ Hata Yönetimi:** Boş arama, sunucu hatası veya sonuç bulunamaması durumlarında kullanıcı bilgilendirme mesajları (Toast Notifications & Error Components).
* **⏳ Yükleme Durumları:** Veri çekilirken profesyonel yükleme animasyonları (React Spinners).

## 🛠️ Kullanılan Teknolojiler

* **Core:** [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
* **Styling:** CSS Modules
* **HTTP Client:** [Axios](https://axios-http.com/)
* **API:** [Unsplash API](https://unsplash.com/developers)
* **Libraries:**
    * `react-modal`: Modal pencereleri yönetimi için.
    * `react-hot-toast`: Bildirimler (Toast messages) için.
    * `react-spinners`: Yükleme animasyonları için.

## 📂 Proje Yapısı

```bash
src/
├── components/
│   ├── ErrorMessage/   # Hata mesajı bileşeni
│   ├── ImageCard/      # Tekil resim kartı
│   ├── ImageGallery/   # Resim listesi ızgarası (Grid)
│   ├── ImageModal/     # Detaylı resim penceresi
│   ├── Loader/         # Yükleniyor animasyonu
│   ├── LoadMoreBtn/    # Sayfalama butonu
│   └── SearchBar/      # Arama çubuğu (Fixed Header)
├── fetchers.js         # API isteklerinin yönetildiği dosya
├── App.jsx             # Ana uygulama mantığı
├── App.module.css      # Ana sayfa stilleri
└── main.jsx
````

## 🚀 Kurulum ve Çalıştırma
1. Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:
```bash
git@github.com:Emre-Urun/goit-react-hw-04.git
```
2.Gerekli Paketleri Yükleyin:
```bash
npm install
```
3.API Anahtarını Ayarlayın:
```bash
Unsplash Developers sitesinden bir hesap oluşturun ve bir uygulama (Application) yaratın.
Size verilen Access Key'i kopyalayın.
fetchers.js dosyasındaki ilgili alana yapıştırın.
```
4.Uygulamayı Başlatın:
```bash
npm run dev
```
5.Tarayıcıda Açın: Terminalde verilen yerel sunucu adresine `(genellikle http://localhost:5173)` gidin.

## 📸 Ekran Görüntüleri
| <img width="1917" height="990" alt="car" src="https://github.com/user-attachments/assets/a476284a-d615-452c-80bb-df4ba29fa47c" />
|<img width="1917" height="987" alt="modal" src="https://github.com/user-attachments/assets/7f1c88d6-3743-4545-9190-9788a6163b14" />

## 🤝 Katkıda Bulunma

Bu proje açık kaynaklıdır ve geliştirmeye açıktır. Herhangi bir hata fark ederseniz veya özellik eklemek isterseniz:

1. Bu repoyu Fork'layın.
  
2. Yeni bir dal (branch) oluşturun (`git checkout -b ozellik/yeni-ozellik`).

3. Değişikliklerinizi yapın ve Commit'leyin (`git commit -m 'Yeni özellik eklendi'`).

4. Dalınızı Push'layın (`git push origin ozellik/yeni-ozellik`).

5. Bir Pull Request oluşturun.

## 👨‍💻 Geliştirici

Bu proje Emre Ürün tarafından React öğrenme sürecinin bir parçası olarak geliştirilmiştir.

Eğer bu projeyi beğendiyseniz ⭐️ vermeyi unutmayın!
