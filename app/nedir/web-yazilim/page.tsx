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
    title: "Web Yazılım: Dijital Çözümlerle İşletmenizi Güçlendirin",
    description:
        "Web yazılım hizmetleri ile işletmenizi dijital dünyada öne çıkarıyorum. Özel tasarım, kullanıcı dostu ve performans odaklı yazılımlar için rehberimizi okuyun.",
    keywords: [
        "web yazılım",
        "web yazılım çözümleri",
        "özel web yazılım",
        "web yazılım geliştirme",
        "performans odaklı web yazılım",
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
        url: "https://goktay.dev/nedir/web-yazilim",
        title: "Web Yazılım: Dijital Çözümlerle İşletmenizi Güçlendirin",
        description:
            "Web yazılım hizmetleri ile işletmenizi dijital dünyada öne çıkarıyorum. Özel tasarım, kullanıcı dostu ve performans odaklı yazılımlar için rehberimizi okuyun.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1558888402-ecf3d89d1bfa?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
                width: 1200,
                height: 630,
                alt: "Web Yazılım",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/web-yazilim",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Yazılım: Dijital Çözümlerle İşletmenizi Güçlendirin",
        description:
            "Web yazılım hizmetleri ile işletmenizi dijital dünyada öne çıkarıyorum. Özel tasarım, kullanıcı dostu ve performans odaklı yazılımlar için rehberimizi okuyun.",
        images: [
            "https://images.unsplash.com/photo-1558888402-ecf3d89d1bfa?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark() {
    const title = "Web Yazılım: Dijital Çözümlerle İşletmenizi Güçlendirin";

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
                                                    <h2>Web Yazılım Nedir?</h2>
                                                    <p>
                                                        Web yazılım, kullanıcıların çevrimiçi ortamda çeşitli hizmetleri
                                                        ve işlemleri gerçekleştirmesini sağlayan programlama ve yazılım
                                                        çözümleridir. İşletmelerin operasyonlarını kolaylaştırmak ve
                                                        müşteri deneyimini artırmak için özel olarak tasarlanabilir.
                                                    </p>
                                                    <h2>Web Yazılım Hizmetlerimizin Avantajları</h2>
                                                    <p>
                                                        Web yazılım çözümleri, işletmenizin dijital dünyada fark
                                                        yaratmasını sağlar. Kullanıcı dostu, mobil uyumlu ve performans
                                                        odaklı tasarımlar sunuyoruz.
                                                    </p>
                                                    <Image
                                                        src="https://images.unsplash.com/photo-1558888402-ecf3d89d1bfa?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3"
                                                        alt="Web Yazılım"
                                                        width={850}
                                                        height={480}
                                                        title="Web Yazılım"
                                                    />
                                                    <h2>Hizmetlerim</h2>
                                                    <h3>1. Özel Web Yazılım Geliştirme</h3>
                                                    <p>
                                                        İşletmenize özel ihtiyaçlara uygun yazılım çözümleri sunuyorum.
                                                    </p>
                                                    <h3>2. E-Ticaret Entegrasyonları</h3>
                                                    <p>
                                                        Online mağazanız için özelleştirilmiş yazılım entegrasyonları
                                                        geliştiriyorum.
                                                    </p>
                                                    <h3>3. API ve Üçüncü Parti Entegrasyonları</h3>
                                                    <p>
                                                        Web yazılım projeleriniz için API geliştirme ve mevcut sistemlere
                                                        entegrasyon hizmetleri sunuyorum.
                                                    </p>
                                                    <h2>Benimle Çalışmanın Avantajları</h2>
                                                    <p>
                                                        Web yazılım projelerinde uzmanlaşmış bir geliştirici olarak,
                                                        işletmenizin dijital ihtiyaçlarını karşılamak için en uygun
                                                        çözümleri sunuyorum. Esnek, güvenilir ve ölçeklenebilir
                                                        projeler için doğru adres burası.
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
