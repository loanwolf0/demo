// Retrieve existing appointments from localStorage
var existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

// Display existing appointments on page load
displayAppointments();

// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  // Create appointment object
  var appointment = {
    name: name,
    date: date,
    time: time
  };

  // Add appointment to existing appointments
  existingAppointments.push(appointment);

  // Store updated appointments in localStorage
  localStorage.setItem('appointments', JSON.stringify(existingAppointments));

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';

  // Display updated appointments
  displayAppointments();
});

// Display appointments on the page
function displayAppointments() {
  var appointmentsList = document.getElementById('appointmentsList');
  appointmentsList.innerHTML = ''; // Clear previous list

  // Create appointment item for each appointment
  existingAppointments.forEach(function(appointment) {
    var appointmentItem = document.createElement('li');
    appointmentItem.className = 'appointmentItem';
    appointmentItem.innerHTML = '<strong>Name:</strong> ' + appointment.name + '<br>' +
                                '<strong>Date:</strong> ' + appointment.date + '<br>' +
                                '<strong>Time:</strong> ' + appointment.time;

    appointmentsList.appendChild(appointmentItem);
  });
}
