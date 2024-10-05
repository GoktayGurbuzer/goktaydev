"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import data from './Data/flow';

export default function Akis() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // data array'ini kopyalayıp id değerine göre ters sıralama
        const sortedData = [...data].sort((a, b) => b.id - a.id);
        setPosts(sortedData);
    }, []);

    return (
        <div className="space-y-8 p-4">
            {Array.isArray(posts) && posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="bg-gray-900 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center space-x-4">
                            <Image
                                src={post.image}
                                alt={post.username}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <h2 className="text-xl text-white font-bold">{post.title}</h2>
                                <p className="text-gray-400">{post.username} • {post.date}</p>
                                <p className="text-green-500">{post.feeling}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}></p>

                        {post.article_link && post.article_link.startsWith('http') && (
                            <a href={post.article_link} className="text-blue-400 hover:underline">
                                Read more
                            </a>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-white">Yükleniyor...</p> // Eğer dizi yoksa bir yükleniyor mesajı göster
            )}
        </div>
    );
}
