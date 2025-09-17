/**
 * Books data model
 * Placeholder data for Michael Böckler's books
 */

export const books = [
  {
    id: 1,
    title: "Tod im Weinberg",
    series: "Hippolyt Hermanus",
    seriesNumber: 1,
    cover: "/assets/images/tod-im-weinberg.jpg",
    description: "Ein mysteriöser Todesfall erschüttert die idyllische Weinregion. Kommissar Hippolyt Hermanus ermittelt zwischen jahrhundertealten Reben und modernen Verbrechen.",
    hugendubelUrl: "https://www.hugendubel.de/de/buch_gebunden/michael_boeckler-tod_im_weinberg-123456789",
    year: 2023,
    isbn: "978-3-123456-78-9"
  },
  {
    id: 2,
    title: "Schatten über dem Kloster",
    series: "Hippolyt Hermanus",
    seriesNumber: 2,
    cover: "/assets/images/schatten-kloster.jpg",
    description: "Als im altehrwürdigen Kloster Sankt Bonifatius ein Mönch unter mysteriösen Umständen stirbt, führen Hermanus' Ermittlungen tief in die Vergangenheit.",
    hugendubelUrl: "https://www.hugendubel.de/de/buch_gebunden/michael_boeckler-schatten_kloster-234567890",
    year: 2024,
    isbn: "978-3-234567-89-0"
  },
  {
    id: 3,
    title: "Das Geheimnis der alten Mühle",
    series: "Hippolyt Hermanus",
    seriesNumber: 3,
    cover: "/assets/images/alte-muehle.jpg",
    description: "Eine verlassene Mühle, ein verschwundenes Gemälde und ein Mord, der Jahrzehnte zurückliegt. Hippolyt Hermanus' bisher komplexester Fall.",
    hugendubelUrl: "https://www.hugendubel.de/de/buch_gebunden/michael_boeckler-alte_muehle-345678901",
    year: 2025,
    isbn: "978-3-345678-90-1"
  }
];

export function getBookById(id) {
  return books.find(book => book.id === parseInt(id));
}

export function getBooksBySeries(seriesName) {
  return books.filter(book => book.series === seriesName);
}

export function getLatestBook() {
  return books.reduce((latest, book) =>
    book.year > latest.year ? book : latest
  );
}

export function addAffiliateId(url, affiliateId) {
  if (!affiliateId) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}partner=${affiliateId}`;
}