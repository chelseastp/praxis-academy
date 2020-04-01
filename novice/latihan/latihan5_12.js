fetch(myRequest)
  .then((response) => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then((data) => {
      /* process your data further */
  })
  .catch((error) => console.error(error));