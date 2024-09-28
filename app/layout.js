import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Göktay Gürbüzer | Full-stack Web Geliştirici",
  description: "\"Profesyonel bir web sitesine mi ihtiyacınız var? Freelance Tam Yığın Geliştirici Göktay Gürbüzer ile çalışarak, Node.js ve modern web teknolojileri kullanılarak geliştirilen özelleştirilmiş çözümlerle işinizi dijital dünyada bir adım öne taşıyın.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr-TR">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
