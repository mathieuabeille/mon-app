export function fetchDatas() {
return fetch('https://api.airtable.com/v0/appXKVgrd5Kyo6CGd/Table%201?api_key=key5moHjnG9kz8y7w&sort%5B0%5D%5Bfield%5D=order&sort%5B0%5D%5Bdirection%5D=asc').then(
  response => response.json())
    .then((data) => {
      return {
        type: 'FETCH_DATAS',
        payload: data
   };
    });
 }
