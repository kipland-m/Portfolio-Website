import React from "react";

import stock0 from './images/stock0.jpg'
import stock1 from './images/stock1.webp'

// Will contain all data for each post
const blogPosts = [
    {
      image: stock0,
      title: 'Recent',
      author: 'John Doe',
      date: 'September 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
        image: stock1,
        title: 'Recent',
        author: 'John Doe',
        date: 'September 1, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    }
  ];

  function BlogPost({ blogPosts }) {
    return (
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="blog-post-image">
              <img src={post.image} alt={post.title}/>
            </div>
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

function Home() {
    return(
    <div className="home">

      <div className='intro'>
      I'm a Python developer with expertise in
      APIs and data manipulation. 
      Explore my portfolio to see how I leverage 
      Python for impactful solutions.
      </div>
      <BlogPost blogPosts={blogPosts} />

     </div>
    );
}

export default Home;