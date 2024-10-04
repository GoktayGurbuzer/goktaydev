// app/akis/layout.js
export const metadata = {
    title: 'Göktay Gürbüzer | Freelance Full-Stack Developer - Web ve Mobil Çözümler',
    description: 'Freelance Full-Stack Developer olarak, Node.js, React.js ve PostgreSQL ile web ve mobil uygulama çözümleri sunuyorum. İstanbul merkezli tam yığın yazılım geliştiriciniz.',
    keywords: 'freelance full-stack developer, Node.js developer, React.js developer, İstanbul yazılım geliştirici, tam yığın yazılım, web geliştirme, mobil geliştirme',

    // Canonical URL
    canonical: 'https://goktay.dev/akis',

    // Robots Tag
    robots: 'index, follow',

    // Author
    author: 'Göktay Gürbüzer',

    // Publisher
    publisher: 'goktay.dev',
};


export default function AkisLayout({ children }) {
    return <>{children}</>;
}
