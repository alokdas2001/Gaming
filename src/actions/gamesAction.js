import axios from 'axios';
import {
	popularGamesUrl,
	upcomingGamesURL,
	newGamesURL,
	searchGameURL,
} from '../api';

//Action Creator

export const loadGames = () => async (dispatch) => {
	// FETCH AXIOS
	const popularData = await axios.get(popularGamesUrl());
	const upcomingData = await axios.get(upcomingGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	dispatch({
		type: 'FETCH_GAMES',
		// Sending data from API to reducer
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};

export const fetchSearch = (gameName) => async (dispatch) => {
	const searchGames = await axios.get(searchGameURL(gameName));
	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchGames.data.results,
		},
	});
};
