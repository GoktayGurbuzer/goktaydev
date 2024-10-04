// app/akis/layout.js
export const metadata = {
    title: 'Blog - Göktay Gürbüzer | Freelance Full-Stack Developer',
    description: 'Yazılım dünyası, Node.js ve modern web geliştirme hakkında ipuçları ve rehberler. Freelance Full-Stack Developer olarak deneyimlerimi ve projelerimi blogumda paylaşmaktayım.',
    keywords: 'yazılım blogu, Node.js ipuçları, React.js rehberi, freelance yazılım blogu',

    // Canonical URL
    canonical: 'https://goktay.dev/blog',

    // Robots Tag
    robots: 'index, follow',

    // Author
    author: 'Göktay Gürbüzer',

    // Publisher
    publisher: 'goktay.dev',
};


export default function BlogLayout({ children }) {
    return <>{children}</>;
}
