import Home2 from "@/components/homes/home-2";
import Image from "next/image";
import Hero from "@/components/homes/home-2/heros/Hero";
import {boldMultipageDark} from "@/data/menu";
import dynamic from "next/dynamic";
import Footer5 from "@/components/footers/Footer5";
import Header2 from "@/components/headers/Header2";
import React from "react";

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
      ssr: false, // Disable server-side rendering
    }
);

export const metadata = {
    title:
        "Full Stack Web Developer | Göktay - Freelance Web Çözümler",
    description:
        "İstanbul merkezli Full Stack Web Developer Göktay. Özel web siteleri, sistem entegrasyonları, SEO ve Google Ads çözümleriyle projelerinize değer katıyorum.",
    keywords: ["web geliştirme", "yazılım", "Göktay Gürbüzer", "portföy"],
    authors: [{ name: "Göktay Gürbüzer", url: "https://goktay.dev" }],
    publisher: "Göktay Gürbüzer",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: "https://goktay.dev",
        title: "Full Stack Web Developer | Göktay - Freelance Web Çözümler",
        description: "İstanbul merkezli Full Stack Web Developer Göktay. Özel web siteleri, sistem entegrasyonları, SEO ve Google Ads çözümleriyle projelerinize değer katıyorum.",
        images: [
            {
                url: "https://goktay.dev/72-saatte-web-sitesi-teslimati.png",
                width: 1200,
                height: 630,
                alt: "Göktay Gürbüzer'in Web Sitesi Görseli",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev",
    },
};

export default function Home2MainDemoMultiPageDark() {
  return (
      <>
        <div className="theme-bold">
          {" "}
          <div className="dark-mode">
            <div className="page bg-dark-1" id="top">
              <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
                  <Header2 links={boldMultipageDark} />
              </nav>
              <main id="main">
                  <ParallaxContainer
                      className="home-section bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
                      id="home"
                  >
                      <Image
                          src="/assets/images/full-width-images/section-bg-13.jpg"
                          alt="Full stack Web Developer & Freelance Çözümler Sunuyorum."
                          title="Full stack Web Developer & Freelance Çözümler Sunuyorum."
                          fill
                          style={{ objectFit: 'cover' }}
                          priority // LCP için kritik görsellerde öncelik verir
                      />
                      <Hero />
                  </ParallaxContainer>

                <Home2 dark />
              </main>
              <footer className="footer-1 bg-dark-2 light-content">
                <Footer5 />
              </footer>
            </div>{" "}
          </div>
        </div>
      </>
  );
}
