document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate Name
    let nameRegex = /^[a-z ,.'-]+$/i;
    if (name === '' || name.length < 3) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = 'Valid name is required';
        isValid = false;
    }

    // Validate Email using Regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        isValid = false;
    }

    // Validate Message
    let messageRegex = /^[a-zA-Z0-9.,?!\\s-]/;
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty';
        isValid = false;
    } else if (!messageRegex.test(message)) {
        document.getElementById('messageError').textContent = 'Message cannot contain special characters';
        isValid = false;
    } else if (message.length < 10 || message.length > 300) {
        document.getElementById('messageError').textContent = 'Message cannot be shorter than 10 or longer than 300 characters';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});