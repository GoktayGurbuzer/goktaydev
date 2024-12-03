"use client";
import React, { useEffect, useState } from "react";
import { portfolios2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio({ desc }) {
    const [currentCategory, setCurrentCategory] = useState("all");
    const [filtered, setFiltered] = useState(portfolios2);

    useEffect(() => {
        if (currentCategory === "all") {
            setFiltered(portfolios2);
        } else {
            setFiltered(
                portfolios2.filter((item) => item.categories.includes(currentCategory))
            );
        }
    }, [currentCategory]);

  return (
    <div className="container">
      <div className="row mb-90 mb-md-40">
        <div className="col-lg-5 mb-md-30">
          {desc ? (
            <p className="section-text mb-0">
              <span className="section-title-inline">Hey!</span> Explore
              cutting-edge solutions that elevate brands and engage audiences.
            </p>
          ) : (
            <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-0">
              <span className="text-outline">Referanslarım</span>
            </h2>
          )}
        </div>
      </div>
      {/* Portfolio Grid */}
      <div id="isotope" className="mb-n100 mb-sm-n50">
        {/* Portfolio Item */}
        {filtered.map((item, index) => (
          <div
            key={index}
            className={`portfolio-2-item mb-100 mb-sm-50 mix ${item.categories.join(
              " "
            )}`}
          >
            <div className="row">
              {!(index % 2) ? (
                <>
                  <div className="col-md-8 mb-sm-30 order-md-first">
                    <div className="portfolio-2-image">
                      <Link href={`/referanslarim/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item.imageUrl}
                          alt={item.description}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className={`col-md-4  `}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/referanslarim/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfolio-2-descr">{item.description}</p>
                    <div>
                      <Link
                        href={`/referanslarim/${item.id}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Projeyi İncele
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Projeyi İncele
                        </span>
                      </Link>
                    </div>
                  </div>{" "}
                </>
              ) : (
                <>
                  <div className={`col-md-4`}>
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      <Link href={`/referanslarim/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfolio-2-descr">{item.description}</p>
                    <div>
                      <Link
                        href={`/referanslarim/${item.id}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Projeyi İncele
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Projeyi İncele
                        </span>
                      </Link>
                    </div>
                  </div>{" "}
                  <div
                    className={`col-md-8 mb-sm-30 ${
                      index % 2 ? "order-first order-md-last" : ""
                    } `}
                  >
                    <div className="portfolio-2-image">
                      <Link href={`/referanslarim/${item.id}`}>
                        <Image
                          width={1200}
                          height={819}
                          src={item.imageUrl}
                          alt={item.description}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>{" "}
                </>
              )}
            </div>
          </div>
        ))}
        {/* End Portfolio Item */}
      </div>
      {/* End Portfolio Grid */}
    </div>
  );
}
