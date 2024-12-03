"use client";

import {portfolios13, portfolios2} from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
const filters = [
  { name: "All works", category: "all" },
  { name: "Branding", category: "branding" },
  { name: "Design", category: "design" },
  { name: "Development", category: "development" },
];
export default function Portfolio2({ gridClass = "" }) {
  const isotopContainer = useRef();

  return (
    <div className="full-wrapper position-relative">
      {/* Works Grid */}
      <ul
        ref={isotopContainer}
        className={`works-grid work-grid-gut clearfix hide-titles hover-white ${gridClass} masonry`}
        id="work-grid"
      >
        <Gallery>
          {portfolios2.map((item, index) => (
            <li key={index} className={"work-item mix  " + item.mix}>
              <Link
                  href={`/referanslarim/${item.id}`}
                  className={"work-lightbox-link mfp-image"}
              >
                <div className="work-img">
                  <div className="work-img-bg " />
                  <Image
                      width={650}
                      height={773}
                      src={item.imageUrl}
                      alt={item.description}
                      title={item.description}
                      data-wow-delay={item.delay}
                  />
                </div>
                <div className="work-intro text-start">
                  <h2 className="work-title">{item.title}</h2>
                  <div className="work-descr">{item.description}</div>
                </div>
              </Link>
            </li>
          ))}
        </Gallery>
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
