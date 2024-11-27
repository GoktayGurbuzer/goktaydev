/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://goktay.dev", // Ana site URL'nizi buraya ekleyin
    generateRobotsTxt: true, // robots.txt otomatik oluşturulsun mu?
    changefreq: "daily", // Sayfa değişim sıklığı
    priority: 0.7, // Sayfaların varsayılan önceliği
    sitemapSize: 5000, // Her bir sitemap dosyasındaki maksimum URL sayısı
    exclude: ["/admin", "/api/*"], // Hariç tutulacak sayfalar
};

module.exports = config;
