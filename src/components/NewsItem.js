// Import necessary modules
import React from 'react';

// Define the NewsItem component
const NewsItem =(props)=> {
  
    // Destructure the props for easier access
    let { title, description, imageurl, newsUrl, author, date, source  } = props;
    
    // Render the NewsItem card
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>          {/* Badge for indicating free content */}
          <span className=" badge rounded-pill bg-danger"/* style={{ left: '90%', zIndex: 1 }}*/>
           { source}
            
</span>
          </div>

          {/* Image */}
          <img src={imageurl} className="card-img-top" alt="..." />

          <div className="card-body">
            {/* Title */}
            <h5 className="card-title">{title}..</h5>
            
            {/* Description */}
            <p className="card-text">{description}..</p>
            
            {/* Author and Date */}
            <p className="card-text">
              <small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
            </p>
            
            {/* Read More button */}
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    )
  
}

// Export the NewsItem component as default
export default NewsItem;
