import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description 
 */
const DEFAULT_SEO = {
  title: "Jaehyuk | Front-End Dev",
  description: "Hi, I’m Jaehyuk Heo / passionate about using tech and data to support business operations.",
  canonical: "https://www.google.ca/",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://www.goole.ca/",
    title: "Jaehyuk Heo | Front-End Dev",
    site_name: "Jaehyuk Heo| Front-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "Jaehyuk | Front-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "Jaehyuk | Front-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "Jaehyuk | Front-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
