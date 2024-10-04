const BlogPost = ({ params }) => {
    const { slug } = params;

    return <h1>Blog Yazısı: {slug}</h1>;
};

export default BlogPost;
