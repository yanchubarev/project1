import React, { useEffect, useRef } from 'react';
import MapboxGl from 'mapbox-gl';
import '../mapbox-gl.css';

const MapPage = () => {
  const map = useRef(null);

  useEffect(() => {
    MapboxGl.accessToken =
      'pk.eyJ1Ijoic2NyZWFtbG8iLCJhIjoiY2s4cjUyNGtlMDVyNjNtcjIxanRjc2JwcyJ9.qmAp-NkKi8vnQkTUYk8c9g';
    new MapboxGl.Map({
      container: map.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [27.596226,53.942205],
      zoom: 14
    });
   
  }, []);

  return (
    <div className="map">
      <div ref={map}></div>
    </div>
  );
};

export default MapPage;