import Footer5 from "@/components/footers/Footer5";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false, // Disable server-side rendering
    }
);

import AnimatedText from "@/components/common/AnimatedText";
import {boldMultipageDark} from "@/data/menu";
import Portfolio from "@/components/portfolio/Portfolio2";
import Header2 from "@/components/headers/Header2";
import React from "react";

export const metadata = {
    title:
        "Referanslarım | Göktay - Tam Yığın Web Geliştirici",
    description:
        "Tamamladığım projelere göz atın. Web sitesi geliştirme, SEO ve dijital çözümlerle iş ortaklarımın hedeflerini gerçeğe dönüştürdüğüm referanslarım burada.",
};
export default function MainPortfolioPageWide2ColDark() {
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
                                            "url(/assets/images/full-width-images/section-bg-2.jpg)",
                                    }}
                                >
                                    <div className="container position-relative pt-30 pt-sm-50">
                                        {/* Section Content */}
                                        <div className="text-center">
                                            <div className="row">
                                                {/* Page Title */}
                                                <div className="col-md-8 offset-md-2">
                                                    <h1 className="hs-title-1 mb-20">
                                                        <span
                                                            className="wow charsAnimIn"
                                                            data-splitting="chars"
                                                        >
                                                          <AnimatedText text="Projelerim ve Dijital Dönüşüm Hikayeleri" />
                                                        </span>
                                                    </h1>
                                                    <div className="row">
                                                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                                            <p
                                                                className="section-descr mb-0 wow fadeIn"
                                                                data-wow-delay="0.2s"
                                                                data-wow-duration="1.2s"
                                                            >
                                                                Her proje, ihtiyaçlara özel çözümler üretmek için bir yolculuktur. İş ortaklarımın hedeflerini gerçeğe dönüştürmek, iş süreçlerini dijitalleştirmek ve onlara değer katmak için modern teknolojileri ve yaratıcı fikirleri bir araya getiriyorum. Aşağıda, bugüne kadar gururla tamamladığım projelerimi inceleyebilirsiniz.
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
                                    <Portfolio gridClass="work-grid-2" />
                                </section>
                                {/* End Section */}
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
