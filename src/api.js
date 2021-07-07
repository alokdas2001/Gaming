//CONST URL
const baseUrl = 'https://api.rawg.io/api/';

// CURRENT YEAR
let date = new Date();
let dd = date.getDate(); //day of month

let mm = date.getMonth(); // month
let yyyy = date.getFullYear(); // current year
if (dd < 10) {
	//if less then 10 add a leading zero
	dd = '0' + dd;
}
if (mm < 10) {
	mm = '0' + mm; //if less then 10 add a leading zero
}

// current date
var currentYear = `${yyyy}-${mm}-${dd}`;

// LAST YEAR
var lastYear = `${yyyy - 1}-${mm}-${dd}`;

//NEXT YEAR
var nextYear = `${yyyy + 1}-${mm}-${dd}`;

//POPULAR GAMES
const popularGames = `games?key=923dc73a10e6425dac86ea5701e0d5b1&dates=${lastYear},${currentYear}&ordering=+rating&page_size=10`;
const upcomingGames = `games?key=923dc73a10e6425dac86ea5701e0d5b1&dates=${currentYear},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=923dc73a10e6425dac86ea5701e0d5b1&dates=${lastYear},${currentYear}&ordering=-released&page_size=10`;

export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;
export const popularGamesUrl = () => `${baseUrl}${popularGames}`;

//Game Details
export const gameDetailsURL = (game_id) =>
	`${baseUrl}games/${game_id}?key=923dc73a10e6425dac86ea5701e0d5b1`;

//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
	`${baseUrl}games/${game_id}/screenshots?key=923dc73a10e6425dac86ea5701e0d5b1`;
//Searched Game
export const searchGameURL = (game_name) =>
	`${baseUrl}games?search=${game_name}&key=923dc73a10e6425dac86ea5701e0d5b1&page_size=9`;
