// app/akis/layout.js
export const metadata = {
    title: 'Göktay Gürbüzer | Yorumlar - Freelance Full-Stack Developer',
    description: 'Göktay Gürbüzer hakkında müşterilerin yorumlarını okuyun ve projeler hakkında geri bildirimlerinizi paylaşın. Freelance Full-Stack Developer ile işbirliği fırsatlarını keşfedin.',
    keywords: 'freelance full-stack developer yorumları, yazılım projeleri geri bildirim, Göktay Gürbüzer yorumları',

    // Canonical URL
    canonical: 'https://goktay.dev/yorumun',

    // Robots Tag
    robots: 'index, follow',

    // Author
    author: 'Göktay Gürbüzer',

    // Publisher
    publisher: 'goktay.dev',
};


export default function YorumunLayout({ children }) {
    return <>{children}</>;
}
