document
	.getElementById('addStudentForm')
	.addEventListener('submit', function (event) {
		event.preventDefault() // Prevent the default form submission

		const formData = {
			studentId: document.getElementById('studentId').value,
			name: document.getElementById('name').value,
			class: document.getElementById('class').value,
			teacherId: document.getElementById('teacherId').value,
		}

		fetch('https://backend-0a7f.onrender.com/v2/student', {
			// Replace YOUR_API_ENDPOINT with your API's URL
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				origin: 'http://127.0.0.1:5500',
			},

			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data)
				alert('Form submitted successfully')
			})
			.catch((error) => {
				console.error('Error:', error)
				alert('Error submitting form')
			})
	})
