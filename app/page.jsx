import Home2 from "@/components/homes/home-2";
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
                    style={{
                      backgroundImage:
                          "url(/assets/images/full-width-images/section-bg-13.jpg)",
                    }}
                    id="home"
                >
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
