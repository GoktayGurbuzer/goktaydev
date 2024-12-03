import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
      ssr: false, // Disable server-side rendering
    }
);
import { allPortfolios } from "@/data/portfolio";
import AnimatedText from "@/components/common/AnimatedText";

import {boldMultipageDark, menuItemsDark} from "@/data/menu";
import RelatedProject10 from "@/components/portfolio/relatedProjects/RelatedProject10";
import Footer5 from "@/components/footers/Footer5";
import Header2 from "@/components/headers/Header2";
import React from "react";

export async function generateMetadata({ params }) {
  const project = allPortfolios.find((elm) => elm.id == params.id) || allPortfolios[0];

  return {
    title: `${project.title} | Göktay - Tam Yığın Web Geliştirici`,
    description: project.description,
    keywords: ["Göktay Gürbüzer", "iletişim", "yazılım desteği", "web geliştirme", "freelance yazılım"],
    authors: [{ name: "Göktay Gürbüzer", url: "https://goktay.dev" }],
    publisher: "Göktay Gürbüzer",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      title: `${project.title} | Göktay - Tam Yığın Web Geliştirici`,
      description: `Bu proje için ${project.client} ile çalışarak ${project.services} teknolojilerini kullanarak geliştirme yaptım. Projenin detayları: ${project.projectDescription}`,
      url: `https://goktay.dev/referanslarim/${project.id}`,
      images: [
        {
          url: project.bigImage,
          alt: project.title,
        },
      ],
    },
    alternates: {
      canonical: "https://goktay.dev/referanslarim",
    },
  };
}

export default function MainPortfolioSinglePage1Dark({ params }) {
  const {
    bigImage,
    client,
    date,
    description,
    id,
    image1,
    image2,
    image3,
    image4,
    link,
    projectDescription,
    services,
    title
  } = allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
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
                      className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                      style={{
                        backgroundImage:
                            `url(${bigImage})`,
                      }}
                  >
                    <div className="container position-relative pt-30 pt-sm-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <div className="mb-20">
                              <a
                                  href="#"
                                  className="btn btn-mod btn-small btn-border btn-circle"
                                  data-btn-animate="y"
                              >
                                <i className="mi-arrow-left align-center size-18" />{" "}
                                Portföye dön
                              </a>
                            </div>
                            <h1 className="hs-title-1 mb-20">
                            <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                            >
                              <AnimatedText text={title} />
                            </span>
                            </h1>
                            <div className="row">
                              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <p
                                    className="section-descr mb-0 wow fadeIn"
                                    data-wow-delay="0.2s"
                                    data-wow-duration="1.2s"
                                >
                                  {description}
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
                </section>
                <>
                  {/* Section */}
                  <section className="page-section bg-dark-1 light-content">
                    <div className="container position-relative">
                      <div className="row">
                        {/* Project Details */}
                        <div className="col-md-4 mb-sm-40 wow fadeInUp">
                          <div className="block-sticky">
                            <h2 className="h3 mb-20">Proje Detayları</h2>
                            <hr className="mb-20"/>
                            <div className="row text-gray small">
                              <div className="col-sm-4">
                                <b>Tarih :</b>
                              </div>
                              <div className="col-sm-8">{date}</div>
                            </div>
                            <hr className="mb-20"/>
                            <div className="row text-gray small">
                              <div className="col-sm-4">
                                <b>Müşteri:</b>
                              </div>
                              <div className="col-sm-8">{client}</div>
                            </div>
                            <hr className="mb-20"/>
                            <div className="row text-gray small">
                              <div className="col-sm-4">
                                <b>Teknoloji:</b>
                              </div>
                              <div className="col-sm-8">
                                {services}
                              </div>
                            </div>
                            <hr className="mb-20"/>
                            <div className="row text-gray small">
                              <div className="col-sm-4">
                                <b>Adres:</b>
                              </div>
                              <div className="col-sm-8">
                                <a href={link} target="_blank">{link}</a>
                              </div>
                            </div>
                            <hr className="mb-20"/>
                            <div className="text-gray small">
                              <div>
                                <b>Proje Detayları:</b>
                              </div>
                              <div>
                                {projectDescription}
                              </div>
                            </div>
                            <hr className="mb-20"/>
                          </div>
                        </div>
                        {/* End Project Details */}
                        <div className="col-md-8">
                          <div className="mb-n30">
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                  src={image1}
                                  alt="Image Description"
                                  width={1350}
                                  height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                  src={image2}
                                  alt="Image Description"
                                  width={1350}
                                  height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                  src={image3}
                                  alt="Image Description"
                                  width={1350}
                                  height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                            {/* Photo Item */}
                            <div className="mb-30 wow fadeInUp">
                              <Image
                                  src={image4}
                                  alt="Image Description"
                                  width={1350}
                                  height={865}
                              />
                            </div>
                            {/* End Photo Item */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* End Section */}
                  {/* Divider */}
                  <hr className="mt-0 mb-0 white" />
                  {/* End Divider */}
                  {/* Section */}
                  <section className="page-section bg-dark-1 light-content">
                    <RelatedProject10 />
                  </section>
                  {/* End Section */}
                  {/* Divider */}
                  <hr className="mt-0 mb-0 white" />
                  {/* End Divider */}
                  {/* Work Navigation */}
                  <div className="work-navigation clearfix bg-dark-1 light-content">
                    <Link
                        href={id > 1 ? `/referanslarim/${id - 1}` : "#"}
                        className={`work-prev ${id <= 1 ? "disabled-link" : ""}`}
                    >
                    <span>
                        <i className="mi-arrow-left size-24 align-middle" />{" "}
                      Önceki
                    </span>
                    </Link>
                    <a href="#" className="work-all">
                    <span>
                      <i className="mi-close size-24 align-middle" />
                    </span>
                    </a>
                    <Link
                        href={id <= 4 ? `/referanslarim/${id + 1}` : "#"}
                        className={`work-next ${id >= 4 ? "disabled-link" : ""}`}
                    >
                    <span>
                      Sonraki <i className="mi-arrow-right size-24 align-middle" />
                    </span>
                    </Link>
                  </div>
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
