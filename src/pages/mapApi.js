import MapboxGl from 'mapbox-gl';

export const createMap = container => {
  MapboxGl.accessToken =
  'pk.eyJ1Ijoic2NyZWFtbG8iLCJhIjoiY2s4cjUyNGtlMDVyNjNtcjIxanRjc2JwcyJ9.qmAp-NkKi8vnQkTUYk8c9g';

  const map = new MapboxGl.Map({
    container: container,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [27.596226,53.942205],
      zoom: 14
  });

  return map;
};

export const showRoute = (map, route) => {
  map.flyTo({
    center: route[0],
    zoom: 15
  });

  const layer = map.getLayer('route');

  if (layer) {
    map.getSource('route').setData({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    });
  } else {
    map.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      }
    });

    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#ffc617',
        'line-width': 8
      }
    });
  }
};
