import css from "./App.module.css";
import { useState, useEffect } from "react";
import { istek } from "./fetchers.js";
import SearchBar from "./components/SearchBar/searchBar.jsx";
import ErrorMsj from "./components/ErrorMessage/errorMessage.jsx";
import ImageGallery from "./components/ImageGallery/imageGallery.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/loadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/imageModal.jsx";
import Loader from "./components/Loader/loader.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState(null);

  const openModal = (image) => {
    setSelectImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSearch = (topic) => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  };
  const handleMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") return;

    async function veriCek() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await istek(query, page);

        // 2. STATE GÜNCELLEME: API'den gelen toplam sayfa sayısını kaydet
        setTotalPages(data.total_pages);

        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    veriCek();
  }, [query, page]);
  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
        top: 690, // Yaklaşık 2-3 resim boyu aşağı kaydır
        behavior: "smooth",
      });
    }
  }, [images, page]); // images veya page değişince tetiklenir
  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMsj />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length === 0 && query !== "" && !isLoading && !error && (
        <p className={css.bulunamadi}>Sonuç bulunamadı...</p>
      )}

      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onLoadMore={handleMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectImage}
      />
    </div>
  );
}

export default App;
