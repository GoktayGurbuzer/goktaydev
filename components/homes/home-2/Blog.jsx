import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { parseStringPromise } from "xml2js";

// Türkçe tarih formatı için
const MONTHS_TR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

function formatDateToTurkish(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = MONTHS_TR[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

let cachedBlogs = null;
let cacheTime = 0;

async function getBlogs() {
  const CACHE_DURATION = 1000 * 60 * 10; // 10 dakika

  if (cachedBlogs && Date.now() - cacheTime < CACHE_DURATION) {
    return cachedBlogs;
  }

  try {
    const rssUrl = "https://medium.com/feed/@goktaygurbuzer";
    const response = await axios.get(rssUrl);
    const xml = response.data;

    const result = await parseStringPromise(xml);

    cachedBlogs = result.rss.channel[0].item.map((item) => {
      const encodedContent = item["content:encoded"]?.[0] || "";
      const imgTagMatch = encodedContent.match(/<img.*?src="(.*?)"/);
      const firstImgSrc = imgTagMatch ? imgTagMatch[1] : null;

      return {
        title: item.title[0],
        description: item.description?.[0] || "",
        image: firstImgSrc,
        link: item.link?.[0] || "",
        date: formatDateToTurkish(item.pubDate),
      };
    });

    cacheTime = Date.now();
    return cachedBlogs;
  } catch (error) {
    console.error("RSS verisi alınırken hata oluştu:", error);
    return [];
  }
}

export default async function Blog() {
  const blogs = await getBlogs();

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
          {blogs.map((blog, index) => (
              <div
                  key={index}
                  className={`post-prev-2 col-md-6 col-lg-4 
              ${index === 0 ? "mt-140 mt-md-0" : ""}
              ${index === 2 ? "mt-n140 mt-md-0" : ""}
            `}
              >
                <div className="post-prev-2-img">
                  <Link href={blog.link} target="_blank">
                    <Image
                        width={700}
                        height={479}
                        src={blog.image || "/default-image.jpg"} // Varsayılan görsel
                        alt={blog.title || "Blog image"}
                    />
                  </Link>
                </div>
                <h4 className="post-prev-2-title">
                  <Link href={blog.link} target="_blank">
                    {blog.title}
                  </Link>
                </h4>
                <div className="post-prev-2-info">{blog.date}</div>
              </div>
          ))}
        </div>
      </div>
  );
}
