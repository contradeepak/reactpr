export default async function searchHackerNews(query) {
  const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(
    query
  )}`;

  const response = await fetch(url);
  const data = await response.json();

  return data; // contains .hits array
}
