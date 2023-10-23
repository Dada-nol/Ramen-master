 // JavaScript pour gérer la soumission du formulaire de réservation
 const reservationForm = document.getElementById('reservationForm');
 reservationForm.addEventListener('submit', (event) => {
     event.preventDefault();
     const name = document.getElementById('name').value;
     const date = document.getElementById('date').value;
     const time = document.getElementById('time').value;

      
      fetch('/api/reservations', {
          method: 'POST',
          body: JSON.stringify({ name, date, time }),
          headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(data => {
          alert('Réservation confirmée !');
      })
      .catch(error => {
          alert("Une erreur s'est produite lors de la réservation.")
      });
 });