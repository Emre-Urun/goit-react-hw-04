import css from "./imageCard.module.css";

function ImageCard({ resimVeri, resimAc }) {
  return (
    <div className={css.card} onClick={() => resimAc(resimVeri)}>
      <img
        className={css.cardImage}
        src={resimVeri.urls.small}
        alt={resimVeri.alt_description}
      ></img>
    </div>
  );
}

export default ImageCard;
