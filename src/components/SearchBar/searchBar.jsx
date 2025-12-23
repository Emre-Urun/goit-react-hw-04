import toast, { Toaster } from "react-hot-toast";
import css from "./searchBar.module.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      toast.error("Aramak İstediğiniz Kelimeyi Yazın");
      return;
    }
    onSubmit(search);
    setSearch("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={searchChange}
        />
        <button className={css.btn} type="submit"></button>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;
