import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return(
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt=''/>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <a href={`https://www.google.com/maps/search/?api=1&query=${this.props.business.address} ${this.props.business.city} ${this.props.business.state} ${this.props.business.zipCode}`} className="Business-address" target="_blank">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state} {this.props.business.zipCode}</p>
                    </a>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating">{this.props.business.rating}</h3>
                        <p>{this.props.business.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;