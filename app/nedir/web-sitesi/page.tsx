import AnimatedText from "@/components/common/AnimatedText";
import { boldMultipageDark } from "@/data/menu";
import Header2 from "@/components/headers/Header2";
import React from "react";
import Footer5 from "@/components/footers/Footer5";
import dynamic from "next/dynamic";
import Image from "next/image";
import Contact from "@/components/homes/home-5/Contact";

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false,
    }
);

export const metadata = {
    title: "Web Sitesi: Dijital Dünyada Başarıya Açılan Kapı",
    description:
        "Web sitesi tasarımı ve geliştirme konusunda profesyonel hizmetler sunuyorum. Mobil uyumlu, SEO odaklı ve kullanıcı dostu web siteleri için rehberimizi inceleyin.",
    keywords: [
        "web sitesi",
        "web sitesi tasarımı",
        "web sitesi geliştirme",
        "SEO odaklı web sitesi",
        "kullanıcı dostu web sitesi",
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
        url: "https://goktay.dev/nedir/web-sitesi",
        title: "Web Sitesi: Dijital Dünyada Başarıya Açılan Kapı",
        description:
            "Web sitesi tasarımı ve geliştirme konusunda profesyonel hizmetler sunuyorum. Mobil uyumlu, SEO odaklı ve kullanıcı dostu web siteleri için rehberimizi inceleyin.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
                width: 1200,
                height: 630,
                alt: "Web Sitesi",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/web-sitesi",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Sitesi: Dijital Dünyada Başarıya Açılan Kapı",
        description:
            "Web sitesi tasarımı ve geliştirme konusunda profesyonel hizmetler sunuyorum. Mobil uyumlu, SEO odaklı ve kullanıcı dostu web siteleri için rehberimizi inceleyin.",
        images: [
            "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark() {
    const title = "Web Sitesi: Dijital Dünyada Başarıya Açılan Kapı";

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
                                                            <AnimatedText text={title}/>
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
                                                    <h2>Web Sitesi Nedir?</h2>
                                                    <p>
                                                        Web sitesi, bireylerin ve işletmelerin dijital dünyada varlık
                                                        göstermelerini sağlayan, bilgi ve hizmetlerini paylaşmalarına
                                                        olanak tanıyan çevrimiçi bir platformdur. Günümüz dijital
                                                        çağında, web siteleri bir işletmenin en önemli varlıklarından
                                                        biridir.
                                                    </p>
                                                    <h2>Neden Bir Web Sitesine İhtiyacınız Var?</h2>
                                                    <p>
                                                        Web sitesi, müşterilerinizle doğrudan iletişim kurmanızı sağlar.
                                                        Profesyonel bir web sitesi ile markanızı güçlendirebilir,
                                                        daha geniş bir kitleye ulaşabilirsiniz.
                                                    </p>
                                                    <Image
                                                        src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3"
                                                        alt="Web Sitesi"
                                                        width={850}
                                                        height={480}
                                                        title="Web Sitesi"
                                                    />
                                                    <h2>Hizmetlerim</h2>
                                                    <h3>1. Modern Web Tasarımı</h3>
                                                    <p>
                                                        Kullanıcı dostu, mobil uyumlu ve modern web tasarımı
                                                        hizmetleri sunuyorum.
                                                    </p>
                                                    <h3>2. E-Ticaret Platformları</h3>
                                                    <p>
                                                        Online mağazanız için özel e-ticaret platformları tasarlıyor ve
                                                        geliştiriyorum.
                                                    </p>
                                                    <h3>3. SEO ve Performans Optimizasyonu</h3>
                                                    <p>
                                                        Web sitenizin hızını ve Google sıralamasını artırmak için teknik
                                                        çözümler sunuyorum.
                                                    </p>
                                                    <h2>Benimle Çalışmanın Avantajları</h2>
                                                    <p>
                                                        Profesyonel bir web sitesiyle işletmenizi dijital dünyada bir
                                                        adım öne çıkarabilirsiniz. Kişiselleştirilmiş hizmetlerimle
                                                        hedeflerinize ulaşmanız için destek sağlıyorum.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                className="page-section bg-dark-1 light-content pt-0"
                                id="contact"
                            >
                                <Contact/>
                            </section>
                            <hr className="mt-0 mb-0 white"/>
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
