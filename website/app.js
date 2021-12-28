/* Global Variables */
const myURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const key = ",us&units=metric&appid=4b4a59a39a11d061c8956e9f48f72dfd";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const generate = document.getElementById("generate");
generate.addEventListener(
  "click",
  () => {
    const ZIP = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    getData(myURL, ZIP, key).then(function (data) {
      postData("/all", {
        temprature: data.main.temp,
        date: d,
        userResponse: feelings,
      }).then(updateUI());
    });
  },
  false
);
const getData = async (URL, ZIP, key) => {
  const res = await fetch(URL + ZIP + key);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
const postData = async (url="", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
const updateUI = async()=>{
  const request = await fetch('/all')
  try{
  const allData = await request.json();
  console.log(allData)
  document.getElementById('date').innerHTML = `Date:${allData.date}`;
  document.getElementById('temp').innerHTML = `Temperature:${allData.temp}`;
  document.getElementById('content').innerHTML = `I feel:${allData.content}`;
  }catch(err){
  console.log('error',err);
  }
  }
// const updateUI = async () => {
//   const req = await fetch("/all");
//   try {
//     const allData = await req.json();
//     console.log(allData);
//     document.getElementById("date").innerHTML = `Date: ${allData.date}`;
//     document.getElementById("temp").innerHTML = `Temperature:${allData.temprature}`;
//     document.getElementById("content").innerHTML = `I feel:${allData.feelings}`;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
