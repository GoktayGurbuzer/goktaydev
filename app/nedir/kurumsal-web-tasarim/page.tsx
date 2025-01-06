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
    title: "Kurumsal Web Tasarım: Profesyonel Çözümlerle Dijital Dünyada Öne Çıkın",
    description:
        "Kurumsal web tasarım, markanızın profesyonel imajını güçlendirir ve müşteri güvenini artırır. İşletmeniz için doğru tasarım çözümlerini öğrenin.",
    keywords: [
        "kurumsal web tasarım",
        "profesyonel web tasarım",
        "kurumsal web tasarım fiyatları",
        "kurumsal web tasarım çözümleri",
        "şirketler için web tasarım",
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
        url: "https://goktay.dev/nedir/kurumsal-web-tasarim",
        title: "Kurumsal Web Tasarım: Profesyonel Çözümlerle Dijital Dünyada Öne Çıkın",
        description:
            "Kurumsal web tasarım, markanızın profesyonel imajını güçlendirir ve müşteri güvenini artırır. İşletmeniz için doğru tasarım çözümlerini öğrenin.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1519397944230-cccc7d6a5a9c?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
                width: 1200,
                height: 630,
                alt: "Kurumsal Web Tasarım",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/nedir/kurumsal-web-tasarim",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kurumsal Web Tasarım: Profesyonel Çözümlerle Dijital Dünyada Öne Çıkın",
        description:
            "Kurumsal web tasarım, markanızın profesyonel imajını güçlendirir ve müşteri güvenini artırır. İşletmeniz için doğru tasarım çözümlerini öğrenin.",
        images: [
            "https://images.unsplash.com/photo-1519397944230-cccc7d6a5a9c?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3",
        ],
        site: "@GoktayGurbuzer",
    },
};

