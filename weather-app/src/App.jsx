import InputField from "./assets/components/input"
import WeatherCard from "./assets/components/weatherCard"

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [newCity, setNewCity] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const onAdd = (newCity) => {
    setNewCity(`${newCity}`);
    
  }

  useEffect(() => {getData(latitude, longitude)}, [latitude])

  useEffect(() => {getCoordinates(newCity)}, [newCity])

  useEffect(() => {getImage(newCity)}, [newCity])

  async function getImage(newCity) {
    if (newCity) {
    // setLoading(true);
    let image = await axios.get(`https://api.unsplash.com/search/photos/?query=${newCity}&per_page=10&client_id=R4hLn1yIk2RuJPu_jQLzowOvc7rcI9uxWRzrsSXvobM&`);
    console.log(image);
    let url = image.data.results[0].urls.small;
    setImgUrl(url);
    // setLoading(false);
    console.log(image.data.results[0].links.download);
  } else {
    let image = await axios.get(`https://api.unsplash.com/search/photos/?query=weather&per_page=20&client_id=R4hLn1yIk2RuJPu_jQLzowOvc7rcI9uxWRzrsSXvobM&`);
    console.log(image);
    let url = image.data.results[5].urls.small;
    setImgUrl(url);
    console.log(image.data.results[0].links.download);
  }
  
  }

  async function getCoordinates(newCity) {
    if (newCity){

    let coordinates = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${newCity}&limit=1&appid=2422642cce96055868dec3c3b6e4fcad`)

  

    setLatitude(coordinates.data[0].lat);
    setLongitude(coordinates.data[0].lon);

    console.log(latitude, longitude);
  }
    }

    const [dayTemp, setDayTemp] = useState([]);
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];
    const [maxTemps, setMaxTemps] = useState([]);
    const [minTemps, setMinTemps] = useState([]);

    async function getData(lat, lon) {
      let data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=2422642cce96055868dec3c3b6e4fcad`)
      let todayDate = new Date();
      let day1Date = new Date(todayDate);
      let day2Date = new Date(todayDate);
      let day3Date = new Date(todayDate);
      let day4Date = new Date(todayDate);
      let day5Date = new Date(todayDate);

      day1Date.setDate(day2Date.getDate());
      day2Date.setDate(day2Date.getDate() + 1);
      day3Date.setDate(day3Date.getDate() + 2);
      day4Date.setDate(day4Date.getDate() + 3);
      day5Date.setDate(day5Date.getDate() + 4);

      console.log(day1Date.getDate());
      console.log(day2Date);
      console.log(day3Date);
      console.log(day4Date);
      console.log(day5Date);
      let newArr = [];
      let arrMax = [];
      let arrMin = [];
      data.data.list.map((item) => {
                    let day = parseInt(item.dt_txt.substring(8, 10));
                    let temp = item.main.temp;
                    console.log(day);
                
                
                    if (day === day1Date.getDate()) {
                        day1.push(temp);
                        console.log(day1);
                        return day1;
                    } else if (day === day2Date.getDate()){
                        day2.push(temp);
                        console.log(day2);
                        return day2;
                    } else if (day === day3Date.getDate()){
                        day3.push(temp);
                        console.log(day3);
                        return day3;
                    }
                        else if (day === day4Date.getDate()){
                            day4.push(temp);
                            console.log(day4);
                            return day4;
                        }
                            else if (day === day5Date.getDate()){
                                day5.push(temp);
                                console.log(day5);
                                return day5;
                            }
                    
            
                            
        }
    )

        arrMax.push(Math.max(...day1));
        arrMax.push(Math.max(...day2));
        arrMax.push(Math.max(...day3));
        arrMax.push(Math.max(...day4));
        arrMax.push(Math.max(...day5));

        setMaxTemps(arrMax);

        arrMin.push(Math.min(...day1));
        arrMin.push(Math.min(...day2));
        arrMin.push(Math.min(...day3));
        arrMin.push(Math.min(...day4));
        arrMin.push(Math.min(...day5));

        setMinTemps(arrMin);

        let averageDay1 = day1.reduce((a, b) => a+b, 0)/ day1.length;
        console.log(averageDay1);
        let averageDay2 = day2.reduce((a, b) => a+b, 0)/ day2.length;
        console.log(averageDay2);
        let averageDay3 = day3.reduce((a, b) => a+b, 0)/ day3.length;
        console.log(averageDay3);
        let averageDay4 = day4.reduce((a, b) => a+b, 0)/ day4.length;
        console.log(averageDay4);
        let averageDay5 = day5.reduce((a, b) => a+b, 0)/ day5.length;
        console.log(averageDay5);

         newArr.push({day: day1Date.toString().slice(0,10), temp: Math.round(averageDay1 * 10) / 10});
         newArr.push({day: day2Date.toString().slice(0,10), temp: Math.round(averageDay2 * 10) / 10});
         newArr.push({day: day3Date.toString().slice(0,10), temp: Math.round(averageDay3 * 10) / 10});
         newArr.push({day: day4Date.toString().slice(0,10), temp: Math.round(averageDay4 * 10) / 10});
         newArr.push({day: day5Date.toString().slice(0,10), temp: Math.round(averageDay5 * 10) / 10});

        setDayTemp(newArr);
        

    }


  return (
    <body className="h-screen">
      {/* {loading ? (
        <div className="loader-container">
      	<div className="spinner"></div>
        </div>
      ) : ( */}
      <div className={`App bg-cover h-screen flex flex-col items-center gap-40`}
            style={{backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.46544555322128855) 0%, rgba(0,0,0,1) 1000%), url(${imgUrl})`}}
      >
        <InputField onAdd={onAdd}/>
        <WeatherCard dayTemp={dayTemp} maxTemps={maxTemps} minTemps={minTemps}/>
      </div>
      {/* )} */}
    </body>
  )
}

export default App
