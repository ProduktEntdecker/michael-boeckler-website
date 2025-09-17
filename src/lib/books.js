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
  },
  // Frühere Werke (Droemer Knaur Verlag)
  {
    id: 6,
    title: "Vino Criminale",
    series: "Hippolyt Hermanus (Original)",
    seriesNumber: 1,
    cover: "/images/vino-criminale.jpg",
    description: "Der Beginn der Hippolyt Hermanus Serie: Ein Weinkenner und ehemaliger Polizeipsychologe muss in Turin einem Mordfall nachgehen und gleichzeitig eine junge Frau vor einem unbekannten Täter schützen.",
    amazonUrl: "https://www.amazon.de/Vino-Criminale-kulinarischer-Hippolyt-Hermanus/dp/3426501007",
    year: 2008,
    isbn: "978-3-426-50100-9",
    publisher: "Knaur TB"
  },
  {
    id: 7,
    title: "Mord mit drei Sternen",
    series: "Hippolyt Hermanus (Original)",
    seriesNumber: 2,
    cover: "/images/mord-mit-drei-sternen.jpg",
    description: "Hippolyt Hermanus' zweiter Fall: In einem Drei-Sterne-Restaurant stirbt ein Gast - und der Kommissar ermittelt zwischen Haute Cuisine und tödlichen Geheimnissen.",
    amazonUrl: "https://www.amazon.de/Mord-mit-drei-Sternen-kulinarischer/dp/3426198355",
    year: 2009,
    isbn: "978-3-426-19835-5",
    publisher: "Knaur"
  },
  {
    id: 8,
    title: "Tödlicher Tartufo",
    series: "Hippolyt Hermanus (Original)",
    seriesNumber: 3,
    cover: "/images/tödlicher_tartufo.jpg",
    description: "Ein weiterer kulinarischer Kriminalfall: Zwischen Trüffeln und italienischen Delikatessen lauert der Tod.",
    amazonUrl: "https://www.amazon.de/Tödlicher-Tartufo-Michael-Böckler/dp/3426638452",
    year: 2010,
    isbn: "978-3-426-63845-2",
    publisher: "Knaur"
  },
  {
    id: 9,
    title: "Sturm über Mallorca",
    series: "Standalone",
    cover: "/images/sturm-über-mallorca.jpg",
    description: "Michael Böcklers Debütroman: Ein Finanzbetrüger auf der Flucht, ein hartnäckiger Privatdetektiv und die schönsten Seiten Mallorcas - Krimi und Reiseführer in einem.",
    amazonUrl: "https://www.amazon.de/Sturm-über-Mallorca-Michael-Böckler/dp/3426614758",
    year: 1997,
    isbn: "978-3-426-61475-8",
    publisher: "Knaur"
  },
  {
    id: 10,
    title: "Wer stirbt schon gerne in Italien?",
    series: "Standalone",
    cover: "/images/wer-stirbt-schon-gerne-in-italien.jpg",
    description: "Ein mörderischer Roadtrip durch Italien: Zwischen Kunst, Kulinarik und Verbrechen entwickelt sich eine tödliche Jagd.",
    amazonUrl: "https://www.amazon.de/stirbt-schon-gerne-Italien-Roman/dp/3426606941",
    year: 1999,
    isbn: "978-3-426-60694-1",
    publisher: "Knaur"
  },
  {
    id: 11,
    title: "Verdi hören und sterben",
    series: "Standalone",
    cover: "/images/verdi-sehen-und-sterben.jpg",
    description: "Eine alte Dame stürzt in den Tod, während Verdi erklingt. Ihr Enkel erbt ein Vermögen und eine Villa am Gardasee - doch jemand trachtet auch ihm nach dem Leben.",
    amazonUrl: "https://www.amazon.de/Verdi-hören-sterben-Michael-Böckler/dp/342662138X",
    year: 2002,
    isbn: "978-3-426-62138-7",
    publisher: "Knaur"
  },
  {
    id: 12,
    title: "Nach dem Tod lebt es sich besser",
    series: "Standalone",
    cover: "/images/nach-dem-tod-lebt-es-sich-besser.jpg",
    description: "Die Fortsetzung von 'Sturm über Mallorca': Alte Bekannte treffen sich wieder auf der Sonneninsel, wo neue Verwicklungen und Gefahren lauern.",
    amazonUrl: "https://www.amazon.de/Nach-lebt-sich-besser-Mallorca-Roman/dp/342619595X",
    year: 2002,
    isbn: "978-3-426-19595-8",
    publisher: "Knaur"
  },
  {
    id: 13,
    title: "Sterben wie Gott in Frankreich",
    series: "Standalone",
    cover: "/images/sterben-wie-gott-in-frankreich.jpg",
    description: "Ein kulinarischer Krimi aus Frankreich: Zwischen erstklassigen Weinen und exquisiter Küche lauert das Verderben.",
    amazonUrl: "https://www.amazon.de/Sterben-wie-Gott-Frankreich-Roman/dp/3426633906",
    year: 2004,
    isbn: "978-3-426-63390-7",
    publisher: "Knaur"
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
  return `${url}${separator}partner=${encodeURIComponent(affiliateId)}`;
}