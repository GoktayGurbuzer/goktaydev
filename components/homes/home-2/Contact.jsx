"use client";

export default function Contact({ heading }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-70">
          <p className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">
              {heading ? heading : "Benimle İletişime Geçin"}
            </span>
            <span className="text-outline-1">
              {heading ? heading : "Benimle İletişime Geçin"}
            </span>
            <span className="text-outline">
              {heading ? heading : "Benimle İletişime Geçin"}
            </span>
          </p>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            Projeleriniz ve sorularınız için benimle kolayca iletişime geçebilirsiniz. Hedeflerinizi birlikte gerçeğe dönüştürelim!
          </p>
          <div>
            <a
              href="mailto:goktaygurbuzer@gmail.com"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              goktaygurbuzer@gmail.com
            </a>
          </div>
          <div>
            <a
              href="tel:+905077270909"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              +90 507 727 09 09
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form wow fadeInUp"
            id="contact_form"
          >
            {/* Name */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="name" className="mb-0 mb-sm-10 me-3">
                Adınız
              </label>
              <div className="flex-grow-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Lütfen adınızı giriniz"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                E-Posta Adresiniz
              </label>
              <div className="flex-grow-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Lütfen e-posta adresinizi giriniz"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="mb-sm-10">
                Nasıl Yardımcı Olabİlİrİm?
              </label>
              <textarea
                name="message"
                id="message"
                className="input-sm form-control underline"
                style={{ height: 120 }}
                placeholder="Projeniz hakkında kısa bir bilgi verebilir misiniz?"
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                {/* Button */}
                <button
                  className="submit_btn btn btn-mod btn-circle btn-white btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">Gönder</span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      Gönder
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip pt-30 pt-sm-20">
                  <i className="icon-info size-16" /> Tüm alanlar zorunludur. Formu göndererek <a href="#">Şartlar &amp; Koşullar</a> ve{" "}
                  <a href="#">Gizlilik Politikası</a> kabul etmiş olursunuz.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}
