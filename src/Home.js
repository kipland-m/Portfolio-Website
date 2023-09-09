import React from "react";

// Will contain all data for each post
const blogPosts = [
    {
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
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-content">{post.content}</p>
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