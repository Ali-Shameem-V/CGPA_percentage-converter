function convertToPercentage() {
    // Get the selected university and CGPA
    const university = document.getElementById('university').value;
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    const validationMessage = document.getElementById('validationMessage');
    const validationMessageCgpa = document.getElementById('validationMessageCgpa');
    let percentage = '';

    // Check if a university is selected
    if (university === 'select') {
        validationMessage.style.display = 'block';
        return;
    } else {
        validationMessage.style.display = 'none';
    }

    // Check if a valid CGPA is entered
    if (isNaN(cgpa) || cgpa === '') {
        validationMessageCgpa.style.display = 'block';
        return;
    }else {
        validationMessageCgpa.style.display = 'none';
    }

    // Conversion logic based on university
    switch (university) {
        case 'universityA':
            // Example conversion formula for University A
            percentage = (cgpa * 9.5).toFixed(2);
            break;
        case 'universityB':
            // Example conversion formula for University B
            percentage = ((cgpa-0.5) * 10).toFixed(2);
            break;
        case 'universityC':
            // Example conversion formula for University C
            percentage = ((cgpa-0.75) * 10).toFixed(2);
            break;
        case 'universityD':
            // Example conversion formula for University C
            percentage = (cgpa * 9.5).toFixed(2);
            break;
        case 'universityE':
            // Example conversion formula for University C
            percentage = (7.25 * cgpa + 11).toFixed(2);
            break;
        case 'universityF':
            // Example conversion formula for University C
            percentage = (cgpa * 9.5).toFixed(2);
            break;
        case 'universityG':
            // Example conversion formula for University C
            percentage = ((cgpa-0.75) * 10).toFixed(2);
            break;            
        default:
            percentage = '';
    }

    // Display the converted percentage
    document.getElementById('percentage').value = percentage;
}

// Attach the validation message to the HTML
// Example: <div id="validationMessage" style="color: red; display: none;"></div>
