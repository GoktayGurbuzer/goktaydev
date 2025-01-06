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
    title: "Freelance Yazılım: Esnek ve Profesyonel Çözümler",
    description:
        "Freelance yazılım hizmetleri ile işletmenize özel, esnek ve maliyet etkin çözümler sunuyorum. Projeleriniz için hızlı ve etkili sonuçlar alın.",
    keywords: [
        "freelance yazılım",
        "freelance yazılım çözümleri",
        "özel yazılım geliştirme",
        "freelance yazılımcı",
        "esnek yazılım hizmetleri",
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
        url: "https://goktay.dev/nedir/freelance-yazilim",
        title: "Freelance Yazılım: Esnek ve Profesyonel Çözümler",
        description:
            "Freelance yazılım hizmetleri ile işletmenize özel, esnek ve maliyet etkin çözümler sunuyorum. Projeleriniz için hızlı ve etkili sonuçlar alın.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1523475472561-120db281d167?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
                width: 1200,
                height: 630,
                alt: "Freelance Yazılım",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/freelance-yazilim",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freelance Yazılım: Esnek ve Profesyonel Çözümler",
        description:
            "Freelance yazılım hizmetleri ile işletmenize özel, esnek ve maliyet etkin çözümler sunuyorum. Projeleriniz için hızlı ve etkili sonuçlar alın.",
        images: [
            "https://images.unsplash.com/photo-1523475472561-120db281d167?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark() {
    const title = "Freelance Yazılım: Esnek ve Profesyonel Çözümler";

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
                                                    <h2>Freelance Yazılım Nedir?</h2>
                                                    <p>
                                                        Freelance yazılım, projelere bağımsız olarak dahil olan
                                                        yazılım geliştiriciler tarafından sunulan hizmetleri ifade eder.
                                                        Bu çalışma modeli, özellikle küçük ve orta ölçekli işletmeler
                                                        için esneklik, hız ve maliyet avantajı sağlar. Freelancer
                                                        yazılımcılar, proje bazlı çalışarak işletmenizin yazılım
                                                        ihtiyaçlarına özel çözümler sunar.
                                                    </p>
                                                    <p>
                                                        Günümüzde freelance yazılım hizmetleri, dijital dönüşüm ve
                                                        teknolojiye olan talep arttıkça daha da popüler hale gelmiştir.
                                                        Esneklik ve yenilik arayan işletmeler için freelance yazılım,
                                                        stratejik bir çözüm sunar.
                                                    </p>
                                                    <h2>Freelance Yazılım Hizmetleri Kimler İçin Uygundur?</h2>
                                                    <p>
                                                        Freelance yazılım hizmetleri, aşağıdaki durumlar için idealdir:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Başlangıç Seviyesindeki İşletmeler: Küçük bütçelerle
                                                            yazılım geliştirme ihtiyacı olan girişimciler.
                                                        </li>
                                                        <li>
                                                            Proje Bazlı İhtiyaçlar: Uzun vadeli çalışan istihdam
                                                            etmeden tek seferlik projeler için çözüm arayan işletmeler.
                                                        </li>
                                                        <li>
                                                            Teknolojik Yenilik Arayanlar: Özel yazılım çözümleriyle
                                                            mevcut süreçlerini geliştirmek isteyen firmalar.
                                                        </li>
                                                    </ul>
                                                    <h2>Freelance Yazılımın Avantajları</h2>
                                                    <p>
                                                        Freelance yazılımın işletmelere sunduğu başlıca avantajlar
                                                        şunlardır:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Esneklik: Freelance yazılımcılar, projelerinizi
                                                            belirlediğiniz sürelerde ve şartlarda tamamlar.
                                                        </li>
                                                        <li>
                                                            Maliyet Etkinlik: Tam zamanlı çalışanlara kıyasla
                                                            freelance yazılımcılar daha düşük bütçeyle çalışabilir.
                                                        </li>
                                                        <li>
                                                            Uzmanlık: Freelance yazılımcılar genellikle belirli bir
                                                            alan veya teknoloji üzerinde uzmanlaşmıştır.
                                                        </li>
                                                    </ul>
                                                    <h2>Freelance Yazılım Süreci</h2>
                                                    <p>
                                                        Freelance yazılım süreci, belirli aşamalarla yürütülür:
                                                    </p>
                                                    <ol>
                                                        <li>
                                                            Proje Tanımlama: İşletmenizin ihtiyaçlarına ve hedeflerine
                                                            uygun proje detayları belirlenir.
                                                        </li>
                                                        <li>
                                                            Freelance Yazılımcı Seçimi: Proje için en uygun uzman
                                                            belirlenir ve süreç planlanır.
                                                        </li>
                                                        <li>
                                                            Geliştirme Süreci: Yazılım, belirlenen hedefler doğrultusunda
                                                            geliştirilir ve test edilir.
                                                        </li>
                                                        <li>
                                                            Teslim ve Destek: Proje tamamlanır ve talep halinde
                                                            destek hizmetleri sağlanır.
                                                        </li>
                                                    </ol>
                                                    <h2>Hizmetlerim</h2>
                                                    <h3>1. Özel Yazılım Çözümleri</h3>
                                                    <p>
                                                        İşletmenizin ihtiyaçlarına uygun, tamamen özelleştirilmiş
                                                        yazılım projeleri sunuyorum.
                                                    </p>
                                                    <h3>2. Web ve Mobil Uygulamalar</h3>
                                                    <p>
                                                        Kullanıcı dostu ve performans odaklı web ve mobil uygulamalar
                                                        geliştirerek dijital dünyada öne çıkmanızı sağlıyorum.
                                                    </p>
                                                    <h3>3. Proje Yönetimi ve Danışmanlık</h3>
                                                    <p>
                                                        Freelance yazılım projelerinizin planlama ve yönetim aşamalarında
                                                        profesyonel destek sunuyorum.
                                                    </p>
                                                    <h2>Benimle Çalışmanın Avantajları</h2>
                                                    <p>
                                                        Freelance yazılım çözümleri ile işletmenize özel, yenilikçi ve
                                                        etkili projeler sunuyorum. İşbirliği sürecinde esneklik ve
                                                        kaliteyi ön planda tutarak hedeflerinize ulaşmanıza yardımcı
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