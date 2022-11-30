
import { useState, useEffect } from "react";

function WeatherCard({dayTemp, maxTemps, minTemps}) {
    const [temp1, setTemp1] = useState(null);
    const [temp2, setTemp2] = useState(null);
    const [temp3, setTemp3] = useState(null);
    const [temp4, setTemp4] = useState(null);
    const [temp5, setTemp5] = useState(null);

    const [day1, setDay1] = useState(null);
    const [day2, setDay2] = useState(null);
    const [day3, setDay3] = useState(null);
    const [day4, setDay4] = useState(null);
    const [day5, setDay5] = useState(null);

    const[showCards, setShowCards] = useState("hidden");


    useEffect (() => {
        setTemp1(dayTemp[0] ? dayTemp[0].temp + "°C" : "");
        setDay1(dayTemp[0] ? dayTemp[0].day : "") 

        setTemp2(dayTemp[1] ? dayTemp[1].temp + "°C" : "");
        setDay2(dayTemp[1] ? dayTemp[1].day : "") 

        setTemp3(dayTemp[2] ? dayTemp[2].temp + "°C" : "");
        setDay3(dayTemp[2] ? dayTemp[2].day : "") 

        setTemp4(dayTemp[3] ? dayTemp[3].temp + "°C" : "");
        setDay4(dayTemp[3] ? dayTemp[3].day : "") 

        setTemp5(dayTemp[4] ? dayTemp[4].temp + "°C" : "");
        setDay5(dayTemp[4] ? dayTemp[4].day : "") 

        setShowCards(dayTemp[0] ? "" : "hidden");
    });



    return(
        <div className={`flex flex-row flex-wrap gap-10 ${showCards} justify-center items-center`}>
                <div className="bg-white/30 backdrop-blur-sm w-36 h-content p-4 rounded-lg">
                    <p> 
                        {day1}
                    </p>
                    Average <br />
                    <p className="text-4xl">
                        {temp1}
                    </p>
                    <p>
                    Max : {maxTemps != null ? maxTemps[0] + "°C" : ""}
                    <br />
                    Min : {minTemps != null ? minTemps[0] + "°C" : ""}
                    </p>
                </div>
                        
                <div className="bg-white/30 backdrop-blur-sm w-36 h-content p-4 rounded-lg">
                    <p>
                        {day2}
                    </p>
                    Average <br />
                    <p className="text-4xl">
                        {temp2}
                    </p>
                    <p>
                    Max : {maxTemps != null ? maxTemps[1] + "°C" : ""}
                    <br />
                    Min : {minTemps != null ? minTemps[1] + "°C" : ""}
                    </p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm w-36 h-content p-4 rounded-lg">
                    <p>
                        {day3}
                    </p>
                    Average <br />
                    <p className="text-4xl">
                        {temp3}
                    </p>
                    <p>
                    Max : {maxTemps != null ? maxTemps[2] + "°C" : ""}
                    <br />
                    Min : {minTemps != null ? minTemps[2] + "°C" : ""}
                    </p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm w-36 h-content p-4 rounded-lg">
                    <p>
                        {day4}
                    </p>
                    Average <br />
                    <p className="text-4xl">
                        {temp4}
                    </p>
                    <p>
                    Max : {maxTemps != null ? maxTemps[3] + "°C" : ""}
                    <br />
                    Min : {minTemps != null ? minTemps[3] + "°C" : ""}
                    </p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm w-36 h-content p-4 rounded-lg">
                    <p>
                        {day5}
                    </p>
                    Average <br />
                    <p className="text-4xl">
                        {temp5}
                    </p>
                    <p>
                    Max : {maxTemps != null ? maxTemps[4] + "°C" : ""}
                    <br />
                    Min : {minTemps != null ? minTemps[4] + "°C" : ""}
                    </p>
                </div>
        </div>
    )
}

export default WeatherCard