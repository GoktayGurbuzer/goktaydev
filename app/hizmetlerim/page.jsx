import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const dark = true;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import Service2 from "@/components/homes/home-1/Service2";
import { features5 } from "@/data/features";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import {boldMultipageDark, menuItemsDark} from "@/data/menu";
import Footer5 from "@/components/footers/Footer5";
import React from "react";
import Header2 from "@/components/headers/Header2";

export const metadata = {
  title:
      "Hizmetlerim | Göktay - Profesyonel Web Geliştirme ve Dijital Çözümler",
  description:
      "Web sitesi geliştirme, sistem entegrasyonu, SEO ve Google Ads çözümleriyle işinizi dijital dünyada büyütüyorum. Profesyonel ve performans odaklı hizmetlerimle yanınızdayım.",
  keywords: ["web geliştirme", "yazılım hizmetleri", "SEO optimizasyonu", "Göktay Gürbüzer", "hizmetler"],
  authors: [{ name: "Göktay Gürbüzer", url: "https://goktay.dev" }],
  publisher: "Göktay Gürbüzer",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://goktay.dev/hizmetlerim",
    title: "Göktay Gürbüzer - Hizmetlerim",
    description:
        "Web geliştirme, yazılım çözümleri ve SEO optimizasyonu gibi hizmetlerle projelerinizi başarıya taşıyın.",
    images: [
      {
        url: "https://goktay.dev/72-saatte-web-sitesi-teslimati.png",
        width: 1200,
        height: 630,
        alt: "Göktay Gürbüzer - Hizmetler",
      },
    ],
  },
  alternates: {
    canonical: "https://goktay.dev/hizmetlerim",
  },
};

export default function MainServicesPage2Dark() {
  return (
      <>
        <div className="theme-main">
          <div className="dark-mode">
            <div className="page bg-dark-1" id="top">
              <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
                <Header2 links={boldMultipageDark}/>
              </nav>
              <main id="main">
                <>
                  <ParallaxContainer
                      className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                      style={{
                        backgroundImage:
                            "url(/assets/images/full-width-images/section-bg-2.jpg)",
                      }}
                  >
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <h1 className="hs-title-1 mb-30">
                            <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                            >
                              Yaratıcı ve Etkili Dijital Çözümler Sunuyorum.
                            </span>
                            </h1>
                            <div className="row">
                              <div className="col-lg-10 offset-lg-1">
                                <p
                                    className="section-descr mb-0 wow fadeInUp"
                                    data-wow-delay="0.6s"
                                    data-wow-duration="1.2s"
                                >
                                  Dijital dünyada işinizi bir adım öteye taşımak için modern teknolojiler, yaratıcı
                                  tasarımlar ve performans odaklı çözümler sunuyorum.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </ParallaxContainer>
                  {/* End Header Section */}
                  {/* Marquee Section */}
                  <div className="page-section overflow-hidden pt-0 pb-0">
                    {/* Marquee Text Line */}
                    <div className="marquee marquee-style-2 no-rotate bg-dark-2">
                      <div className="marquee-track marquee-animation-1">
                        <div>10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                        <div aria-hidden="true">10 Yıllık Deneyİm</div>
                      </div>
                    </div>
                    {/* End Marquee Text Line */}
                  </div>
                  <section
                      className={`page-section  scrollSpysection  ${
                          dark ? "bg-dark-1 light-content" : ""
                      }`}
                      id="services"
                  >
                    {" "}
                    <Service2/>
                  </section>
                  <hr className="mt-0 mb-0 white"/>
                  <section className="page-section bg-dark-1 light-content">
                    <div className="container position-relative">
                      <div className="row mb-50 mb-sm-50">
                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
                          <h2 className="section-title-small mb-20">
                            Neden Beni Seçmelisiniz?
                          </h2>
                          <p className="text-gray mb-0">
                            İhtiyaçlarınıza özel çözümler üreten, teknolojiyi yaratıcı fikirlerle birleştiren ve işinizi
                            dijitalde büyütmek için performans odaklı çalışan bir geliştirici olarak yanınızdayım.
                            Kaliteli işçilik, detaylara gösterdiğim özen ve modern çözümlerle projelerinize değer
                            katmayı
                            hedefliyorum.
                          </p>
                        </div>
                      </div>
                      {/* Features Grid */}
                      <div className="row mt-n30 wow fadeInUp">
                        {/* Feature Item */}
                        {features5.map((elm, i) => (
                            <div
                                key={i}
                                className="col-sm-6 col-xl-3 d-flex align-items-stretch"
                            >
                              <div className="alt-features-item box-shadow text-center mt-30">
                                <div className="alt-features-icon mb-10 ">
                                  <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      aria-hidden="true"
                                      focusable="false"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                  >
                                    <path d={elm.svgPath}/>
                                  </svg>
                                </div>
                                <h3 className="alt-features-title">{elm.title}</h3>
                                <div className="alt-features-descr">
                                  {elm.description}
                                </div>
                              </div>
                            </div>
                        ))}
                        {/* End Feature Item */}

                        {/* End Feature Item */}
                      </div>
                      {/* End Features Grid */}
                    </div>
                  </section>
                  <section
                      className="page-section bg-dark-1 bg-dark-alpha-90 light-content bg-scroll pb-0 mb-100 mb-md-70 mb-sm-50 z-index-1"
                      style={{
                        backgroundImage:
                            "url(/assets/images/full-width-images/section-bg-9.jpg)",
                      }}
                  >
                    <div className="container position-relative">
                      <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                          <h2 className="section-caption mb-xs-10">Projeye Katılan Değer</h2>
                          <h3 className="section-title mb-60 mb-sm-50">
                          <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                          >
                            <AnimatedText text="Her projeye kalite, hız ve yenilik katıyorum."/>
                          </span>
                          </h3>
                          <div className="overflow-hidden mb-n100 mb-md-n70 mb-sm-n50">
                            <Image
                                src="/assets/images/about-image-2.jpg"
                                className="wow scaleOutIn"
                                width={1200}
                                height={675}
                                data-wow-offset={0}
                                alt="Image Description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`}/>
                  <section
                      className={`page-section  ${
                          dark ? "bg-dark-1 light-content z-index-1" : ""
                      }`}
                  >
                    <div className="container position-relative">
                      {/* Decorative Waves */}
                      <div
                          className="decoration-21 d-none d-lg-block"
                          data-rellax-y
                          data-rellax-speed="0.7"
                          data-rellax-percentage="0.5"
                      >
                        <Image
                            width={148}
                            height={148}
                            className="svg-shape"
                            src="/assets/images/decoration-3.svg"
                            alt=""
                        />
                      </div>
                      {/* End Decorative Waves */}
                      <div className="row text-center wow fadeInUp">
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                          <p className="section-descr mb-50 mb-sm-30">
                            Hedeflerinizi dijital dünyada gerçeğe dönüştürelim!
                          </p>
                          <div className="local-scroll">
                            <Link
                                href="/iletisim"
                                className="btn btn-w btn-mod btn-large btn-round btn-hover-anim"
                            >
                              <span>Benimle Çalışmaya Başla</span>
                            </Link>
                          </div>
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
          </div>
        </div>
      </>
  );
}
