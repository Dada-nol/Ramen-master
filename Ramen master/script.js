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
      
 });