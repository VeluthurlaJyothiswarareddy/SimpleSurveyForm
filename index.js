document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    displayPopup(getFormData());
});

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function displayPopup(data) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popup.style.display = 'block';
    popupContent.innerHTML = '';
    for (const key in data) {
        const label = document.createElement('strong');
        label.textContent = key + ': ';
        const value = document.createElement('span');
        value.textContent = data[key];
        popupContent.appendChild(label);
        popupContent.appendChild(value);
        popupContent.appendChild(document.createElement('br'));
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function getFormData() {
    const form = document.getElementById('surveyForm');
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return data;
}
