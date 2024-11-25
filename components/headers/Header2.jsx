"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

const links = [
  { href: "#home", text: "Anasayfa", className: "active" },
  { href: "#about", text: "Hakkımda" },
  { href: "#services", text: "Services" },
  { href: "#portfolio", text: "Portfolio" },
  { href: "#contact", text: "Contact" },
];
import Image from "next/image";
import Link from "next/link";

export default function Header2({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <Link href="/" className="logo font-alt">
          <Image
            src="/assets/images/logo-dark.svg"
            alt="Göktay Gürbüzer Full-stack Developer"
            width={105}
            height={34}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/logo-white.svg"
            alt="Göktay Gürbüzer Full-stack Developer"
            width={105}
            height={34}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          <li>
            <a href="/iletisim" className="opacity-1 no-hover">
              <span
                className="btn btn-mod btn-small btn-border btn-border-white btn-circle ttn"
                data-btn-animate="y"
              >
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">
                    Hadi konuşalım{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Hadi konuşalım{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
