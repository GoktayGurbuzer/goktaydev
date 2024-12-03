import AnimatedText from "@/components/common/AnimatedText";
import Header2 from "@/components/headers/Header2";
import Experience from "@/components/homes/home-2/Experience";
import { education } from "@/data/education";
import { numberData } from "@/data/facts";

import { boldMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer5 from "@/components/footers/Footer5";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

export const metadata = {
  title:
      "Hakkımda | Göktay - Tam Yığın Web Geliştirici",
  description:
      "Ben Göktay, İstanbul’da yaşayan bir Tam Yığın Web Geliştiricisiyim. Modern teknolojilerle özelleştirilmiş web çözümleri sunuyor, projeleriniz için yaratıcı ve performans odaklı çözümler üretiyorum.",
  keywords: ["Göktay Gürbüzer", "hakkımda", "yazılım kariyeri", "web geliştirme", "portföy"],
  authors: [{ name: "Göktay Gürbüzer", url: "https://goktay.dev" }],
  publisher: "Göktay Gürbüzer",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    locale: "tr_TR",
    url: "https://goktay.dev/hakkimda",
    title: "Göktay Gürbüzer - Hakkımda",
    description: "Yazılım geliştirici Göktay Gürbüzer'in kariyeri, projeleri ve hedefleri hakkında bilgi alın.",
    images: [
      {
        url: "https://goktay.dev/72-saatte-web-sitesi-teslimati.png",
        width: 1200,
        height: 630,
        alt: "Göktay Gürbüzer Hakkında",
      },
    ],
  },
  alternates: {
    canonical: "https://goktay.dev/hakkimda",
  },
};

