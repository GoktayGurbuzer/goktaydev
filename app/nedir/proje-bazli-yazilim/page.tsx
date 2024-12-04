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
    title: "Proje Bazlı Yazılım: Özel Çözümlerle Dijital Başarı",
    description:
        "Proje bazlı yazılım geliştirme süreçlerini öğrenmek ve işletmeniz için özelleştirilmiş yazılım çözümleri hakkında bilgi almak için rehberimizi okuyun.",
    keywords: [
        "proje bazlı yazılım",
        "yazılım geliştirme",
        "özel yazılım çözümleri",
        "proje tabanlı yazılım",
        "kurumsal yazılım geliştirme",
        "freelance yazılım projeleri",
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
        url: "https://goktay.dev/nedir/proje-bazli-yazilim",
        title: "Proje Bazlı Yazılım: Özel Çözümlerle Dijital Başarı",
        description:
            "Proje bazlı yazılım geliştirme süreçlerini öğrenmek ve işletmeniz için özelleştirilmiş yazılım çözümleri hakkında bilgi almak için rehberimizi okuyun.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                width: 1200,
                height: 630,
                alt: "Proje Bazlı Yazılım",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/proje-bazli-yazilim",
    },
    twitter: {
        card: "summary_large_image",
        title: "Proje Bazlı Yazılım: Özel Çözümlerle Dijital Başarı",
        description:
            "Proje bazlı yazılım geliştirme süreçlerini öğrenmek ve işletmeniz için özelleştirilmiş yazılım çözümleri hakkında bilgi almak için rehberimizi okuyun.",
        images: [
            "https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark({ params }) {
    const title = "Proje Bazlı Yazılım: Özel Çözümlerle Dijital Başarı";

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
                                                    <h2>Proje Bazlı Yazılım Nedir?</h2>
                                                    <p>
                                                        Proje bazlı yazılım, belirli bir ihtiyacı karşılamak üzere
                                                        özel olarak geliştirilmiş yazılım çözümlerini ifade eder.
                                                        Bu tür projeler, işletmenizin özel gereksinimlerini karşılamak
                                                        için tasarlanır ve her adımında müşteri odaklı bir yaklaşım
                                                        benimsenir.
                                                    </p>
                                                    <h2>Neden Proje Bazlı Yazılım?</h2>
                                                    <p>
                                                        İşletmelerin genel yazılım çözümleri yerine proje bazlı
                                                        yazılıma yönelmesinin birkaç önemli nedeni vardır:
                                                    </p>
                                                    <ul>
                                                        <li>**Özelleştirme:** İhtiyaçlarınıza özel çözümler geliştirilir.</li>
                                                        <li>**Esneklik:** İşletmenizin büyümesine ve değişen
                                                            ihtiyaçlarına uyum sağlar.</li>
                                                        <li>**Uzmanlık:** Alanında uzman bir ekip tarafından
                                                            geliştirilir.</li>
                                                    </ul>
                                                    <Image
                                                        src="https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Proje Bazlı Yazılım"
                                                        width={850}
                                                        height={480}
                                                        title="Proje Bazlı Yazılım"
                                                    />
                                                    <h2>Proje Bazlı Yazılım Süreçleri</h2>
                                                    <h3>1. Analiz ve Planlama</h3>
                                                    <p>
                                                        Projenin ihtiyaçlarını belirlemek için detaylı analiz
                                                        yapılır. Bu aşamada, işletmenizin hedefleri ve
                                                        teknik gereksinimleri netleştirilir.
                                                    </p>
                                                    <h3>2. Tasarım</h3>
                                                    <p>
                                                        Kullanıcı dostu arayüzlerin oluşturulması ve estetik bir
                                                        tasarımın geliştirilmesi bu aşamanın temelini oluşturur.
                                                    </p>
                                                    <h3>3. Geliştirme</h3>
                                                    <p>
                                                        Belirlenen teknoloji yığını (tech stack) kullanılarak yazılım
                                                        geliştirilir. Süreç boyunca kalite standartlarına uygun
                                                        şekilde ilerlenir.
                                                    </p>
                                                    <h3>4. Test ve Entegrasyon</h3>
                                                    <p>
                                                        Geliştirilen yazılım, test süreçlerinden geçirilir ve diğer
                                                        sistemlerle entegrasyonu sağlanır.
                                                    </p>
                                                    <h3>5. Teslim ve Destek</h3>
                                                    <p>
                                                        Proje teslim edildikten sonra, gerektiğinde bakım ve destek
                                                        hizmetleri sunulur.
                                                    </p>
                                                    <h2>Hizmetlerim</h2>
                                                    <ul>
                                                        <li>Özel yazılım geliştirme</li>
                                                        <li>API entegrasyonları</li>
                                                        <li>Mobil ve web uygulamaları</li>
                                                        <li>Veritabanı yönetimi</li>
                                                    </ul>
                                                    <p>
                                                        Proje bazlı yazılım çözümleri hakkında daha fazla bilgi
                                                        almak ve işletmenize değer katacak projeleri birlikte
                                                        geliştirmek için iletişime geçebilirsiniz.
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
