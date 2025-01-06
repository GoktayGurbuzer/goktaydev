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
    title: "Uzman Freelance Kodlama: Profesyonel Çözümlerle Dijital Başarı",
    description:
        "Uzman freelance kodlama hizmetleriyle projelerinize profesyonel çözümler sunuyorum. Hızlı, güvenilir ve özelleştirilmiş yazılım ihtiyaçlarınız için rehberimizi okuyun.",
    keywords: [
        "uzman freelance kodlama",
        "freelance yazılımcı",
        "freelance kodlama hizmetleri",
        "freelance yazılım çözümleri",
        "profesyonel kodlama hizmetleri",
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
        url: "https://goktay.dev/nedir/uzman-freelance-kodlama",
        title: "Uzman Freelance Kodlama: Profesyonel Çözümlerle Dijital Başarı",
        description:
            "Uzman freelance kodlama hizmetleriyle projelerinize profesyonel çözümler sunuyorum. Hızlı, güvenilir ve özelleştirilmiş yazılım ihtiyaçlarınız için rehberimizi okuyun.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1514395659518-2e1c59302e99?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                width: 1200,
                height: 630,
                alt: "Uzman Freelance Kodlama",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/uzman-freelance-kodlama",
    },
    twitter: {
        card: "summary_large_image",
        title: "Uzman Freelance Kodlama: Profesyonel Çözümlerle Dijital Başarı",
        description:
            "Uzman freelance kodlama hizmetleriyle projelerinize profesyonel çözümler sunuyorum. Hızlı, güvenilir ve özelleştirilmiş yazılım ihtiyaçlarınız için rehberimizi okuyun.",
        images: [
            "https://images.unsplash.com/photo-1514395659518-2e1c59302e99?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark({ params }) {
    const title = "Uzman Freelance Kodlama: Profesyonel Çözümlerle Dijital Başarı";

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
                                                    <h2>Uzman Freelance Kodlama Nedir?</h2>
                                                    <p>
                                                        Uzman freelance kodlama, yazılım geliştirme alanında
                                                        deneyimli bir profesyonelden proje bazlı destek almanızı
                                                        sağlar. Esnek ve uygun maliyetli bir hizmet modelidir.
                                                    </p>
                                                    <Image
                                                        src="https://images.unsplash.com/photo-1514395659518-2e1c59302e99?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Uzman Freelance Kodlama"
                                                        width={850}
                                                        height={480}
                                                        title="Uzman Freelance Kodlama"
                                                    />
                                                    <h2>Freelance Kodlama Avantajları</h2>
                                                    <p>
                                                        Freelance kodlama hizmetlerinin işletmelere sunduğu temel
                                                        avantajlar şunlardır:
                                                    </p>
                                                    <ul>
                                                        <li>Özelleştirilmiş Çözümler: İhtiyaçlarınıza özel yazılım
                                                            çözümleri.
                                                        </li>
                                                        <li>Maliyet Verimliliği: Proje bazlı çalışmayla bütçe
                                                            tasarrufu.
                                                        </li>
                                                        <li>Hızlı Teslim: Deneyimli bir profesyonelden zamanında
                                                            teslimat.
                                                        </li>
                                                        <li>Esneklik: İhtiyacınıza uygun ölçeklenebilir yazılım.
                                                        </li>
                                                    </ul>
                                                    <h2>Uzman Freelance Kodlama Süreçleri</h2>
                                                    <h3>1. İhtiyaç Analizi</h3>
                                                    <p>
                                                        Projenizin kapsamını belirlemek ve teknik gereksinimlerinizi
                                                        anlamak için detaylı analiz yapılır.
                                                    </p>
                                                    <h3>2. Teknoloji Seçimi</h3>
                                                    <p>
                                                        Projeniz için en uygun teknoloji yığını (tech stack) belirlenir.
                                                        Örneğin, React.js ve Node.js gibi modern teknolojiler.
                                                    </p>
                                                    <h3>3. Yazılım Geliştirme</h3>
                                                    <p>
                                                        Kodlama sürecinde, proje planına uygun bir şekilde hızlı
                                                        ve kaliteli bir geliştirme yapılır.
                                                    </p>
                                                    <h3>4. Test ve Entegrasyon</h3>
                                                    <p>
                                                        Yazılımın doğru çalıştığından emin olmak için test süreçleri
                                                        gerçekleştirilir ve diğer sistemlerle entegrasyon sağlanır.
                                                    </p>
                                                    <h3>5. Teslim ve Destek</h3>
                                                    <p>
                                                        Projeniz tamamlandıktan sonra destek hizmetleri ile süreklilik
                                                        sağlanır.
                                                    </p>
                                                    <h2>Hizmetlerim</h2>
                                                    <p>
                                                        - Web ve mobil uygulama geliştirme
                                                        <br/>
                                                        - API entegrasyonu
                                                        <br/>
                                                        - Veritabanı yönetimi
                                                        <br/>
                                                        - Performans optimizasyonu
                                                    </p>
                                                    <p>
                                                        Freelance kodlama hizmetlerimle projelerinizi hayata
                                                        geçirmek için iletişime geçebilirsiniz.
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
