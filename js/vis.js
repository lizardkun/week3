var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


// Add an event listener for map clicks
map.on('click', function(e) {
    // Get the coordinates where the map was clicked
    var latlng = e.latlng;

    // Create the content for the popup
    var popupContent = `
        <div>
            <p>Do you want to create a landmark here?</p>
            <button id="yesButton" style="cursor: pointer;">Yes</button>
        </div>
    `;

    // Create a popup at the clicked location
    var popup = L.popup()
        .setLatLng(latlng)
        .setContent(popupContent)
        .openOn(map);
    
    setTimeout(() => {
        const yesButton = document.getElementById('yesButton');
        if (yesButton) {
            yesButton.addEventListener('click', function() {
                // Redirect to another page with query parameters for the coordinates
                window.location.href = `views/landmark.html?lat=${latlng.lat}&lng=${latlng.lng}`;
            });
        } else {
            console.error('Yes button not found in the DOM.');
        }
    }, 10);
    });
// Load landmarks from localStorage
function loadLandmarks() {
    const landmarks = JSON.parse(localStorage.getItem('landmarks')) || [];
    landmarks.forEach(landmark => {
        const marker = L.marker([landmark.latitude, landmark.longitude]).addTo(map);

        // Create popup content with name, review, and image
        const popupContent = `
            <strong>${landmark.name}</strong><br>
            ${landmark.review}<br>
            ${landmark.image ? `<img src="${landmark.image}" alt="${landmark.name}" style="width: 100%; max-width: 200px; border-radius: 5px;">` : ''}
        `;
        marker.bindPopup(popupContent);
    });
}

// Load saved landmarks when the page is loaded
loadLandmarks();