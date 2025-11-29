export default function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results found.</p>;
  }

  return (
    <ul style={{ marginTop: "20px" }}>
      {results.map((item) => (
        <li key={item.objectID} style={{ marginBottom: "10px" }}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "skyblue" }}
          >
            {item.title || "Untitled"}
          </a>
        </li>
      ))}
    </ul>
  );
}
