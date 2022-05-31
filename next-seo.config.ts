const title = undefined;
const titleTemplate = "Mauro Leonel Quiroga | %s";
const defaultTitle = "Mauro Leonel Quiroga | Portfolio";
const description = "Frontend-developer focused and passionate about building a more usable web";

const SEO = {
  title,
  titleTemplate,
  defaultTitle,
  description,
  canonical: "https://maurolquiroga.site",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://maurolquiroga.site",
    title,
    description,
    images: [
      {
        url: "https://maurolquiroga.site/icon.png",
        alt: title,
        width: 300,
        height: 300,
      },
    ],
  },
  twitter: {
    handle: "@maurolquiroga",
    cardType: "summary",
  },
};

export default SEO;
