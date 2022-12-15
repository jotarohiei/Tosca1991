import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';



  const LocationPin = ({ text }) => (
    <div className="pin">
      <LocationOnIcon className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

  const Map = ({ location, zoomLevel }) => (
    <div className="map"> 
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB5jxK_5Pnoc4IS9_z-vvT48l_w1v6sf1U' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map