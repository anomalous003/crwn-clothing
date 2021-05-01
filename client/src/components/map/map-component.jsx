import React, { useRef, useEffect, useState } from 'react';
import './map.styles.scss'
import Marker from './marker-component'
import ReactDOM from 'react-dom';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = '';

const Map = () => {
  const mapContainer = useRef()
  
  const storeLocation = {
    lat: 18.542538437728854,
    lng: 73.83851517916388
  }

  const [lng, setLng] = useState(73.83851517916388);
  const [lat, setLat] = useState(18.542538437728854);
  const [zoom, setZoom] = useState(13.5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')
    const markerNode = document.createElement('div');
    ReactDOM.render(<Marker />, markerNode);
    
    new mapboxgl.Marker(markerNode)
      .setLngLat([storeLocation.lng, storeLocation.lat])
      .addTo(map)
    
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className='map'>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>  
      <div className="map-container" ref={mapContainer} />
    </div>
  )
}

export default Map