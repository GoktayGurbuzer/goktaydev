import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service2() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <div className="row mb-50 mb-sm-30">
            <div className="col-md-10">
              <p className="text-gray">
                Her proje, ihtiyaçlara özel çözümler üretmek için bir fırsattır. Dijital dünyada fark yaratmak, modern teknolojileri yaratıcı fikirlerle birleştirmekten geçer. İşinizi büyütmek ve dijital varlığınızı güçlendirmek için yanınızdayım.
              </p>

              <p className="text-gray mb-0">
                Modern teknolojilerle tasarlanmış, etkili ve sürdürülebilir çözümler üretmek benim önceliğimdir. Her bir projeyi detaylı bir şekilde ele alarak, iş hedeflerinizi en iyi şekilde destekleyen dijital platformlar inşa ediyorum. Hız, güvenlik ve kullanıcı deneyimini ön planda tutarak işinizi dijitalde büyütmenize yardımcı oluyorum.
              </p>
            </div>
          </div>

          <ul className="nav nav-tabs services-tabs" role="tablist">
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Özel Web Sitesi Geliştirme <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Sistem Entegrasyonu ve Otomasyon <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                SEO ve Dijital Pazarlama <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Google Ürünleri Yönetimi <span className="number">04</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Özel Web Sitesi Geliştirme</h4>
                  <p className="text-gray mb-0">
                    Firmanızın veya bireysel projelerinizin ihtiyaçlarına özel, kullanıcı dostu, hızlı ve performans odaklı web siteleri tasarlayıp geliştiriyorum. Tasarım sürecinden yayınlanma aşamasına kadar tüm süreçlerde modern teknolojiler kullanarak, hedef kitlenize hitap eden profesyonel bir platform oluşturuyorum.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/ozel-web-sitesi-gelistirme.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Sistem Entegrasyonu ve Otomasyon</h4>
                  <p className="text-gray mb-0">
                    İş süreçlerinizi dijitalleştirerek verimliliğinizi artıracak sistem entegrasyonları ve otomasyon çözümleri sunuyorum. Mevcut sistemlerinizi bir araya getirerek tüm süreçlerin uyum içinde çalışmasını sağlıyor ve teknolojiyi işinizin hizmetine sunuyorum.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/sistem-entegrasyonu-ve-otomasyon.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">SEO ve Dijital Pazarlama</h4>
                  <p className="text-gray mb-0">
                    Arama motorlarında üst sıralarda yer almak ve hedef kitlenize ulaşmak için etkili SEO stratejileri oluşturuyorum. Teknik optimizasyonlardan içerik planlamasına kadar her detayı dikkate alarak web sitenizin dijital dünyada fark yaratmasını sağlıyorum.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/seo-ve-dijital-pazarlama.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Google Ürünleri Yönetimi</h4>
                  <p className="text-gray mb-0">
                    Google Ads, Analytics ve My Business gibi araçlarla işletmenizin çevrimiçi görünürlüğünü artırarak daha geniş bir kitleye ulaşmanızı sağlıyorum. Hedefli reklam kampanyaları ve analizlerle dijital pazarlama stratejilerinizi güçlendiriyorum.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/google-urunleri-yonetimi.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
