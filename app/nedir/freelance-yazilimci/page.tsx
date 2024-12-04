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
    title: "Freelance Yazılımcı: Profesyonel Çözümlerle Dijital Başarı",
    description:
        "Freelance yazılımcı olarak, ajanslar ve işletmeler için özel yazılım çözümleri sunuyorum. Hızlı, maliyet etkin ve profesyonel çözümler için rehberimizi okuyun.",
    keywords: [
        "freelance yazılımcı",
        "freelance yazılım",
        "freelance yazılım çözümleri",
        "freelance web geliştirici",
        "freelance yazılım geliştirme",
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
        url: "https://goktay.dev/nedir/freelance-yazilimci",
        title: "Freelance Yazılımcı: Profesyonel Çözümlerle Dijital Başarı",
        description:
            "Freelance yazılımcı olarak, ajanslar ve işletmeler için özel yazılım çözümleri sunuyorum. Hızlı, maliyet etkin ve profesyonel çözümler için rehberimizi okuyun.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
                width: 1200,
                height: 630,
                alt: "Freelance Yazılımcı",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/freelance-yazilimci",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freelance Yazılımcı: Profesyonel Çözümlerle Dijital Başarı",
        description:
            "Freelance yazılımcı olarak, ajanslar ve işletmeler için özel yazılım çözümleri sunuyorum. Hızlı, maliyet etkin ve profesyonel çözümler için rehberimizi okuyun.",
        images: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark({ params }) {
    const title = "Freelance Yazılımcı: Profesyonel Çözümlerle Dijital Başarı";

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
                                                    <h2>Freelance Yazılımcı Nedir?</h2>
                                                    <p>
                                                        Freelance yazılımcılar, projelere bağımsız olarak dahil olan,
                                                        belirli bir işverenin kadrosunda olmayan ancak proje bazlı
                                                        çalışan profesyonellerdir. Bu çalışma modeli, özellikle
                                                        ajanslar ve işletmeler için birçok avantaj sunar.
                                                    </p>
                                                    <h2>Neden Freelance Yazılımcı ile Çalışmalısınız?</h2>
                                                    <p>
                                                        Freelance yazılımcı olarak, projelerinize özel çözümler sunuyor,
                                                        hızlı ve etkili sonuçlar elde etmenizi sağlıyorum.
                                                    </p>
                                                    <Image
                                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3"
                                                        alt="Freelance Yazılımcı"
                                                        width={850}
                                                        height={480}
                                                        title="Freelance Yazılımcı"
                                                    />
                                                    <h2>Hizmetlerim</h2>
                                                    <h3>1. Web Sitesi Tasarımı ve Geliştirme</h3>
                                                    <p>
                                                        Modern, mobil uyumlu ve kullanıcı dostu web siteleri tasarlıyorum.
                                                    </p>
                                                    <h3>2. E-Ticaret Çözümleri</h3>
                                                    <p>
                                                        Ürünlerinizi online ortamda hızlıca satışa sunabileceğiniz
                                                        e-ticaret platformları geliştiriyorum.
                                                    </p>
                                                    <h3>3. SEO ve Performans Odaklı Geliştirme</h3>
                                                    <p>
                                                        Google sıralamalarında daha üstte yer almanızı sağlayacak teknik
                                                        çözümler sunuyorum.
                                                    </p>
                                                    <h2>Benimle Çalışmanın Avantajları</h2>
                                                    <p>
                                                        Freelance bir yazılımcı ile çalışmak, esnek ve maliyet etkin bir
                                                        çözüm sağlar. Tüm süreç boyunca doğrudan iletişim kurabilir,
                                                        projeniz için tamamen özelleştirilmiş bir hizmet alabilirsiniz.
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
