import React from 'react';
import style from './SearchPanel.module.css';

const Searchbar = ({ onChange, onSubmit, value }) => {
  return (
    <div className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={style.SearchFormbutton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchForminput}
          type="text"
          placeholder="Search movies"
          name="searchQuery"
          onChange={onChange}
          value={value}
        />
      </form>
    </div>
  );
};

export default Searchbar;
