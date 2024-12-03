import Link from "next/link";
import React from "react";
import Header2 from "@/components/headers/Header2";
import {boldMultipageDark} from "@/data/menu";
import Footer5 from "@/components/footers/Footer5";

export const metadata = {
  title: "Sayfa Bulunamadı | Göktay",
  description:
      "Aradığınız sayfa bulunamadı. Ancak, freelance web çözümleri, sistem entegrasyonları ve SEO hizmetleri için Göktay.dev'i ziyaret edebilirsiniz.",
  keywords: ["sayfa bulunamadı", "404", "hata", "web geliştirici", "Göktay Gürbüzer"],
  authors: [{ name: "Göktay Gürbüzer", url: "https://goktay.dev" }],
  publisher: "Göktay Gürbüzer",
  robots: {
    index: false, // 404 sayfalarının arama motorlarında dizine eklenmemesi gerekir.
    follow: true, // Sayfada bulunan bağlantıları takip edilebilir yapın.
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://goktay.dev/404",
    title: "Sayfa Bulunamadı | Göktay",
    description: "Aradığınız sayfa bulunamadı. Ancak, freelance web çözümleri, sistem entegrasyonları ve SEO hizmetleri için Göktay.dev'i ziyaret edebilirsiniz.",
  },
  alternates: {
    canonical: "https://goktay.dev/404", // 404 sayfasının kendine özgü bir canonical etiketi olmalı.
  },
};

export default function MainAboutPage1() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <>
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldMultipageDark}/>
            </nav>
            {/* End Navigation Panel */}
            <main id="main">
              {/* Home Section */}
              <section
                  className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-3.jpg)",
                }}
                id="home"
              >
                <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
                  {/* Home Section Content */}
                  <div className="home-content">
                    <div className="row">
                      <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="hs-wrap">
                          <div className="wow fadeInUp" data-wow-delay=".1s">
                            <h1 className="hs-title-12 mb-40 mb-sm-30">404</h1>
                          </div>
                          <div
                            className="mb-40 mb-sm-30 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <h2 className="section-descr mb-20">
                              Aradığınız Sayfa Bulunamadı!
                            </h2>
                          </div>
                          <div
                            className="local-scroll wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <Link
                              href={`/`}
                              className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim"
                            >
                              <i className="mi-arrow-left size-24 align-center" />
                              <span>Anasayfaya Dön</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Home Section Content */}
                </div>
              </section>
              {/* End Home Section */}
            </main>
          </>

          <footer className="footer-1 bg-dark-2 light-content">
            <Footer5/>
          </footer>
        </div>
        {" "}
      </div>
    </>
  );
}
