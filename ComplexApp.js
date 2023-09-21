/*
    Filename: ComplexApp.js
    
    This code is a complex web application that demonstrates various advanced JavaScript concepts and techniques.
    It involves a sophisticated user interface, data manipulation, and external API integration.
*/

// Import required libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from 'chart.js';

// Constants
const API_URL = 'https://api.example.com/';
const MAX_ITEMS_PER_PAGE = 10;

// Global variables
let currentPage = 1;
let dataSet = [];

// Utility function for fetching data from the API
async function fetchData() {
    try {
        const response = await axios.get(API_URL + `data?page=${currentPage}&limit=${MAX_ITEMS_PER_PAGE}`);
        dataSet = response.data;
        renderData();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Utility function for rendering data on the UI
function renderData() {
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    dataSet.forEach((item) => {
        const element = document.createElement('div');
        element.innerText = item.name;
        container.appendChild(element);
    });

    renderChart();
}

// Utility function for rendering a chart using Chart.js library
function renderChart() {
    const ctx = document.getElementById('chart-container').getContext('2d');
    const labels = dataSet.map((item) => item.label);
    const values = dataSet.map((item) => item.value);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Data Values',
                    data: values,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

// Event listener for pagination
document.getElementById('next-button').addEventListener('click', () => {
    currentPage++;
    fetchData();
});

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchData();
    }
});

// Initial data fetch
fetchData();

// React component for the UI
const App = () => {
    return (
        <div>
            <h1>Data Visualization</h1>
            <div id="data-container"></div>
            <canvas id="chart-container"></canvas>
            <button id="prev-button">Previous</button>
            <button id="next-button">Next</button>
        </div>
    );
};

// Render the UI
ReactDOM.render(<App />, document.getElementById('root'));