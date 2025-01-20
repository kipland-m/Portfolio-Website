import React from "react";
import shapes from './images/intro-shapes.png'

// Will contain all data for each post
const blogPosts = [
    {
      title: 'This Website',
      content: 'See the repository that which this website deploys from.',
      github: "https://github.com/kipland-m/portfolio-website",
      logos:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"]
    },
    {
      title: 'pz-portal',
      content: 'A blockchain powered message board built on Solana.',
      github: "https://github.com/kipland-m/pz-portal",
      logos:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"]
    },
    {
        title: 'WinSCP Automation Tool',
        content: 'A Python program that interfaces into WinSCP and provides a simple interface and automation of file transfers.',
        github: "https://github.com/kipland-m/winscp_transfer",
        logos:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"]
    },
    {
        title: 'Dejunker',
        content: 'A Python file sorting program meant to clean a single directory.',
        github: "https://github.com/kipland-m/dejunker",
        logos:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"]
    }
  ];

  function BlogPost({ blogPosts }) {
    return (
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="blog-post-wrapper">
            <div className="blog-post-logos">
            {post.logos.map((logo, logoIndex) => (
              <img src={logo} alt={`Logo ${logoIndex}`} key={logoIndex} style={{ width: '100px', marginRight: '20px' }} />
            ))}
            </div>
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-text">{post.content}</p>
              <a className='view-more' href={post.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

function Home() {
    return(
    <div className="home">

    <div className="image-container">
    
    <img src={shapes} alt="some shapes" preload="true"/>
        <div className='text-overlay'>
        I'm a developer with expertise in
        APIs and data manipulation. 
        Explore my portfolio to see how I leverage 
        code for impactful solutions.
        </div>
    </div>

    <div className="greetings-text">
    👋 Hello, I'm Kipland, a developer based in Bowling Green, KY. 
    Currently working at ECM Tek, LLC, I specialize in developing internal API
    controllers, optimizing data efficiency and unlocking valuable insights.
    </div>

    <div className="blog-title">
      Selected work
    </div>

    <BlogPost blogPosts={blogPosts} />

    </div>
    );
}

export default Home;
