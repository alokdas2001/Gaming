import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//components
import Games from '../components/Games';
//Styling and Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { fadeIn } from '../animations';

const Home = () => {
	//get the current location of url
	const location = useLocation();
	const pathId = location.pathname.split('/')[2];
	//FETCH GAMES
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);
	// Get that data back
	const { popular, newGames, upcoming, searched } = useSelector(
		(state) => state.games
	);

	return (
		<GameList variants={fadeIn} initial="hidden" animate="show">
			<AnimateSharedLayout>
				<AnimatePresence>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>
				{searched.length ? (
					<div className="searched">
						<h2>Seacrhed Games </h2>
						<GamesData>
							{searched.map((game) => (
								<Games
									name={game.name}
									released={game.released}
									id={game.id}
									image={game.background_image}
									key={game.id}
								/>
							))}
						</GamesData>
					</div>
				) : (
					''
				)}

				<h2>Upcoming Games </h2>
				<GamesData>
					{upcoming.map((game) => (
						<Games
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
							key={game.id}
						/>
					))}
				</GamesData>
				<h2>Popular Games </h2>
				<GamesData>
					{popular.map((game) => (
						<Games
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
							key={game.id}
						/>
					))}
				</GamesData>
				<h2>New Games </h2>
				<GamesData>
					{newGames.map((game) => (
						<Games
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
							key={game.id}
						/>
					))}
				</GamesData>
			</AnimateSharedLayout>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
	@media screen and (max-width: 768px) {
		padding: 0rem 0rem 0rem 2rem;
	}
`;

const GamesData = styled(motion.div)`
	background-color: #181a1b;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(400px, 1fr)
	); //displaying grid column wise
	//500 means take minimum space (500) or take rest of the space
	//making resposive images
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
