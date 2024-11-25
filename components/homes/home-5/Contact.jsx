"use client";
import { contactItems } from "@/data/contact";
import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="row mt-n10 mb-60 mb-xs-40">
        <div className="col-md-10 offset-md-1">
          <div className="row">
            {/* Phone */}
            {contactItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`col-md-6 col-lg-4 mb-md-30 `}>
                  <div className="contact-item wow fadeScaleIn">
                    <div className="ci-icon">
                      <i className={item.iconClass} />
                    </div>
                    <h4 className="ci-title">{item.title}</h4>
                    <div className="ci-text large">{item.text}</div>
                    <div className="ci-link">
                      <a
                        href={item.link.url}
                        target={item.link.target}
                        rel={item.link.rel}
                      >
                        {item.link.text}
                      </a>
                    </div>{" "}
                  </div>
                </div>{" "}
              </React.Fragment>
            ))}

            {/* End Email */}
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form wow fadeInUp wch-unset"
            data-wow-delay=".5s"
            id="contact_form"
          >
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Adınız</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Lütfen adınızı giriniz"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">E-Posta</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Lütfen e-posta adresinizi giriniz"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Size nasıl yardımcı olabilirim?"
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0">
                  <i className="icon-info size-16" /> Tüm alanlar zorunludur. Formu göndererek <a href="#">Şartlar &amp; Koşullar</a> ve{" "}
                  <a href="#">Gizlilik Politikası</a> kabul etmiş olursunuz.
                </div>
              </div>
              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-10">
                  <button
                    type="submit"
                    id="submit_btn"
                    aria-controls="result"
                    className="submit_btn link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      Gönder
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      Gönder
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
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
        </div>
      </div>
      {/* End Contact Form */}
    </div>
  );
}
