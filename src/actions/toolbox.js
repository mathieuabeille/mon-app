export function fetchTool() {
return fetch('https://api.airtable.com/v0/appXKVgrd5Kyo6CGd/Growth?api_key=key5moHjnG9kz8y7w').then(
  response => response.json())
    .then((data) => {
      return {
        type: 'FETCH_TOOLS',
        payload: data
   };
    });
 }
