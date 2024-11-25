import { blogs2 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-80">
          <p className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">Yazılım Dünyasına Dair</span>
            <span className="text-outline-1">Yazılım Dünyasına Dair</span>
            <span className="text-outline">Yazılım Dünyasına Dair</span>
          </p>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            Web geliştirme, modern yazılım teknolojileri ve sektörel haberler hakkında en güncel içeriklere ulaşın. Teknik makaleler için Medium, video anlatımları için YouTube kanalımı takip edebilirsiniz.
          </p>
          <div className="local-scroll">
            <Link
              href={`/bold-blog`}
              className="link-hover-anim underline align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">
                Tüm Haberler
              </span>
              <span
                className="link-strong link-strong-hovered"
                aria-hidden="true"
              >
                Tüm Haberler
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="row gy-4">
        {/* Post Item */}
        {blogs2.map((post, i) => (
          <div
            key={post.id}
            className={`post-prev-2 col-md-6 col-lg-4 
              ${i == 0 ? "mt-140 mt-md-0" : ""}
              ${i == 2 ? "mt-n140 mt-md-0" : ""}
            `}
            data-rellax-y=""
            data-rellax-speed={post.rellaxSpeed || 0}
            data-rellax-percentage={post.rellaxPercentage || 0}
          >
            <div className="post-prev-2-img">
              <Link href={`/bold-blog-single/${post.id}`}>
                <Image
                  width={700}
                  height={479}
                  src={post.imgSrc}
                  alt="Image Description"
                />
              </Link>
            </div>
            <h4 className="post-prev-2-title">
              <Link href={`/bold-blog-single/${post.id}`}>{post.title}</Link>
            </h4>
            <div className="post-prev-2-info">{post.date}</div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
      {/* End Blog Grid */}
    </div>
  );
}
