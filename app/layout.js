import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Menu from "@/app/Components/Menu";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Göktay Gürbüzer | Full-stack Web Geliştirici",
  description: "\"Profesyonel bir web sitesine mi ihtiyacınız var? Freelance Tam Yığın Geliştirici Göktay Gürbüzer ile çalışarak, Node.js ve modern web teknolojileri kullanılarak geliştirilen özelleştirilmiş çözümlerle işinizi dijital dünyada bir adım öne taşıyın.",
  keywords: 'freelance full-stack developer, Node.js developer, React.js developer, İstanbul yazılım geliştirici, tam yığın yazılım, web geliştirme, mobil geliştirme',
    // Canonical URL - Anasayfa için ana URL
    canonical: 'https://goktay.dev/',
    // Robots Tag - Arama motorlarının sayfayı indeksleyip bağlantıları takip etmesi için
    robots: 'index, follow',
    // Author - Sayfanın yazarı
    author: 'Göktay Gürbüzer',
    // Publisher - İçeriği yayımlayan kişi ya da platform
    publisher: 'goktay.dev',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr-TR">
      <body
        className={`${inter.className} antialiased container max-w-screen-md mx-auto`}
      >
      <Header />
      <Menu />
        <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
