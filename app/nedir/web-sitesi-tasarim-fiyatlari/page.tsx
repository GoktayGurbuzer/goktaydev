import AnimatedText from "@/components/common/AnimatedText";
import {boldMultipageDark, menuItemsDark} from "@/data/menu";
import Header2 from "@/components/headers/Header2";
import React from "react";
import Footer5 from "@/components/footers/Footer5";
import dynamic from "next/dynamic";
import Image from 'next/image'

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false, // Disable server-side rendering
    }
);

export const metadata = {
    title: "Web Tasarım Nedir? 2024 Güncel Rehberi",
    description:
        "Web tasarım, işletmelerin ve bireylerin dijital dünyada öne çıkmasını sağlayan bir süreçtir. Web tasarım hakkında bilgi sahibi olmak ve 2024 trendlerini öğrenmek için rehberimizi okuyun.",
    keywords: [
        "web tasarım nedir",
        "web tasarım fiyatları",
        "web tasarım trendleri 2024",
        "web sitesi tasarımı",
        "web tasarım rehberi",
        "responsive tasarım",
        "modern web tasarımı",
        "UX/UI tasarımı",
        "kurumsal web tasarımı",
        "e-ticaret web tasarımı",
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
        url: "https://goktay.dev/web-tasarim",
        title: "Web Tasarım Nedir? 2025 Güncel Rehberi",
        description:
            "Web tasarım, işletmelerin ve bireylerin dijital dünyada öne çıkmasını sağlayan bir süreçtir. Web tasarım hakkında bilgi sahibi olmak ve 2024 trendlerini öğrenmek için rehberimizi okuyun.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                width: 1200,
                height: 630,
                alt: "Web Tasarım Nedir?",
            },
        ],
    },
    alternates: {
        canonical: "https://goktay.dev/web-tasarim",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Tasarım Nedir? 2025 Güncel Rehberi",
        description:
            "Web tasarım, işletmelerin ve bireylerin dijital dünyada öne çıkmasını sağlayan bir süreçtir. Web tasarım hakkında bilgi sahibi olmak ve 2024 trendlerini öğrenmek için rehberimizi okuyun.",
        images: ["https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        site: "@GoktayGurbuzer",
    },
};


