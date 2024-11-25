import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";

import React from "react";

import Faq from "@/components/common/Faq";
import Contact from "@/components/homes/home-5/Contact";
import Map from "@/components/common/Map";
import {boldMultipageDark, menuItemsDark} from "@/data/menu";
import Header2 from "@/components/headers/Header2";
import Footer5 from "@/components/footers/Footer5";
export const metadata = {
  title:
    "İletişim | Göktay - Web Geliştiriciye Ulaşın",
  description:
    "Projeleriniz ve sorularınız için benimle iletişime geçin. Özel web geliştirme, sistem entegrasyonu ve dijital çözümler için birlikte çalışabiliriz.",
};
export default function MainAboutPage1Dark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldMultipageDark}/>
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                    className="page-section pb-100 pb-sm-60 bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/page-title-bg-4.jpg)",
                  }}
                >
                  <>
                    <>
                      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark"></div>
                      <div className="container position-relative pt-50">
                        {/* Section Content */}
                        <div className="text-center">
                          <div className="row">
                            {/* Page Title */}
                            <div className="col-md-8 offset-md-2">
                              <h2
                                className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                                data-wow-duration="1.2s"
                              >
                                Bana Ulaşın
                              </h2>
                              <h1 className="hs-title-1 mb-0">
                                <span
                                  className="wow charsAnimIn"
                                  data-splitting="chars"
                                >
                                  Projelerinizi hayata geçirmek için ilk adımı atın! Hedeflerinizi konuşmak ve birlikte çalışmak için hemen benimle iletişime geçin.
                                </span>
                              </h1>
                            </div>
                            {/* End Page Title */}
                          </div>
                        </div>
                        {/* End Section Content */}
                      </div>
                    </>
                  </>
                </ParallaxContainer>
              </section>
              <>
                {/* Contact Section */}
                <section
                  className="page-section bg-dark-1 light-content pt-0"
                  id="contact"
                >
                  <Contact />
                </section>
                {/* End Contact Section */}
                {/* Divider */}
                {/* <hr className="mt-0 mb-0 white" /> */}
                {/* End Divider */}
                {/* FAQ Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Decorative Waves */}

                    {/* End Decorative Waves */}
                    <div className="row position-relative">
                      <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                        <h3 className="section-title mb-30">
                          Merak Ettikleriniz ve Daha Fazlası
                        </h3>
                        <p className="text-gray mb-0">
                          Projeleriniz ve hizmetlerimiz hakkında en sık sorulan soruları aşağıda sizin için yanıtladık. Daha fazla bilgiye ihtiyacınız olursa bizimle iletişime geçmekten çekinmeyin!
                        </p>
                      </div>
                      <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                        {/* Accordion */}
                        <Faq />
                        {/* End Accordion */}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer5/>
            </footer>
          </div>
          {" "}
        </div>
      </div>
    </>
  );
}
