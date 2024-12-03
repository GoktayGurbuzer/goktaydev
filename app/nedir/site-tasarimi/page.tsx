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
    title: "Site Tasarımı Nedir? 2025 Güncel Rehberi",
    description:
        "Site tasarımı, bir web sitesinin görsel ve kullanıcı deneyimini geliştiren bir süreçtir. 2025 site tasarımı trendlerini ve fiyatlarını öğrenmek için rehberimizi okuyun.",
    keywords: [
        "site tasarımı",
        "site tasarımı fiyatları",
        "site tasarım trendleri",
        "modern site tasarımı",
        "responsive site tasarımı",
        "UX/UI tasarımı",
        "e-ticaret site tasarımı",
        "kurumsal site tasarımı",
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
        url: "https://goktay.dev/site-tasarimi",
        title: "Site Tasarımı Nedir? 2025 Güncel Rehberi",
        description:
            "Site tasarımı, bir web sitesinin görsel ve kullanıcı deneyimini geliştiren bir süreçtir. 2025 site tasarımı trendlerini ve fiyatlarını öğrenmek için rehberimizi okuyun.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                width: 1200,
                height: 630,
                alt: "Site Tasarımı Nedir?",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/site-tasarimi",
    },
    twitter: {
        card: "summary_large_image",
        title: "Site Tasarımı Nedir? 2025 Güncel Rehberi",
        description:
            "Site tasarımı, bir web sitesinin görsel ve kullanıcı deneyimini geliştiren bir süreçtir. 2025 site tasarımı trendlerini ve fiyatlarını öğrenmek için rehberimizi okuyun.",
        images: ["https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark({ params }) {
    const title = "Site Tasarımı Nedir? 2025 Güncel Rehberi";

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
                                                    <p className="lead">
                                                        <a
                                                            href="https://goktay.dev"
                                                            title="Profesyonel Site Tasarımı"
                                                        >
                                                            Site tasarımı
                                                        </a>{" "}
                                                        ile modern dünyada fark yaratabilirsiniz. Ancak, "site tasarım
                                                        fiyatları ne kadar?" sorusunun yanıtı birçok etkene bağlıdır.
                                                    </p>
                                                    <Image
                                                        src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Site Tasarımı"
                                                        width={850}
                                                        height={480}
                                                        title="Site Tasarım Fiyatları"
                                                    />
                                                    <h2>Site Tasarımının Öne Çıkan Unsurları</h2>
                                                    <p>
                                                        İyi bir site tasarımı, ziyaretçilerinizi etkilemek için bir
                                                        fırsattır. İhtiyaçlarınıza göre değişebilecek unsurları şöyle
                                                        özetleyebiliriz:
                                                    </p>
                                                    <h3>1. Kullanıcı Odaklı Tasarım</h3>
                                                    <p>
                                                        Ziyaretçilerinize en iyi deneyimi sunmak için kullanıcı dostu
                                                        bir arayüz tasarlanmalıdır.
                                                    </p>
                                                    <h3>2. Teknoloji ve Modern Tasarım</h3>
                                                    <p>
                                                        Hangi teknolojilerin kullanılacağı ve modern trendler, sitenizin
                                                        başarısını etkiler.
                                                    </p>
                                                    <h3>3. SEO ve Hız</h3>
                                                    <p>
                                                        Hızlı yükleme süresi ve SEO uyumu, sitenizin görünürlüğünü
                                                        artırır.
                                                    </p>
                                                    <h2>2025 Trendleri ve Tavsiyeler</h2>
                                                    <p>
                                                        Yeni yılda, mobil uyumlu tasarımlar ve yaratıcı arayüzler
                                                        önemini koruyacak. Profesyonel bir ekipten destek almak,
                                                        kaliteli sonuçlar elde etmenin anahtarıdır.
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