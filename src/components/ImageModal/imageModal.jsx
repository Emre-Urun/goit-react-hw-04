import css from "./imageModal.module.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.80)", // Çok koyu lacivert/siyah tonu (Sinematik)
    zIndex: 1200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    // React-Modal'ın varsayılan stilini tamamen eziyoruz
    position: "relative",
    inset: "auto", // Varsayılan top/left değerlerini sıfırla
    border: "none",
    padding: "0",
    backgroundColor: "transparent",
    overflow: "visible", // Taşmaları göster
    maxWidth: "fit-content", // İçerik kadar genişle
    maxHeight: "fit-content",
  },
};

Modal.setAppElement("#root");

function ImageModal({ isOpen, onClose, image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
    }
  }, [isOpen, image]);

  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Detail"
    >
      {/* Yükleniyorsa: Sadece Loader (Şeffaf)
         Yüklendiyse: Kart (Beyaz, Gölgeli, Animasyonlu)
      */}
      <div className={!isLoaded ? css.loadingState : css.modalContent}>
        {/* --- LOADER --- */}
        {!isLoaded && <PuffLoader color="#ffffff" size={100} />}

        {/* --- RESİM (Uçtan Uca) --- */}
        <div
          className={css.imageWrapper}
          style={{ display: isLoaded ? "block" : "none" }}
        >
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={css.image}
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* --- BİLGİ ALANI --- */}
        {isLoaded && (
          <div className={css.info}>
            {/* Üst Kısım: Yazar ve Beğeni */}
            <div className={css.headerRow}>
              <div className={css.userProfile}>
                <img
                  src={image.user.profile_image.medium}
                  alt={image.user.name}
                  className={css.userAvatar}
                />
                <div>
                  <p className={css.userName}>{image.user.name}</p>
                  {image.user.location && (
                    <p className={css.userLocation}>{image.user.location}</p>
                  )}
                </div>
              </div>
              <div className={css.likesBadge}>❤️ {image.likes}</div>
            </div>

            {/* Alt Kısım: Açıklama */}
            {image.description && (
              <p className={css.description}>{image.description}</p>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ImageModal;
