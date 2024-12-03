import AnimatedText from "@/components/common/AnimatedText";
import React from "react";

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content pt-20 pt-md-0 text-center">
        <p className="section-title-tiny font-alt mb-40 mb-sm-30 wow fadeInUp">
          Ben Göktay Gürbüzer
        </p>
        <h1 className="hidden">Full stack Web Developer</h1>
        <span className="hs-title-4 font-alt mb-60 mb-sm-40">
          <AnimatedText text="Full stack Web Developer" />
          <br />
          <AnimatedText text="& Freelance Çözümler Sunuyorum." />
        </span>
        <div
          className="local-scroll wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          <a
            href="#portfolio"
            title="Full stack Web Developer Portfolio"
            className="btn btn-mod btn-circle btn-white btn-ellipse"
            data-btn-animate="ellipse"
          >
            <span className="btn-ellipse-inner">
              <span className="btn-ellipse-unhovered">Yaptığım İşler</span>
              <span className="btn-ellipse-hovered" aria-hidden="true">
                Yaptığım İşler
              </span>
            </span>
          </a>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-4 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" title="Full stack Web Developer Hakkımda" className="scroll-down-4">
            <i className="icon-arrow-down1 size-22" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Status */}
      <div className="hs-status wow fadeInUp" data-wow-offset={0}>
        Ketçap Ajans - Yazılım Geliştirme Proje Lideri
      </div>
      {/* End Status */}
    </div>
  );
}
