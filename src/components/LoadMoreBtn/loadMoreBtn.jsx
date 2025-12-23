import css from "./loadMoreBtn.module.css";

function LoadMoreBtn({ onLoadMore }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onLoadMore} type="button">
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
