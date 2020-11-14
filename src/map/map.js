import React from 'react'
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import { styleMapRetro, styleMapLight, styleMapAssasin, styleMapLighterLabels, greyMap }  from "../map/style"

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 36.5085872,
  lng: -4.892731217
};

const onLoadMarker = marker => {
  console.log('marker: ', marker)
}

const onLoad = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}

const position = { lat: 36.508363, lng: -4.890452 }

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDYbdw_Kpoy74LVA4NQwg9VcWUHZDBKFss"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{ styles: greyMap }}
      >
      <Marker
      onLoad={onLoadMarker}
      position={position}
      >
      <InfoWindow
      onLoad={onLoad}
      visible={true}
        >
<div>Calle Virgen del Pilar, 12</div>
      </InfoWindow>
     </Marker>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)