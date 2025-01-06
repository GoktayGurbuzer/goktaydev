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
    title: "Web Tasarım Ofisi: Profesyonel ve Modern Çözümler",
    description:
        "Web tasarım ofisi olarak işletmelere özel, mobil uyumlu ve SEO odaklı web tasarım hizmetleri sunuyorum. Dijital dünyada fark yaratmak için rehberimizi inceleyin.",
    keywords: [
        "web tasarım ofisi",
        "web tasarım hizmetleri",
        "profesyonel web tasarım",
        "mobil uyumlu web tasarım",
        "SEO odaklı web tasarım",
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
        url: "https://goktay.dev/nedir/web-tasarim-ofisi",
        title: "Web Tasarım Ofisi: Profesyonel ve Modern Çözümler",
        description:
            "Web tasarım ofisi olarak işletmelere özel, mobil uyumlu ve SEO odaklı web tasarım hizmetleri sunuyorum. Dijital dünyada fark yaratmak için rehberimizi inceleyin.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
                width: 1200,
                height: 630,
                alt: "Web Tasarım Ofisi",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/web-tasarim-ofisi",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Tasarım Ofisi: Profesyonel ve Modern Çözümler",
        description:
            "Web tasarım ofisi olarak işletmelere özel, mobil uyumlu ve SEO odaklı web tasarım hizmetleri sunuyorum. Dijital dünyada fark yaratmak için rehberimizi inceleyin.",
        images: [
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark() {
    const title = "Web Tasarım Ofisi: Profesyonel ve Modern Çözümler";

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
                                                    <h2>Web Tasarım Ofisi Nedir?</h2>
                                                    <p>
                                                        Web tasarım ofisi, işletmelerin dijital dünyada güçlü bir varlık
                                                        göstermesi için profesyonel web tasarım hizmetleri sunar.
                                                        Kullanıcı dostu, mobil uyumlu ve görsel olarak etkileyici web
                                                        siteleri oluşturur.
                                                    </p>
                                                    <h2>Web Tasarım Ofisi ile Çalışmanın Avantajları</h2>
                                                    <p>
                                                        Web tasarım ofisi, işletmenize özel çözümler üreterek dijital
                                                        kimliğinizi güçlendirebilir. SEO odaklı ve performans
                                                        optimizasyonu yapılmış web siteleriyle müşteri deneyimini
                                                        artırabilirsiniz.
                                                    </p>
                                                    <Image
                                                        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3"
                                                        alt="Web Tasarım Ofisi"
                                                        width={850}
                                                        height={480}
                                                        title="Web Tasarım Ofisi"
                                                    />
                                                    <h2>Hizmetlerim</h2>
                                                    <h3>1. Profesyonel Web Tasarım</h3>
                                                    <p>
                                                        İşletmenizin ihtiyaçlarına uygun, modern ve kullanıcı dostu
                                                        web tasarımları sunuyorum.
                                                    </p>
                                                    <h3>2. SEO ve Performans Optimizasyonu</h3>
                                                    <p>
                                                        Web sitenizin Google sıralamasını yükseltmek ve daha hızlı
                                                        çalışmasını sağlamak için çözümler üretiyorum.
                                                    </p>
                                                    <h3>3. Mobil Uyumlu Web Siteleri</h3>
                                                    <p>
                                                        Mobil cihazlarda kusursuz çalışan, responsive tasarımlar
                                                        geliştiriyorum.
                                                    </p>
                                                    <h2>Benimle Çalışmanın Avantajları</h2>
                                                    <p>
                                                        Profesyonel bir web tasarım ofisiyle çalışarak işletmenizi
                                                        dijital dünyada bir adım öne çıkarabilirsiniz. Özel ve
                                                        kişiselleştirilmiş çözümlerimle hedeflerinize ulaşmanıza yardımcı
                                                        oluyorum.
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
