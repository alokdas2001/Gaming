import React, { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//components
import Games from '../components/Games';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
	//FETCH GAMES
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);
	// Get that data back
	const { popular, newGames, upcoming } = useSelector((state) => state.games);

	return (
		<GameList>
			<h2>Upcoming Games </h2>
			<Games_data>
				{upcoming.map((game) => (
					<Games
						name={game.name}
						released={game.released}
						id={game.id}
						image={game.background_image}
						key={game.id}
					/>
				))}
			</Games_data>
			<h2>Popular Games </h2>
			<Games_data>
				{popular.map((game) => (
					<Games
						name={game.name}
						released={game.released}
						id={game.id}
						image={game.background_image}
						key={game.id}
					/>
				))}
			</Games_data>
			<h2>New Games </h2>
			<Games_data>
				{newGames.map((game) => (
					<Games
						name={game.name}
						released={game.released}
						id={game.id}
						image={game.background_image}
						key={game.id}
					/>
				))}
			</Games_data>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Games_data = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(500px, 1fr)
	); //displaying grid column wise
	//500 means take minimum space (500) or take rest of the space
	//making resposive images
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
