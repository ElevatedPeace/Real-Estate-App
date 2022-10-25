import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com' 



 export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '3ebae0bfd5msh86814012b4cac55p15ddc4jsn8f2b3158deaa',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
         },
    });

    return data;
 }