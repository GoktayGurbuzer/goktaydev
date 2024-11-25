import React from "react";
import Experience from "./Experience";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Faq from "./Faq";
import Link from "next/link";
import Image from "next/image";
export default function Home2({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div className="overflow-hidden">
                <Image
                  width={800}
                  height={1095}
                  src="/assets/images/goktay-gurbuzer-kimdir.jpg"
                  className="w-100 wow scaleOutIn"
                  alt="Göktay Gürbüzer Full stack Web Developer"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <p className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    Hakkımda
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    Hakkımda
                  </span>
                  <span className="text-outline">Hakkımda</span>
                </p>
                <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  Merhaba! Ben Göktay, İstanbul’da yaşayan bir Tam Yığın Web Geliştiricisiyim. Web teknolojileri üzerine 2015 yılından bu yana çalışıyorum. C#, .NET Core, PHP dillerini kullandım ve Node.js, React.js, PostgreSQL gibi modern teknolojilere hakimim. Sadece web siteleri yapmakla kalmıyor, aynı zamanda mevcut sistemlerinizi kendi web uygulamalarınıza entegre ederek süreçlerinizi dijitalleştirme ve optimize etme konusunda da çözümler sunuyorum. Hem kurumsal projeler hem de bireysel çözümlerle, kullanıcı dostu ve performanslı web uygulamaları geliştiriyorum.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#services"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">hakkımda</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">hakkımda</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={'/hakkimda'}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Hakkımda{" "}
                        <span className="visually-hidden">hakkımda</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Daha Fazla Detay{" "}
                        <span className="visually-hidden">hakkımda</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Experience />
      </div>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <p className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">Hizmetlerim</span>
                <span className="text-outline-1">Hizmetlerim</span>
                <span className="text-outline">Hizmetlerim</span>
              </p>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  Fikirlerinizi dijital dünyaya taşıyorum. Web geliştirme, SEO, Google Ads ve sistem entegrasyonlarıyla işinizi büyütmek için buradayım.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Projenize Başlayalım
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Hemen
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/bold-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Projenize Başlayalım
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Hemen
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              {/* Accordion */}
              <Faq />
              {/* End Accordion */}
            </div>
          </div>
          {/* Divider */}
          <div className="page-section">
            <hr
              className={`${
                dark ? "white opacity-015" : "black"
              } black mt-0 mb-0"`}
            />
          </div>
          {/* End Divider */}
          {/* Steps */}

          <Services />
          {/* End Steps */}
        </div>
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <Portfolio />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
