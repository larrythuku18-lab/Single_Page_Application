/* eslint-disable react/prop-types */

function SearchBar({ onSearchChange }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search projects..."
        className="search-input"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;