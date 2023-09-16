import React from "react";
import { Link } from 'react-router-dom';


import stock0 from './images/stock0.jpg'
import stock1 from './images/stock1.webp'

// Will contain all data for each post
const blogPosts = [
    {
        image: stock0,
        title: 'Tech Stuff',
        postID: 'post1',
        content: 'A simple Python file sorting program meant to clean a single directory.',
    },
    {
        image: stock1,
        title: 'Some Project',
        postID: 'post2',
        content: 'A blockchain powered message board built on Solana.'
    }
  ];

  function BlogPost({ blogPosts }) {
    return (
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="blog-post-image">
              <img src={post.image} alt={post.title}
              style={{ borderRadius: '5px' }} />
            </div>
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-text">{post.content}</p>
              <Link to={post.postID}>View more</Link>
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

      <div className="blog-title">
      Selected work
      </div>
      <BlogPost blogPosts={blogPosts} />
     </div>
    );
}

export default Home;