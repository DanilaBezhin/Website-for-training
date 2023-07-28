import './search.css';

const Search = ({ searchValue, onChangeSearchValue, language }) => {
  return (
    <div className="search-box main__breadcrumbs-item-search">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="input-search"
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder={language ? 'Type to Search...' : 'Поиск...'}
      />
    </div>
  );
};

export default Search;
