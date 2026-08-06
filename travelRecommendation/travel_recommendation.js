// Add event listeners to the buttons
document.querySelector('.search-btn').addEventListener('click', performSearch);
document.querySelector('.clear-btn').addEventListener('click', clearResults);

function performSearch() {
    // 1. Get the keyword from the input field and convert to lowercase for easy matching
    const searchInput = document.querySelector('.input-wrapper input').value.toLowerCase().trim();
    const resultsContainer = document.querySelector('.hero-content'); // Or create a dedicated <div id="results"> container
    
    // Clear previous results
    resultsContainer.innerHTML = ''; 

    if (searchInput === '') {
        return; // Do nothing if search is empty
    }

    // 2. Fetch the JSON data (assuming the file is named travel_recommendation_api.json)
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            let searchResults = [];

            // 3. Search Logic based on the JSON structure[cite: 1]
            if (searchInput === 'country' || searchInput === 'countries') {
                // If user types "country", extract all cities from all countries[cite: 1]
                data.countries.forEach(country => {
                    searchResults = searchResults.concat(country.cities);
                });
            } 
            else if (searchInput === 'temple' || searchInput === 'temples') {
                // Extract temples[cite: 1]
                searchResults = data.temples;
            } 
            else if (searchInput === 'beach' || searchInput === 'beaches') {
                // Extract beaches[cite: 1]
                searchResults = data.beaches;
            } 
            else {
                // Search for a specific country name (e.g., "Australia", "Japan")[cite: 1]
                const foundCountry = data.countries.find(country => 
                    country.name.toLowerCase() === searchInput
                );
                if (foundCountry) {
                    searchResults = foundCountry.cities;
                }
            }

            // 4. Display the results
            if (searchResults.length > 0) {
                displayResults(searchResults, resultsContainer);
            } else {
                resultsContainer.innerHTML = '<p>No recommendations found for this keyword.</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(results, container) {
    // Create a grid container for the result cards
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('results-grid');

    // Generate HTML for each result card using the data properties[cite: 1]
    results.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('result-card');

        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        
        gridContainer.appendChild(card);
    });

    container.appendChild(gridContainer);
}

function clearResults() {
    // Clear the input field
    document.querySelector('.input-wrapper input').value = '';
    
    // Clear the results container and restore original hero content if needed
    const resultsContainer = document.querySelector('.hero-content');
    resultsContainer.innerHTML = ''; 
}