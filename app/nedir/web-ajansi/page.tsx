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
    title: "Web Ajansı: Dijital Başarının Anahtarı",
    description:
        "Web ajansı, işletmenizin dijital dünyadaki başarısını artırmak için web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri sunar. Doğru ajansı nasıl seçeceğinizi öğrenin.",
    keywords: [
        "web ajansı",
        "web ajansı hizmetleri",
        "profesyonel web ajansı",
        "web tasarım ajansı",
        "dijital web ajansı",
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
        url: "https://goktay.dev/nedir/web-ajansi",
        title: "Web Ajansı: Dijital Başarının Anahtarı",
        description:
            "Web ajansı, işletmenizin dijital dünyadaki başarısını artırmak için web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri sunar. Doğru ajansı nasıl seçeceğinizi öğrenin.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b1?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
                width: 1200,
                height: 630,
                alt: "Web Ajansı",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/web-ajansi",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Ajansı: Dijital Başarının Anahtarı",
        description:
            "Web ajansı, işletmenizin dijital dünyadaki başarısını artırmak için web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri sunar. Doğru ajansı nasıl seçeceğinizi öğrenin.",
        images: [
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b1?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark() {
    const title = "Web Ajansı: Dijital Başarının Anahtarı";

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
                                                    <h2>Web Ajansı Nedir?</h2>
                                                    <p>
                                                        Web ajansı, işletmelere dijital dünyada başarılı olmaları için
                                                        kapsamlı hizmetler sunan bir profesyonel ekip veya şirkettir.
                                                        Bu hizmetler genellikle web tasarım, yazılım geliştirme,
                                                        dijital pazarlama, SEO ve içerik yönetimi gibi alanları kapsar.
                                                    </p>
                                                    <p>
                                                        Web ajansları, işletmenizin ihtiyaçlarını anlamak ve bu
                                                        ihtiyaçlara uygun yaratıcı ve teknik çözümler sunmak için
                                                        çalışır. Web ajansıyla çalışmak, markanızın dijital dünyada
                                                        güçlü bir varlık oluşturmasına ve hedef kitlenizle etkili bir
                                                        şekilde iletişim kurmasına yardımcı olabilir.
                                                    </p>
                                                    <h2>Web Ajanslarının Sunduğu Hizmetler</h2>
                                                    <p>
                                                        Bir web ajansı, işletmenizin dijital dünyadaki başarısını
                                                        artırmak
                                                        için çeşitli hizmetler sunar:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Web Tasarım ve Geliştirme: Kullanıcı dostu, modern ve
                                                            mobil
                                                            uyumlu web siteleri tasarlar ve geliştirir.
                                                        </li>
                                                        <li>
                                                            SEO ve Dijital Pazarlama: Arama motorlarında görünürlüğü
                                                            artırmak için SEO stratejileri ve dijital pazarlama
                                                            kampanyaları
                                                            yürütür.
                                                        </li>
                                                        <li>
                                                            E-Ticaret Çözümleri: Online mağazanız için altyapı
                                                            geliştirme,
                                                            ödeme entegrasyonları ve kullanıcı deneyimi optimizasyonu
                                                            sağlar.
                                                        </li>
                                                        <li>
                                                            Marka ve İçerik Yönetimi: Marka kimliğinizi güçlendiren
                                                            ve
                                                            hedef kitlenize hitap eden içerikler oluşturur.
                                                        </li>
                                                        <li>
                                                            Teknik Destek ve Güncellemeler: Web sitenizin
                                                            performansını
                                                            sürdürmek ve güncel tutmak için teknik destek sunar.
                                                        </li>
                                                    </ul>
                                                    <h2>Doğru Web Ajansı Nasıl Seçilir?</h2>
                                                    <p>
                                                        İşletmeniz için doğru web ajansını seçmek, dijital başarınız
                                                        için
                                                        kritik öneme sahiptir. Web ajansı seçerken şu noktalara dikkat
                                                        edebilirsiniz:
                                                    </p>
                                                    <ol>
                                                        <li>
                                                            Referansları İnceleyin: Web ajansının daha önce
                                                            tamamladığı
                                                            projelere göz atarak kalite ve uzmanlık düzeyini
                                                            değerlendirin.
                                                        </li>
                                                        <li>
                                                            Hizmet Çeşitliliği: İhtiyacınıza uygun hizmetleri sunan
                                                            bir
                                                            ajansla çalıştığınızdan emin olun.
                                                        </li>
                                                        <li>
                                                            İletişim ve İşbirliği: Ajansın iletişim becerileri ve
                                                            işbirliği
                                                            yapma kabiliyeti önemlidir.
                                                        </li>
                                                        <li>
                                                            Teknik Yeterlilik: Ajansın kullandığı teknolojiler ve
                                                            çalışma
                                                            yöntemleri projelerinizin başarısında belirleyici olacaktır.
                                                        </li>
                                                    </ol>
                                                    <h2>Web Ajansıyla Çalışmanın Avantajları</h2>
                                                    <p>
                                                        Bir web ajansıyla çalışmak, işletmenize çeşitli avantajlar
                                                        sağlar. Profesyonel bir ekip, projenizi zamanında ve bütçenize
                                                        uygun bir şekilde tamamlayabilir. Ayrıca, teknik detaylarla
                                                        uğraşmak yerine işinize odaklanabilirsiniz.
                                                    </p>
                                                    <p>
                                                        Web ajansları, işletmenizin dijital dünyada öne çıkmasını
                                                        sağlayan yenilikçi çözümler sunar. Web sitenizin kullanıcı
                                                        deneyimini artırarak daha fazla müşteri çekmenize ve marka
                                                        bilinirliğinizi güçlendirmenize yardımcı olabilir.
                                                    </p>
                                                    <h2>Web Ajansı ile İşletmenizi Bir Üst Seviyeye Taşıyın</h2>
                                                    <p>
                                                        Doğru web ajansıyla çalışarak dijital dünyada güçlü bir varlık
                                                        oluşturabilirsiniz. İster küçük bir işletme olun ister büyük
                                                        bir marka, web ajanslarının sunduğu hizmetlerle hedeflerinize
                                                        ulaşabilirsiniz. Profesyonel destek, işletmenizin gelecekteki
                                                        başarısının temellerini oluşturur.
                                                    </p>
                                                    <p>
                                                        İşletmenizin ihtiyaçlarına uygun bir web ajansı seçmek ve doğru
                                                        stratejilerle hedeflerinize ulaşmak için harekete geçin.
                                                        Dijital dünyada öne çıkmak için profesyonel çözümlerden
                                                        faydalanabilirsiniz.
                                                    </p>

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
                                                        Freelance yazılım projelerinizin planlama ve yönetim
                                                        aşamalarında
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
