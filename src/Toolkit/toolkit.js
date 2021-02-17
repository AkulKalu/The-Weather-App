export const sortSuggestions = data => {
    return data.map( location => {
        return {
            address: location.display_name,
            longitude: location.lon,
            latitude: location.lat
        };
    });
    
}
const pullForecastData = data => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const temp = typeof data.temp === 'object' ? data.temp.day : data.temp;
    const date = new Date(data.dt*1000);

    return  {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        details: {
            temp: convertTemp(temp),
            precipitation: `${precipitation(data)} mm/h` ,
            uvi: data.uvi,
            cloudiness: `${data.clouds} %`,
            humidity: `${data.humidity} %`,
            wind_speed: `${data.wind_speed} m/s`,
            wind_direction: data.wind_deg,
            visibility: data.hasOwnProperty('visibility') ? `${data.visibility} m` : null
        },
        date: date,
        day: days[date.getDay()],
        sunset: new Date(data.sunset*1000).toLocaleTimeString(),
        sunrise: new Date(data.sunrise*1000).toLocaleTimeString()
    };
}
const convertTemp = temp => {
    return {
        kelvin: `${Math.round(temp)}°K`,
        celsius: `${Math.round(temp - 273.15)}°C`,
        fahrenheit: `${Math.round((temp - 273.15) * 9/5 + 32)}°F`
    }
}
const precipitation = (data) => {
    let precipitation = 0;
    if(data.hasOwnProperty('rain')) {
        precipitation =   data.rain.hasOwnProperty('1h') ? data.rain['1h'] : data.rain;
    }else if(data.hasOwnProperty('snow')) {
        precipitation =  data.snow.hasOwnProperty('1h') ? data.snow['1h'] : data.snow;
    }
    return precipitation;
}
export const sortForecastData = data => {
    const maxPrecipitation = data.hourly.map( hour => precipitation(hour)).reduce((max, curr) => Math.max(max, curr));
    const maxValues = data.hourly.reduce( (max, curr) => {
        return {
            temp:Math.max(max.temp, curr.temp),
            humidity:Math.max(max.humidity, curr.humidity),
            wind_speed:Math.max(max.wind_speed, curr.wind_speed),
        }
    })

    return {
        currentForecast: pullForecastData(data.current),
        hourlyForecast: data.hourly.slice(0, 24).map( hour => {
            return {
                time: new Date(hour.dt*1000),
                temp:convertTemp(hour.temp),
                icon: hour.weather[0].icon,
                humidity: hour.humidity,
                wind_speed: hour.wind_speed,
                precipitation: precipitation(hour),
                highest: {
                    ...maxValues,
                    temp: Math.round(maxValues.temp - 273.15),
                    precipitation: maxPrecipitation
                }
            }
        }),
        dailyForecast: data.daily.map( day => {
            return pullForecastData(day);
        }),
        avalible: true,
    }
}

export const translateWCode = code => {
        const timeOfDay = code[2] === 'd' ? '' : 'Night';
        const typeC = +code.slice(0, 2);
        
        if(typeC < 5) {
            return 'Clear'+timeOfDay;
        }else if(typeC === 9 || typeC === 10 ) {
            return 'Rain'+timeOfDay;
        }else if(typeC === 11) {
            return 'Thunderstorm'+timeOfDay;
        }else if(typeC === 13) {
            return 'Snow'+timeOfDay;
        }else {
            return 'Fog'+timeOfDay;
        }
    
}

export const updateState = ( state, updateValues ) => {
    return {
        ...state,
        ...updateValues
    }
}