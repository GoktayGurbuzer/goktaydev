// app/akis/layout.js
export const metadata = {
    title: 'Göktay Gürbüzer | Freelance Full-Stack Developer - Yazılım Uzmanı',
    description: 'Göktay Gürbüzer hakkında detaylı bilgi alın. Node.js, Next.js ve React.js ile ölçeklenebilir projeler geliştiren freelance full-stack developer. Profesyonel hizmetler sunuyorum.',
    keywords: 'freelance full-stack developer, Node.js, React.js, yazılım uzmanı, İstanbul yazılım geliştirici, tam yığın yazılım',

    // Canonical URL
    canonical: 'https://goktay.dev/hakkimda',

    // Robots Tag
    robots: 'index, follow',

    // Author
    author: 'Göktay Gürbüzer',

    // Publisher
    publisher: 'goktay.dev',
};


export default function HakkimdaLayout({ children }) {
    return <>{children}</>;
}