export default function MainBlogSinglePageFullWidthDark() {
    const title = "Kurumsal Web Tasarım: Profesyonel Çözümlerle Dijital Dünyada Öne Çıkın";

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
                                                    <h2>Kurumsal Web Tasarım Nedir?</h2>
                                                    <p>
                                                        Kurumsal web tasarım, işletmelerin dijital dünyadaki varlığını
                                                        güçlendirmek ve marka kimliğini profesyonel bir şekilde
                                                        yansıtmak
                                                        için tasarlanmış özel web siteleridir. Bu tür web siteleri,
                                                        yalnızca
                                                        görsel olarak etkileyici değil, aynı zamanda kullanıcı dostu,
                                                        SEO
                                                        uyumlu ve işlevsel olmalıdır.
                                                    </p>
                                                    <p>
                                                        Kurumsal web tasarımlar, işletmenizin misyonunu, vizyonunu ve
                                                        değerlerini
                                                        ziyaretçilere en iyi şekilde aktarırken aynı zamanda
                                                        müşterilerle
                                                        güvenilir bir bağ kurmanıza yardımcı olur. Profesyonel bir web
                                                        tasarım,
                                                        müşteri algısını olumlu yönde etkiler ve dönüşüm oranlarını
                                                        artırır.
                                                    </p>
                                                    <h2>Kurumsal Web Tasarımın Avantajları</h2>
                                                    <p>
                                                        Profesyonel bir kurumsal web tasarım, işletmenize birçok avantaj
                                                        sağlar:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Marka Güveni Artırır: Profesyonel bir web tasarımı,
                                                            markanızın
                                                            güvenilirliğini artırır ve müşterilere kaliteli bir hizmet
                                                            sunduğunuzu
                                                            gösterir.
                                                        </li>
                                                        <li>
                                                            SEO Uyumlu Yapı: Kurumsal web siteleri, arama
                                                            motorlarında daha
                                                            üst sıralarda yer almanıza yardımcı olacak şekilde optimize
                                                            edilir.
                                                        </li>
                                                        <li>
                                                            Mobil Uyumluluk: Günümüzde ziyaretçilerin büyük bir
                                                            kısmı mobil
                                                            cihazlardan erişim sağladığı için responsive tasarım büyük
                                                            önem taşır.
                                                        </li>
                                                        <li>
                                                            İşlevsellik ve Kullanıcı Deneyimi: İyi bir tasarım,
                                                            ziyaretçilerin
                                                            web sitenizde kolayca gezinmesini ve ihtiyaç duydukları
                                                            bilgilere
                                                            hızlıca ulaşmasını sağlar.
                                                        </li>
                                                    </ul>
                                                    <h2>Kurumsal Web Tasarım Sürecinde Neler Yapılır?</h2>
                                                    <p>
                                                        Kurumsal web tasarım süreci, belirli aşamalarla ilerler ve
                                                        işletmenizin
                                                        ihtiyaçlarına özel olarak planlanır:
                                                    </p>
                                                    <ol>
                                                        <li>
                                                            İhtiyaç Analizi: İşletmenizin hedefleri ve ihtiyaçları
                                                            detaylı bir
                                                            şekilde analiz edilir.
                                                        </li>
                                                        <li>
                                                            Tasarım Konsepti Oluşturma: Marka kimliğinize uygun
                                                            görsel
                                                            tasarım konsepti belirlenir.
                                                        </li>
                                                        <li>
                                                            Geliştirme ve Kodlama: Web sitesinin teknik altyapısı
                                                            oluşturulur ve
                                                            işlevsellikler eklenir.
                                                        </li>
                                                        <li>
                                                            Test ve Optimizasyon: Web sitesi yayınlanmadan önce
                                                            çeşitli testlerden
                                                            geçirilir ve performansı optimize edilir.
                                                        </li>
                                                        <li>
                                                            Yayınlama ve Destek: Web sitesi yayınlanır ve düzenli
                                                            bakım hizmetleri
                                                            sunulur.
                                                        </li>
                                                    </ol>
                                                    <h2>Kurumsal Web Tasarımda Dikkat Edilmesi Gerekenler</h2>
                                                    <p>
                                                        Kurumsal web tasarım sürecinde şu noktalara dikkat edilmesi
                                                        önemlidir:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Kullanıcı Deneyimi (UX): Ziyaretçilerin web sitesinde
                                                            rahatça
                                                            gezinmesi sağlanmalıdır.
                                                        </li>
                                                        <li>
                                                            Hız ve Performans: Web sitenizin yüklenme hızı,
                                                            kullanıcı deneyimi
                                                            ve SEO açısından kritik öneme sahiptir.
                                                        </li>
                                                        <li>
                                                            Görsel Uyum: Tasarımın marka kimliğiyle uyumlu olması,
                                                            kurumsallığı vurgular.
                                                        </li>
                                                    </ul>
                                                    <h2>Kurumsal Web Tasarımın İşletmenize Katkıları</h2>
                                                    <p>
                                                        Kurumsal bir web sitesi, işletmenizin dijital dünyadaki
                                                        varlığını güçlendirir
                                                        ve rekabet avantajı sağlar. Ziyaretçilerinize profesyonel bir
                                                        izlenim
                                                        sunarak müşteri güvenini artırır. Ayrıca, SEO uyumlu yapısı
                                                        sayesinde
                                                        daha geniş bir kitleye ulaşmanıza olanak tanır. Doğru
                                                        tasarlanmış bir web
                                                        sitesi, uzun vadeli iş hedeflerinize ulaşmanıza büyük katkı
                                                        sağlar.
                                                    </p>
                                                    <p>
                                                        Eğer işletmeniz için kurumsal bir web tasarım düşünüyorsanız,
                                                        profesyonel
                                                        çözümlerle hedeflerinize ulaşabilirsiniz. Özel ihtiyaçlarınıza
                                                        uygun
                                                        tasarım ve geliştirme hizmetleriyle markanızı dijital dünyada
                                                        öne çıkarabilirsiniz.
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
