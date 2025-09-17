/**
 * Books data model
 * Michael Böckler's published books with actual Rowohlt editions
 */

export const books = [
  {
    id: 1,
    title: "Tod oder Reben",
    series: "Hippolyt Hermanus",
    seriesNumber: 1,
    cover: "/images/tod-oder-reben.jpg",
    description: "Der erste Fall für Hippolyt Hermanus: Ein Toter im Weinberg - war es Mord? Der eigenwillige Kommissar ermittelt zwischen edlen Tropfen und alten Fehden in der malerischen Pfalz.",
    hugendubelUrl: "https://www.hugendubel.de/de/taschenbuch/michael_boeckler-tod_oder_reben-16842316-produkt-details.html",
    rowohltUrl: "https://www.rowohlt.de/taschenbuch/michael-boeckler-tod-oder-reben.html",
    year: 2018,
    isbn: "978-3-499-25861-9",
    publisher: "Rowohlt Taschenbuch"
  },
  {
    id: 2,
    title: "Mord in bester Lage",
    series: "Hippolyt Hermanus",
    seriesNumber: 2,
    cover: "/images/mord-in-bester-lage.jpg",
    description: "Hippolyt Hermanus' zweiter Fall: In einem renommierten Weingut wird der Gutsherr tot aufgefunden. Die Spuren führen tief in die Vergangenheit einer der ältesten Winzerfamilien.",
    hugendubelUrl: "https://www.hugendubel.de/de/taschenbuch/michael_boeckler-mord_in_bester_lage-21722601-produkt-details.html",
    rowohltUrl: "https://www.rowohlt.de/taschenbuch/michael-boeckler-mord-in-bester-lage.html",
    year: 2019,
    isbn: "978-3-499-26772-7",
    publisher: "Rowohlt Taschenbuch"
  },
  {
    id: 3,
    title: "Mörderischer Jahrgang",
    series: "Hippolyt Hermanus",
    seriesNumber: 3,
    cover: "/images/moerderischer-jahrgang.jpg",
    description: "Der dritte Fall: Ein geheimnisvoller Jahrgang, ein verschwundener Winzer und ein Mord, der die beschauliche Weinregion erschüttert. Hermanus deckt ein Netz aus Lügen auf.",
    hugendubelUrl: "https://www.hugendubel.de/de/taschenbuch/michael_boeckler-moerderischer_jahrgang-24988883-produkt-details.html",
    rowohltUrl: "https://www.rowohlt.de/taschenbuch/michael-boeckler-moerderischer-jahrgang.html",
    year: 2020,
    isbn: "978-3-499-27177-9",
    publisher: "Rowohlt Taschenbuch"
  },
  {
    id: 4,
    title: "Falscher Tropfen",
    series: "Hippolyt Hermanus",
    seriesNumber: 4,
    cover: "/images/falscher-tropfen.jpg",
    description: "Hippolyt Hermanus' vierter Fall: Ein gefälschter Jahrhundertwein, ein toter Sommelier und ein Skandal, der die Weinwelt erschüttert. Der Kommissar ermittelt in höchsten Kreisen.",
    hugendubelUrl: "https://www.hugendubel.de/de/taschenbuch/michael_boeckler-falscher_tropfen-30870694-produkt-details.html",
    rowohltUrl: "https://www.rowohlt.de/taschenbuch/michael-boeckler-falscher-tropfen.html",
    year: 2021,
    isbn: "978-3-499-27349-0",
    publisher: "Rowohlt Taschenbuch"
  },
  {
    id: 5,
    title: "Tödlich im Abgang",
    series: "Hippolyt Hermanus",
    seriesNumber: 5,
    cover: "/images/toedlich-im-abgang.jpg",
    description: "Der fünfte Fall: Bei einer exklusiven Weinprobe stirbt ein Kritiker - Gift im Glas? Hippolyt Hermanus ermittelt zwischen Rache, Neid und einer dunklen Familiengeschichte.",
    hugendubelUrl: "https://www.hugendubel.de/de/taschenbuch/michael_boeckler-toedlich_im_abgang-38283250-produkt-details.html",
    rowohltUrl: "https://www.rowohlt.de/taschenbuch/michael-boeckler-toedlich-im-abgang.html",
    year: 2022,
    isbn: "978-3-499-27350-6",
    publisher: "Rowohlt Taschenbuch"
  }
];

export function getBookById(id) {
  return books.find(book => book.id === parseInt(id, 10));
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