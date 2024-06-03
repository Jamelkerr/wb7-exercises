//"use strict"

//console.log("mealsincategory");

//https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
//const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

//window.onload = function(){
    //const getResultsButton = document.getElementById("getResultsButtton");
    //getResultsButton.onclick = onGetResultsButtonClick;
//};
//function onGetResultsButtonClick(){
//console.log("clicked");

//const categoryInput = document.getElementById("categoryInput");

//let actualUrl = apiBaseUrl + categoryInput.value;

//console.log("URL: " + actualUrl);

//fetch(actualUrl).then(Response => Response.json()).then (data => {
     //console.log(data);
//})
   




//}
"use strict";

const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

window.onload = function() {
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
};

async function onGetResultsButtonClick() {
    const categoryInput = document.getElementById("categoryInput").value;

    if (categoryInput.trim() === "") {
        console.log("Please enter a category.");
        return;
    }

    const actualUrl = apiBaseUrl + categoryInput;

    try {
        const response = await fetch(actualUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(data) {
    const resultsOutput = document.getElementById("resultsOutput");
    resultsOutput.innerHTML = ""; // Clear previous results

    if (data.meals && data.meals.length > 0) {
        const ul = document.createElement("ul");
        data.meals.forEach(meal => {
            const li = document.createElement("li");
            li.textContent = meal.strMeal;
            ul.appendChild(li);
        });
        resultsOutput.appendChild(ul);
    } else {
        resultsOutput.textContent = "No meals found for this category.";
    }
}
