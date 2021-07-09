import React, { useState } from 'react';
//styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.png';
// redux and routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState('');
	const inputHandler = (e) => {
		setTextInput(e.target.value);
	};
	const submitSearch = (e) => {
		e.preventDefault();
		dispatch(fetchSearch(textInput));
		setTextInput('');
	};
	const clearSearch = () => {
		dispatch({ type: 'CLEAR_SEARCHED' });
	};
	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<Logo onClick={clearSearch}>
				<img src={logo} alt="logo" />
			</Logo>
			<form className="search">
				<input value={textInput} onChange={inputHandler} type="text" />
				<button onClick={submitSearch} type="submit">
					Search
				</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.div)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.4rem 0.5rem 0.4rem 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		font-weight: bold;
		font-family: 'Montserrat', sans-serif;
		@media screen and (max-width: 768px) {
			padding: 0rem;
			width: 200px;
		}
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #779b52;
		color: white;

		@media screen and (max-width: 768px) {
			width: 60%;
			font-size: 100%;
			width: 100px;
		}
	}
`;
const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
	}
`;

export default Nav;
