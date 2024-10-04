import Image from "next/image";
import posts from './Data/flow';
import React from "react";


export default function Home() {
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
                      <p className="mt-4 text-gray-300">dangerouslySetInnerHTML={{ __html: postData.content }}</p>

                      {/* Koşullu olarak Read More linkini gösteriyoruz */}
                      {post.article_link && (
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
