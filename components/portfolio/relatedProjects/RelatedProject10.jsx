"use client";
import { portfolios2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProject10() {
  return (
    <div className="container relative">
      <div className="text-center mb-60 mb-sm-40">
        <h2 className="section-title-small">Diğer Referanslarım</h2>
      </div>
      <Gallery>
        <ul className="works-grid work-grid-4 work-grid-gut hover-white work-grid-hover-alt">
          {portfolios2.slice(0, 4).map((item, index) => (
            <li key={index} className={"work-item   "}>
                <Link
                  href={`/referanslarim/${item.id}`}
                  className={"work-ext-link"}
                >
                  <div className="work-img">
                    <div className="work-img-bg " />
                    <Image
                      width={650}
                      height={773}
                      src={item.bigImage}
                      alt={item.description}
                      data-wow-delay={item.delay}
                    />
                  </div>
                  <div className="work-intro text-start">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.description}</div>
                  </div>
                </Link>
            </li>
          ))}
        </ul>{" "}
      </Gallery>
    </div>
  );
}
