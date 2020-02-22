import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1556178329893!2d34.77444808486119!3d32.065039481192834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c82c3b75a01%3A0x2c6facffb6046c71!2z15DXnNeg15HXmSAxMDY!5e0!3m2!1siw!2sil!4v1580137277452!5m2!1siw!2sil"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    );
  }
}

export default Location;
