import * as React from "react";
import { useDebounce } from "@uidotdev/usehooks";
import searchHackerNews from "./searchHackerNews";
import SearchResults from "./SearchResults";

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState("js");
  const [results, setResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  // Debounced value → triggers effect only after 300ms of inactivity
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Runs when user types in input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Runs when user submits form
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setSearchTerm(formData.get("search")); // update search term
    e.target.reset(); // clear input
    e.target.focus(); // focus input again
  };

  // Fetch data when debounced search term changes
  React.useEffect(() => {
    const searchHN = async () => {
      let list = [];
      setIsSearching(true); // loading...

      if (debouncedSearchTerm) {
        const data = await searchHackerNews(debouncedSearchTerm);
        list = data?.hits || [];
      }

      setIsSearching(false);
      setResults(list);
    };

    searchHN();
  }, [debouncedSearchTerm]);

  return (
    <section>
      <header>
        <h1>useDebounce</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="search"
            placeholder="Search HN"
            style={{ background: "var(--charcoal)" }}
            onChange={handleChange}
          />

          <button className="primary" disabled={isSearching} type="submit">
            {isSearching ? "..." : "Search"}
          </button>
        </form>
      </header>

      {/* Render results */}
      <SearchResults results={results} />
    </section>
  );
}
