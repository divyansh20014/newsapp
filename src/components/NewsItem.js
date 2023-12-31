import React from "react";

const NewsItem =(props) =>{
  
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={
            {
              display :'flex',
              justifyContent : 'flex-end',
              position: 'absolute',
              right:'0'
            }
          }>
        <span class="badge rounded-pill bg-danger" >
                {source}
              </span>
              </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://image.shutterstock.com/image-vector/nn-n-letter-logo-design-260nw-1713110932.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}{" "}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
