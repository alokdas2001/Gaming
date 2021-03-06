import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//import redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popup } from '../animations';

const Game = ({ name, released, id, image }) => {
	// Load details Handler
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = 'hidden';
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame
			variants={popup}
			initial="hidden"
			animate="show"
			onClick={loadDetailHandler}
		>
			<Link to={`/game/${id}`} className="game_details">
				<motion.h3>{name}</motion.h3>
				<p> {released} </p>
				<img src={smallImage(image, 640)} alt={name} />
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	background-color: #383d40;
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 60vh;
		object-fit: cover;
	}
	@media screen and (max-width: 768px) {
		p {
			font-size: 25px;
		}
		img {
			width: 100%;
			height: 30vh;
			object-fit: cover;
		}
	}
`;

export default Game;
