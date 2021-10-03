/* Global Variables */
const myURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const key = ",us&appid=4b4a59a39a11d061c8956e9f48f72dfd";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const generate = document.getElementById("generate");
console.log("1");
generate.addEventListener(
  "click",
  () => {
    const ZIP = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    console.log(`${myURL}${ZIP}${key}`);
    getData(myURL, ZIP, key).then(function (data) {
      console.log(data);
      postData("/all", {
        temprature: data.main.temp,
        date: d,
        userResonse: feelings,
      });
    });
  },
  false
);
const getData = async (URL, ZIP, key) => {
  console.log(ZIP);
  const res = await fetch(URL + ZIP + key);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
