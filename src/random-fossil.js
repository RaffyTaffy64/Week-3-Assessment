import axios from 'axios';

document.getElementById('random-fossil-btn').addEventListener('click', () => {
  axios.get('/random-fossil.json')
    .then(response => {
      const fossil = response.data;
      document.getElementById('random-fossil-name').textContent = fossil.name;
      document.getElementById('random-fossil-image').src = fossil.img;
    })
    .catch(error => console.error('Error fetching random fossil:', error));
});
