import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageurl, url} = this.props;
        return (
        <div>
            <div className="card" style={{width:"18rem", margin:"20px"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title truncate-title">{title ? title.slice(0, 80) : ""}</h5>
                <p className="card-text truncate-desc">{description ? description.slice(0, 120) : ""}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
            </div>
        </div>
        )
    }
    
}

export default NewsItem