export default function MainBlogSinglePageFullWidthDark({ params }){
    const title = "Web Tasarım Nedir? 2025 Güncel Rehberi";
    return (
        <>
            <div className="theme-main">
                <div className="dark-mode">
                    <div className="page bg-dark-1" id="top">
                        <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
                            {" "}
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
                                        {/* Section Content */}
                                        <div className="text-center">
                                            <div className="row">
                                                {/* Page Title */}
                                                <div className="col-md-8 offset-md-2">
                                                    <h1 className="hs-title-1 mb-20">
                                                    <span
                                                        className="wow charsAnimIn"
                                                        data-splitting="chars"
                                                    >
                                                      <AnimatedText
                                                          text={title}
                                                      />
                                                    </span>
                                                    </h1>

                                                </div>
                                                {/* End Page Title */}
                                            </div>
                                        </div>
                                        {/* End Section Content */}
                                    </div>
                                </ParallaxContainer>
                            </section>
                            <>
                                {/* Section */}
                                <section className="page-section bg-dark-1 light-content">
                                    <div className="container relative">
                                        <div className="row">
                                            {/* Content */}
                                            <div className="col-lg-8 offset-lg-2">
                                                {/* Post */}
                                                <div className="blog-item mb-80 mb-xs-40">
                                                    <div className="blog-item-body">
                                                        <p className="lead">
                                                            <a href="https://goktay.dev"
                                                               title="Profesyonel Web Tasarım Hizmetleri">Web sitesi
                                                                tasarımı</a>, dijital dünyada var olmak isteyen
                                                            işletmeler ve bireyler için kritik bir adımdır. Ancak, "web
                                                            sitesi tasarım fiyatları ne kadar?" sorusunun cevabı birçok
                                                            faktöre bağlıdır.
                                                        </p>
                                                        <Image
                                                            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                            alt="Web Sitesi Tasarımı"
                                                            width={850}
                                                            height={480}
                                                            title="Web Sitesi Tasarım Fiyatları"
                                                        />
                                                        <h2>Web Sitesi Tasarım Fiyatlarını Etkileyen Faktörler</h2>
                                                        <p>
                                                            Web sitesi tasarım fiyatlarını belirleyen birkaç önemli
                                                            faktör bulunmaktadır. İşte bunlardan bazıları:
                                                        </p>
                                                        <h3>1. Web Sitesinin Türü</h3>
                                                        <p>Yapılacak web sitesinin amacı ve kapsamı fiyatlandırmayı
                                                            doğrudan etkiler:</p>
                                                        <ul>
                                                            <li><strong>Kişisel Blog:</strong> Basit yapıda, az sayfa
                                                                içeren ve genellikle metin odaklı sitelerdir. Fiyatları
                                                                daha uygun olabilir.
                                                            </li>
                                                            <li><strong>Kurumsal Web Sitesi:</strong> Marka imajını
                                                                yansıtacak şekilde tasarlanır. Daha fazla sayfa ve özel
                                                                tasarım gereksinimleri fiyatı artırabilir.
                                                            </li>
                                                            <li><strong>E-Ticaret Sitesi:</strong> Ürün yönetimi, ödeme
                                                                sistemleri entegrasyonu gibi özellikler nedeniyle daha
                                                                yüksek maliyetlidir.
                                                            </li>
                                                        </ul>
                                                        <h3>2. Kullanılacak Teknolojiler</h3>
                                                        <p>Web sitesinde kullanılan yazılım teknolojileri de fiyatları
                                                            etkiler. Örneğin:</p>
                                                        <ul>
                                                            <li><strong>WordPress:</strong> Daha uygun maliyetlidir ve
                                                                hızlı bir çözüm sunar.
                                                            </li>
                                                            <li><strong>Özel Kodlama:</strong> Özgün tasarım ve
                                                                işlevsellik için özel geliştirme yapılır, bu da maliyeti
                                                                artırır.
                                                            </li>
                                                        </ul>
                                                        <h3>3. Ek Özellikler ve Hizmetler</h3>
                                                        <p>Web sitesine eklenmesi planlanan özellikler de fiyatları
                                                            değiştirebilir:</p>
                                                        <ul>
                                                            <li><strong>SEO Hizmetleri:</strong> Sitenizin arama
                                                                motorlarında üst sıralarda yer alması için yapılan
                                                                çalışmalar.
                                                            </li>
                                                            <li><strong>Responsive Tasarım:</strong> Tüm cihazlarda
                                                                sorunsuz çalışan bir site tasarımı.
                                                            </li>
                                                            <li><strong>İçerik Yönetim Sistemi:</strong> Dinamik içerik
                                                                ekleme ve düzenleme imkanı.
                                                            </li>
                                                        </ul>
                                                        <Image
                                                            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                            alt="Web Sitesi Tasarımı ve Teknolojiler"
                                                            width={850}
                                                            height={480}
                                                            title="Web Sitesi Tasarımında Kullanılan Teknolojiler"
                                                        />
                                                        <h2>2025 Web Sitesi Tasarım Fiyatları</h2>
                                                        <p>2025 yılı itibarıyla web sitesi tasarım fiyatları aşağıdaki
                                                            gibi şekillenmektedir:</p>
                                                        <ul>
                                                            <li><strong>Kişisel Blog:</strong> 5.000₺ - 10.000₺</li>
                                                            <li><strong>Kurumsal Web Sitesi:</strong> 10.000₺ - 25.000₺
                                                            </li>
                                                            <li><strong>E-Ticaret Sitesi:</strong> 20.000₺ - 50.000₺
                                                                (özelliklere bağlı olarak daha yüksek olabilir)
                                                            </li>
                                                        </ul>
                                                        <h3>Neden Profesyonel Destek Almalısınız?</h3>
                                                        <p>
                                                            Bir web sitesini profesyonel bir ekibe yaptırmak, size zaman
                                                            kazandırır ve kaliteli bir sonuç sağlar. Ayrıca, teknik
                                                            bilgi gerektiren alanlarda hata yapma riskini de ortadan
                                                            kaldırır.
                                                        </p>
                                                        <Image
                                                            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                            alt="Web Sitesi Tasarım Süreci"
                                                            width={850}
                                                            height={480}
                                                            title="Profesyonel Web Sitesi Tasarımı"
                                                        />
                                                        <h2>Sonuç</h2>
                                                        <p>
                                                            Web sitesi tasarım fiyatları, ihtiyaçlarınıza ve bütçenize
                                                            göre değişiklik gösterebilir. Eğer kaliteli bir web sitesi
                                                            tasarımı istiyorsanız, fiyatı belirleyen faktörleri göz
                                                            önünde bulundurarak doğru hizmet sağlayıcısını seçmeniz
                                                            önemlidir.
                                                        </p>
                                                        <p>
                                                            Daha fazla bilgi için <a href="https://goktay.dev"
                                                                                     title="Web Tasarım Hizmetleri">web
                                                            tasarım hizmetlerimiz</a> sayfasını ziyaret edebilir veya
                                                            bizimle iletişime geçebilirsiniz!
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* End Post */}
                                            </div>
                                            {/* End Content */}
                                        </div>
                                    </div>
                                </section>

                                {/* End Section */}
                                {/* Divider */}
                                <hr className="mt-0 mb-0 white"/>
                                {/* End Divider */}

                            </>
                        </main>
                        <footer className="footer-1 bg-dark-2 light-content">
                            <Footer5/>
                        </footer>
                    </div>
                    {" "}
                </div>
            </div>
        </>
    );
}