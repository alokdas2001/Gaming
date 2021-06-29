import axios from 'axios';
import {popularGamesUrl , upcomingGamesURL , newGamesURL} from '../api';

//Action Creator

export const loadGames = () => async(dispatch) =>{
    // FETCH AXIOS
    const popularData = await axios.get(popularGamesUrl())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newGamesData = await axios.get(newGamesURL())
    dispatch({
        type :"FETCH_GAMES",    
        // Sending data from API to reducer
        payload:{
            popular: popularData.data.results, 
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}