function SearchBar({ onSearchChange }) {
  return (
    <div className="w-full">
      <input 
        type="text" 
        placeholder="Search projects..." 
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;