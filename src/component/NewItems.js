import React, { Component } from 'react'

export class NewItems extends Component {
    render() {
        let { title, description, imgurl, newsUrl, author, date, source } = this.props
        return (
            <div className="container m-3">
            <div className="card shadow-sm" style={{ height: "600px", position: "relative" }}>
              {/* Image */}
              <img 
                className="card-img-top" 
                src={imgurl || "https://via.placeholder.com/250"} 
                alt="Card caption" 
                style={{ height: "250px", objectFit: "cover" }} 
              />
          
              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                {/* Title */}
                <h5 className="card-title ">
                  {title || "No Title Available"}...
                </h5>
          
                {/* Description */}
                <p className="card-text text-muted ">
                  {description || "No Description Available"}...
                </p>
          
                {/* Link */}
                <a 
                  href={newsUrl || "#"} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-sm btn-primary mt-auto"
                >
                  Read More
                </a>
          
                {/* Author and Date */}
                <p className="card-text mt-2 text-muted">
                  <small>
                    <b>{author || "Unknown Author"}</b><br />
                    {date ? new Date(date).toGMTString() : "No Date Available"}
                  </small>
                </p>
              </div>
          
              {/* Source Badge */}
              <span 
                className="badge bg-danger text-white position-absolute top-0 end-0 m-2"
                style={{ zIndex: "1" }}
              >
                {source || "Unknown Source"}
              </span>
            </div>
          </div>
          
        )
    }
}

export default NewItems
