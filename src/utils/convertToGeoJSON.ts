type Coordinates = { lat: number; lon: number };

// export function convertToGeoJSON(coords: Coordinates): string {
//   const geojson = {
//     type: 'FeatureCollection',
//     features: [
//       {
//         type: 'Feature',
//         geometry: {
//           type: 'Point',
//           coordinates: [coords.lon, coords.lat], // GeoJSON の座標は [経度, 緯度] の順番
//         },
//         properties: {
//           // その他のプロパティがあればここに追加できます
//         },
//       },
//     ],
//   };

//   return JSON.stringify(geojson, null, 2);
// }

export function convertToJSON(coords: Coordinates) {
  return {
    version: 0.6,
    generator: 'Overpass API 0.7.61.5 4133829e',
    osm3s: {
      timestamp_osm_base: '2024-01-10T16:53:00Z',
      timestamp_areas_base: '2024-01-10T12:16:29Z',
      copyright:
        'The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.',
    },
    elements: [
      {
        type: 'Feature',
        id: 1420933092,
        lat: coords.lat,
        lon: coords.lon,
        tags: {
          'KSJ2:ADS': '住所２',
          'KSJ2:AdminArea': '石川県羽咋郡志賀町',
          amenity: 'shelter',
          name: '金沢市ものづくり会館',
          note: 'National-Land Numerical Information (Public Facility) 2006, MLIT Japan',
          'note:ja': '国土数値情報（公共施設データ）平成19年　国土交通省',
          source: 'KSJ2',
          source_ref: 'http://nlftp.mlit.go.jp/ksj/jpgis/datalist/KsjTmplt-P02-v2_0.html',
        },
      },
    ],
  };
}
