const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    key: 'pYniZBZci6DcIkye31Eyjy5Sz2wgBvJ7',
    action: 'add',
    service: '497',
    link: 'https://www.instagram.com/elbesnike/',
    quantity: '12'
  })
};

fetch('https://app.ad4tube.com/api/v2', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));