import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { smallImage } from '../util';
// IMAGES
import playstation from '../img/playstation.svg';
import pc from '../img/pc.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import xbox_sx from '../img/xbox_sx.svg';
// STAR IMAGES
import starEmpty from '../img/starEmpty.png';
import starFull from '../img/starFull.png';

const GameDetail = ({ pathId }) => {
	const history = useHistory();
	//Exit Detail
	const exitDetailHandler = (e) => {
		// getting the ele which u clicked
		const element = e.target;
		// getting the name of the class
		if (element.classList.contains('shadow')) {
			// changing the overflow rule
			document.body.style.overflow = 'auto';
			// change the router to normal
			history.push('/');
		}
	};

	//GET STARS

	const getStars = () => {
		const stars = [];
		const rating = Math.floor(game.rating);
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<img alt="star" key={i} src={starFull} />);
			} else {
				stars.push(<img alt="star" key={i} src={starEmpty} />);
			}
		}
		return stars;
	};

	//GET PLATFORM IMAGES
	const getPlatform = (platform) => {
		switch (platform) {
			case 'PlayStation 4':
				return playstation;
			case 'PlayStation 5':
				return playstation;
			case 'Xbox One':
				return xbox;
			case 'Xbox Series S/X':
				return xbox_sx;
			case 'PC':
				return pc;
			case 'Nintendo Switch':
				return nintendo;
			case 'iOS':
				return apple;
			default:
				return gamepad;
		}
	};

	//Data
	const { screen, game, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<CardShadow className="shadow" onClick={exitDetailHandler}>
					<Detail>
						<Stats>
							<div className="rating">
								<h3>{game.name} </h3>
								<p> Rating:{game.rating}</p>
								<div title={game.rating}> {getStars()} </div>
							</div>
							<Info>
								<h3>Platforms </h3>
								<Platforms>
									{game.platforms.map((data) => (
										<img
											title={data.platform.name}
											key={data.platform.id}
											src={getPlatform(data.platform.name)}
											alt={data.platform.name}
										/>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img
								src={smallImage(game.background_image, 1280)}
								alt={game.name}
							/>
						</Media>
						<Description>
							<p> {game.description_raw}</p>
						</Description>
						<Gallery>
							{screen.results.map((screen) => (
								<img
									key={screen.id}
									src={smallImage(screen.image, 1280)}
									alt={screen.image}
								/>
							))}
						</Gallery>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #779b52;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 6rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 2rem;
		height: 2rem;
		display: inline;
	}
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
		width: 3rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
	img {
		padding: 0rem 0rem 2rem 0rem;
	}
`;

export default GameDetail;
