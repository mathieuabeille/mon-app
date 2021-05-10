export function fetchDatas() {
return fetch('https://api.airtable.com/v0/appXKVgrd5Kyo6CGd/Content?api_key=key5moHjnG9kz8y7w').then(
  response => response.json())
    .then((data) => {
      return {
        type: 'FETCH_DATAS',
        payload: data
   };
    });
 }
