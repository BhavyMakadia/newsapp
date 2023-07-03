// Import necessary modules
import React, { Component } from 'react';

// Define the NewsItem component
export class NewsItem extends Component {
  render() {
    // Destructure the props for easier access
    let { title, description, imageurl, newsUrl, author, date } = this.props;
    
    // Render the NewsItem card
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          {/* Badge for indicating free content */}
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-da+r" style={{ left: '90%', zIndex: 1 }}>
            Free
            <span class="visually-hidden">unread messages</span>
          </span>

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
    );
  }
}

// Export the NewsItem component as default
export default NewsItem;