const onePage = false;
const dark = true;
export default function BoldAboutPageDark() {
  return (
    <>
      <div className="theme-bold">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                  className="page-section bg-dark-alpha-60 light-content parallax-5"
                  style={{
                    backgroundImage:
                        "url(/assets/images/full-width-images/section-bg-13.jpg)",
                  }}
                  id="home"
              >
                <div className="container position-relative pt-sm-40">
                  <div className="text-center">
                    <h1 className="hidden">Freelance Web Geliştirici Göktay Gürbüzer</h1>
                    <span className="hs-title-4 font-alt mb-0">
                      <span
                          className="wow charsAnimInLong-1"
                          data-splitting="chars"
                      >
                        <AnimatedText text="Merhaba, Ben Göktay"/>
                      </span>
                    </span>
                  </div>
                </div>
              </ParallaxContainer>
              <section
                  className={`page-section  bg-dark-1 light-content scrollSpysection  pb-0 ${
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
                            src="/assets/images/google-partner-goktay-gurbuzer.jpg"
                            className="w-100 wow scaleOutIn"
                            alt="Google Partner Göktay Gürbüzer"
                            title="Google Partner Göktay Gürbüzer"
                        />
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
                      <div className="wow fadeInUp">
                        <span className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                          <span className="text-outline-2" aria-hidden="true">
                            Benim Hikayem
                          </span>
                          <span className="text-outline-1" aria-hidden="true">
                            Benim Hikayem
                          </span>
                          <span className="text-outline">Benim Hikayem</span>
                        </span>
                        <p className="section-text mb-60 mb-md-40 mb-sm-30">
                          2014 yılında web dünyasına adım attım. İlk olarak PHP ile başladığım bu serüvende, zamanla
                          yazılım geliştirme alanında kendimi geliştirerek daha karmaşık ve etkileyici projeler üretmeye
                          odaklandım. Yıllar içinde, basit web sitelerinden karmaşık sistemlere doğru bir yolculuk
                          yaptım. Şu anda C#, .NET Core ve Node.js gibi modern teknolojilerle çalışarak güçlü ve
                          performans odaklı yapılar inşa ediyorum.
                        </p>
                        <p className="section-text mb-60 mb-md-40 mb-sm-30">
                          Her geçen gün öğrendiğim yeni teknolojilerle projelerimi bir adım öteye taşımak için
                          çalışıyor, yazılımın sınırlarını zorlamaktan keyif alıyorum.
                        </p>
                        <div className="local-scroll">
                          <Link
                              href="/hizmetlerim"
                              className="link-hover-anim underline align-middle"
                              data-link-animate="y"
                          >
                            <span className="link-strong link-strong-unhovered">
                              Hizmetlerimi Gör{" "}
                              <span className="visually-hidden">hizmetlerimi gör</span>
                            </span>
                            <span
                                className="link-strong link-strong-hovered"
                                aria-hidden="true"
                            >
                              Hizmetlerimi Gör{" "}
                              <span className="visually-hidden">hizmetlerimi gör</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="page-section overflow-hidden">
                <Experience/>
              </div>
              <>
                {/* Experience Section */}
                <section className="page-section  bg-dark-1 light-content pt-0">
                  <div className="container">
                    <span className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                      <span className="text-outline-2">Teknik Becerilerim</span>
                      <span className="text-outline-1">Teknik Becerilerim</span>
                      <span className="text-outline">Teknik Becerilerim</span>
                    </span>
                    <hr className="mt-0 mb-30"/>
                    <div className="row">
                      <div className="col-md-12 mb-sm-20">
                        <p className="section-title-inline rotate-5">PHP</p>
                        <p className="section-title-inline rotate-5">C# (.Net Core 8.0 )</p>
                        <p className="section-title-inline rotate-5">Node.JS</p>
                        <p className="section-title-inline rotate-5">HTML 5</p>
                        <p className="section-title-inline rotate-5">Native CSS</p>
                        <p className="section-title-inline rotate-5">JavaScript</p>
                        <p className="section-title-inline rotate-5">React.JS</p>
                        <p className="section-title-inline rotate-5">Next.JS</p>
                        <p className="section-title-inline rotate-5">MSSQL</p>
                        <p className="section-title-inline rotate-5">MYSQL</p>
                        <p className="section-title-inline rotate-5">PostgreSQL</p>
                        <p className="section-title-inline rotate-5">SQLite</p>
                        <p className="section-title-inline rotate-5">Bootstrap 5</p>
                        <p className="section-title-inline rotate-5">TailwindCSS</p>
                        <p className="section-title-inline rotate-5">Microsoft Server 2019</p>
                        <p className="section-title-inline rotate-5">Linux (Alma Linux)</p>
                        <p className="section-title-inline rotate-5">Figma</p>
                        <p className="section-title-inline rotate-5">Adobe Ürünleri</p>
                      </div>
                    </div>

                    <hr className="mt-40 mb-40"/>
                  </div>
                </section>
                {/* End Experience Section */}
                {/* Divider */}
                <hr className="black mt-0 mb-0"/>

                <section className="page-section bg-dark-1 light-content pt-0 mt-0">
                  <div className="container">
                    <span className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                      <span className="text-outline-2">Deneyim</span>
                      <span className="text-outline-1">Deneyim</span>
                      <span className="text-outline">Deneyim</span>
                    </span>
                    <hr className="mt-0 mb-40"/>
                    <div className="row">
                      <div className="col-md-3 mb-sm-20">
                        <span className="section-title-inline rotate-5">
                          2019 - Devam Ediyor
                        </span>
                      </div>
                      <div className="col-md-8 offset-md-1">
                        <h2 className="section-title-small mb-20">
                          Kam Yazılım (Full Stack Developer)
                        </h2>
                        <p className="mb-0">
                          Kam Yazılım’da Full Stack Developer olarak çalıştığım süre boyunca, müşterilerin talepleri
                          doğrultusunda çeşitli platformlar için uçtan uca yazılım çözümleri geliştirdim. Geliştirdiğim
                          projelerde hem backend hem de frontend tarafında aktif rol alarak şu konularda çalışmalar
                          gerçekleştirdim:
                        </p>
                        <ol>
                          <li><strong>Backend Geliştirme:</strong> API’ler, veri tabanları ve sunucu tarafı
                            işlemlerini oluşturma ve optimize etme.
                          </li>
                          <li><strong>Frontend Geliştirme:</strong> Kullanıcı dostu, performanslı ve görsel olarak
                            etkili kullanıcı arayüzleri tasarlama ve geliştirme.
                          </li>
                          <li><strong>Platform Entegrasyonu:</strong> Web, mobil ve masaüstü platformlar için
                            uygulamalar geliştirerek, bu platformların birbiriyle entegrasyonunu sağlama.
                          </li>
                          <li><strong>Platform Entegrasyonu:</strong> Uygulamaların performansını izleyip optimize
                            etme, güvenlik açıklarını değerlendirme ve gerekli önlemleri alma.
                          </li>
                          <li><strong>Hata Yönetimi ve Bakım:</strong> Sistemdeki hataları tanımlayıp gidermek,
                            düzenli bakım yapmak ve yazılımların sorunsuz çalışmasını sağlamak.
                          </li>
                          <li><strong>Kodlama Standartları:</strong> Kodlama standartlarına ve şirket politikalarına
                            uygun şekilde yazılım geliştirme.
                          </li>
                          <li><strong>Dokümantasyon:</strong> Tüm süreçleri dokümante ederek, gerektiğinde teknik
                            belgeler oluşturma.
                          </li>
                        </ol>
                      </div>
                    </div>

                    <hr className="white mt-10 mb-30"/>

                    <div className="row">
                      <div className="col-md-3 mb-sm-20">
                        <span className="section-title-inline rotate-5">
                          2015 - 2018
                        </span>
                      </div>
                      <div className="col-md-8 offset-md-1">
                        <h2 className="section-title-small mb-20">
                          Renkli Sipariş (Yazılım Uzmanı)
                        </h2>
                        <p className="mb-0">
                          Renkli Sipariş bünyesinde Yazılım Uzmanı olarak çalıştığım süre boyunca, firmanın dijital
                          dünyadaki varlığını güçlendirmek ve ihtiyaçlarına uygun çözümler geliştirmek için aktif rol
                          aldım. Bu süreçte gerçekleştirdiğim görevler şunlardı:
                        </p>
                        <ol>
                          <li><strong>Web Tasarımı:</strong> Firmanın web sitesinin tasarımını gerçekleştirerek,
                            kullanıcı dostu ve görsel olarak etkileyici bir platform oluşturmak.
                          </li>
                          <li><strong>Yazılım Geliştirme:</strong> Firmanın ürün ve hizmetlerine yönelik özel yazılımlar
                            geliştirerek, bu yazılımların iş süreçlerine entegre edilmesini sağlamak.
                          </li>
                          <li><strong>Yazılım Güncelleme ve Optimizasyon: </strong> Mevcut sistemlerin güncellenmesi ve
                            performans odaklı iyileştirmeler yapılması.
                          </li>
                        </ol>
                      </div>
                    </div>

                    <hr className="white mt-10 mb-30"/>

                    <div className="row">
                      <div className="col-md-3 mb-sm-20">
                        <span className="section-title-inline rotate-5">
                          2013 - 2015
                        </span>
                      </div>
                      <div className="col-md-8 offset-md-1">
                        <h2 className="section-title-small mb-20">
                          Konsis Endüstriyel (Yazılım Uzmanı)
                        </h2>
                        <p className="mb-0">
                          Konsis Endüstriyel’de Yazılım Uzmanı olarak çalıştığım süre boyunca, müşterilerin
                          ihtiyaçlarına yönelik web çözümleri geliştirdim ve yazılım altyapılarını oluşturdum. Bu
                          süreçte üstlendiğim görevler şunlardı:
                        </p>
                        <ol>
                          <li><strong>Web Tasarımı:</strong> Hizmet verilen müşterilerin talepleri doğrultusunda web
                            site dizaynlarını oluşturmak ve bu tasarımları işlevsel hale getirmek.
                          </li>
                          <li><strong>Yazılım Altyapısı Geliştirme:</strong> Müşteri ihtiyaçlarına uygun yazılım
                            altyapılarını geliştirmek ve bu altyapıların sorunsuz bir şekilde entegre edilmesini
                            sağlamak.
                          </li>
                        </ol>
                      </div>
                    </div>

                    <hr className="white mt-10 mb-30"/>

                    <div className="row">
                      <div className="col-md-3 mb-sm-20">
                        <span className="section-title-inline rotate-5">
                          2009 - 2012
                        </span>
                      </div>
                      <div className="col-md-8 offset-md-1">
                        <h2 className="section-title-small mb-20">
                          Muğla Dizayn (Firma Sahibi)
                        </h2>
                        <p className="mb-0">
                          Muğla Dizayn bünyesinde kendi işimi yürütürken, müşterilerin ihtiyaçlarına yönelik çözümler sunarak firma web sitelerinin düzenlenmesi ve yayına alınması süreçlerini yönettim. Bu süreçte gerçekleştirdiğim temel çalışmalar şunlardı:
                        </p>
                        <ol>
                          <li><strong>Web Site Düzenleme:</strong> Müşterilerden gelen talepler doğrultusunda firma web sitelerinin düzenlenmesini sağlamak.
                          </li>
                          <li><strong>Yayın Süreç Yönetimi:</strong> Web sitelerini sorunsuz bir şekilde yayına alarak, müşterilerin dijital dünyadaki varlıklarını oluşturmak ve güçlendirmek.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                </section>
                <hr className="black mt-0 mb-0"/>
                <section className="page-section  bg-dark-1 light-content">
                  <div className="container">
                    <span className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                      <span className="text-outline-2">Eğitim</span>
                      <span className="text-outline-1">Eğitim</span>
                      <span className="text-outline">Eğitim</span>
                    </span>
                    {education.map((item, index) => (
                        <React.Fragment key={index}>
                          <hr
                              className={index === 0 ? "mt-0 mb-40" : "mt-40 mb-40"}
                          />
                          <div className="row">
                            <div className="col-md-3 mb-sm-20">
                              <span className="section-title-inline rotate-5">
                                {item.year}
                              </span>
                            </div>
                            <div className="col-md-8 offset-md-1">
                              <h3 className="section-title-small mb-0">
                                {item.title}
                              </h3>
                              <div className="mb-20 text-gray serif fs-5">
                              {item.institution}
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                    ))}
                    {/* End Timeline Row */}
                    <hr className="mt-40 mb-0"/>
                  </div>
                </section>
                <section
                    className="page-section bg-dark-alpha-90 light-content parallax-5"
                    style={{
                      backgroundImage:
                          "url(/assets/images/demo-slick/section-bg-1.jpg)",
                    }}
                >
                  <div className="container position-relative">
                    {/* Numbers Grid */}
                    <div className="row mt-n30 wow fadeInUp">
                      {/* Numbers Item */}
                      {numberData.map((item, index) => (
                          <div
                              key={index}
                              className="col-sm-6 col-xl-3 d-flex align-items-stretch mt-30"
                          >
                            <div className="number-2-item circle-large">
                              <div className="number-2-title">{item.title}</div>
                              <div className="number-2-descr">
                                {item.description}
                              </div>
                            </div>
                          </div>
                      ))}
                      {/* End Numbers Item */}
                    </div>
                    {/* End Numbers Grid */}
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
      {" "}
    </>
  );
}
