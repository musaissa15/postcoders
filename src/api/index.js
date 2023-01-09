import axios from 'axios';

export const getAreaData = async (postcode) => {
    const { data } = await axios.get(`https://api.zippopotam.us/GB/${postcode}`);

    return data.places;
};


// export const getByPostCode = (postcode) => {
//     axios.get(`https://api.zippopotam.us/GB/m9`).then(({data}) => {

//         return data.places;
//     })
// }