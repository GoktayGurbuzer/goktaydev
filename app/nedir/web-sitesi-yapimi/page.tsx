import AnimatedText from "@/components/common/AnimatedText";
import { boldMultipageDark } from "@/data/menu";
import Header2 from "@/components/headers/Header2";
import React from "react";
import Footer5 from "@/components/footers/Footer5";
import dynamic from "next/dynamic";
import Image from "next/image";

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false,
    }
);

export const metadata = {
    title: "Web Sitesi Yapımı: Dijital Dünyaya Açılan Kapı",
    description:
        "Web sitesi yapımı süreçlerini öğrenmek ve profesyonel bir yaklaşım ile işletmenizi dijital dünyada var etmek için rehberimizi okuyun.",
    keywords: [
        "web sitesi yapımı",
        "profesyonel web sitesi yapımı",
        "web sitesi nasıl yapılır",
        "web sitesi fiyatları",
        "responsive web sitesi",
        "modern web sitesi yapımı",
    ],
    authors: [{ name: "Göktay Gürbüzer", url: "https://goktay.dev" }],
    publisher: "Göktay Gürbüzer",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "article",
        locale: "tr_TR",
        url: "https://goktay.dev/nedir/web-sitesi-yapimi",
        title: "Web Sitesi Yapımı: Dijital Dünyaya Açılan Kapı",
        description:
            "Web sitesi yapımı süreçlerini öğrenmek ve profesyonel bir yaklaşım ile işletmenizi dijital dünyada var etmek için rehberimizi okuyun.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1576936422505-18d321d54d40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                width: 1200,
                height: 630,
                alt: "Web Sitesi Yapımı",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/web-sitesi-yapimi",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Sitesi Yapımı: Dijital Dünyaya Açılan Kapı",
        description:
            "Web sitesi yapımı süreçlerini öğrenmek ve profesyonel bir yaklaşım ile işletmenizi dijital dünyada var etmek için rehberimizi okuyun.",
        images: [
            "https://images.unsplash.com/photo-1576936422505-18d321d54d40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark({ params }) {
    const title = "Web Sitesi Yapımı: Dijital Dünyaya Açılan Kapı";

    return (
        <>
            <div className="theme-main">
                <div className="dark-mode">
                    <div className="page bg-dark-1" id="top">
                        <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
                            <Header2 links={boldMultipageDark} />
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
                                        <div className="text-center">
                                            <div className="row">
                                                <div className="col-md-8 offset-md-2">
                                                    <h1 className="hs-title-1 mb-20">
                                                        <span
                                                            className="wow charsAnimIn"
                                                            data-splitting="chars"
                                                        >
                                                            <AnimatedText text={title} />
                                                        </span>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ParallaxContainer>
                            </section>
                            <section className="page-section bg-dark-1 light-content">
                            <div className="container relative">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <div className="blog-item mb-80 mb-xs-40">
                                            <div className="blog-item-body">
                                                <h2>Web Sitesi Yapımı Nedir?</h2>
                                                <p>
                                                    Web sitesi yapımı, bir işletmenin veya bireyin dijital ortamda
                                                    temsil edilmesi için gereken tüm teknik ve tasarım süreçlerini
                                                    kapsar. Profesyonel bir web sitesi, marka bilinirliğini artırır,
                                                    kullanıcılarla güçlü bir bağ kurar ve satışları yükseltir.
                                                </p>
                                                <Image
                                                    src="https://images.unsplash.com/photo-1576936422505-18d321d54d40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                    alt="Web Sitesi Yapımı"
                                                    width={850}
                                                    height={480}
                                                    title="Web Sitesi Yapımı"
                                                />
                                                <h2>Web Sitesi Yapımı Süreçleri</h2>
                                                <h3>1. Planlama</h3>
                                                <p>
                                                    Web sitesi yapımının ilk adımı, müşterinin ihtiyaçlarını anlamak
                                                    ve hedeflerini belirlemektir. Bu aşamada, sitenin amacı, hedef
                                                    kitlesi ve kullanılacak teknolojiler belirlenir.
                                                </p>
                                                <h3>2. Tasarım</h3>
                                                <p>
                                                    Görsel tasarım, kullanıcı deneyimini optimize eder. Mobil uyumlu
                                                    ve modern bir tasarım, markanızın profesyonelliğini yansıtır.
                                                </p>
                                                <h3>3. Geliştirme</h3>
                                                <p>
                                                    Tasarım tamamlandıktan sonra, web sitesi kodlama sürecine
                                                    geçilir. Kullanıcı dostu arayüzler ve güçlü bir altyapı
                                                    geliştirilir.
                                                </p>
                                                <h3>4. Test ve Yayınlama</h3>
                                                <p>
                                                    Son olarak, web sitesi test edilir ve hatalar giderilir.
                                                    Ardından, site yayına alınır ve kullanıcıların erişimine
                                                    sunulur.
                                                </p>
                                                <h2>Neden Profesyonel Web Sitesi Yapımı?</h2>
                                                <p>
                                                    Profesyonel bir web sitesi, hem kullanıcı deneyimini optimize
                                                    eder hem de arama motorlarında daha iyi sıralamalar almanızı
                                                    sağlar. Özenle yapılmış bir site, marka değerini artırır ve
                                                    güvenilirlik sağlar.
                                                </p>
                                                <h2>Hizmetlerim</h2>
                                                <p>
                                                    - Modern ve mobil uyumlu tasarımlar
                                                    <br />
                                                    - SEO odaklı geliştirme
                                                    <br />
                                                    - E-ticaret çözümleri
                                                    <br />
                                                    - Özel yazılım geliştirme
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                            <hr className="mt-0 mb-0 white" />
                        </main>
                        <footer className="footer-1 bg-dark-2 light-content">
                            <Footer5 />
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

