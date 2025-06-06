const btnSearch = document.getElementById("btnSearch");
const clrSearch = document.getElementById("clrSearch");
const conditionInput = document.getElementById("conditionInput");
const resultDiv = document.getElementById("result");

function searchCondition() {
  resultDiv.innerHTML = "";
  const input = document.getElementById("conditionInput").value.toLowerCase();
  fetch("./travel_recommendation_api.json")
    .then((res) => res.json())
    .then((result) => {
      if (Object.keys(result).includes(input)) {
        let foundArr = result[input];
        let newArr = foundArr.map((element) => {
          if (Array.isArray(element?.cities))
            return {
              ...element,
              cityName: element.cities.map((city) => city.name).join(","),
              cityDescription: element.cities
                .map((city) => city.description)
                .join(","),
            };
          return element;
        });
        newArr.map((element) => {
          if (!element.cityName)
            return (resultDiv.innerHTML += `<div style="background-color:#333;padding:5px;border-radius:5px;opcaity:0.8"><h3 style="color:#fff">${
              element.name
            }<h3></br><p style="margin-top:5px;color:#fff;font-size:14px">${
              element?.description || element?.cityDescription
            }</p></div>`);
          else
            return (resultDiv.innerHTML += `<div style="background-color:#333;padding:5px;border-radius:5px;opcaity:0.8"><h3 style="color:#fff">${element.name}<h3></br><p style="color:#fff">${element?.cityName}</p><p style="margin-top:5px;color:#fff;font-size:14px">${element?.cityDescription}</p></div>`);
        });
      }
    });
}

function clrSearchCondition() {
  conditionInput.value = "";
  resultDiv.innerHTML = "";
}

function clearSearchConditionOnly() {
  resultDiv.innerHTML = "";
}

btnSearch.addEventListener("click", searchCondition);
clrSearch.addEventListener("click", clrSearchCondition);
conditionInput.addEventListener("change", clearSearchConditionOnly);
