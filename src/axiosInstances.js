import axios from 'axios';

export const LOCATION_IQ_KEY = 'pk.f6d443f0bd491b7fa2bdd158636b4eb2';
export const OPEN_WEATHER_KEY =  'aaa47327b91e40df378512f89ba59b18';
export const IP_STACK_KEY =  'aaa47327b91e40df378512f89ba59b18';

export const openWeatherMap = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/onecall',
});

export const locationIq = axios.create({
    baseURL: 'https://eu1.locationiq.com/v1'
});

export const geoLocation = axios.create({
    baseURL:'http://api.ipstack.com/check?access_key=a8a1ed22dd98fc099b5f84a455629cf7'
})

