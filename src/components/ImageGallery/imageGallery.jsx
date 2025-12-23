import ImageCard from "./ImageCard/imageCard";
import css from "./imageGallery.module.css";

function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.galleryul}>
      {items.map((item) => {
        return (
          <li className={css.galleryli} key={item.id}>
            <ImageCard resimVeri={item} resimAc={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
