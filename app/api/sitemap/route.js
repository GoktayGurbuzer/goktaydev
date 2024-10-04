import { NextResponse } from 'next/server';

const staticPages = [
    'https://goktay.dev/',
    'https://goktay.dev/hakkimda',
    'https://goktay.dev/blog',
    'https://goktay.dev/yorumun',
];

const getDynamicBlogUrls = async () => {
    // Dinamik olarak URL'leri çekebilirsiniz. Örneğin veritabanı veya API'den.
    const blogPosts = [
        {}
    ];

    return blogPosts.map(post => ({
        url: `https://goktay.dev/blog/${post.slug}`,
        lastModified: post.updatedAt,
    }));
};

export async function GET() {
    const dynamicBlogUrls = await getDynamicBlogUrls();

    const allUrls = [
        ...staticPages,
        ...dynamicBlogUrls.map((page) => page.url),
    ];

    const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map((url) => {
            return `
            <url>
              <loc>${url}</loc>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
