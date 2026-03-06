document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const dob = form.dob.value;
    const checkin = form.checkin.value;
    const checkout = form.checkout.value;
    const guests = form.guests.value;

    // WhatsApp pre-filled message
    const message = `Booking Details:%0AName: ${name}%0ADOB: ${dob}%0ACheck-in: ${checkin}%0ACheck-out: ${checkout}%0AGuests: ${guests}`;
    window.open(`https://wa.me/919045674332?text=${message}`, '_blank');
});