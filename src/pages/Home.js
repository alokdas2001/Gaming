import React,{useEffect} from 'react'
//redux
import {useDispatch , useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction'
//components 
import Games from '../components/Games'
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Home = () =>{
    //FETCH GAMES
    const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(loadGames())
	} , [dispatch]);
    // Get that data back
    const {popular , newGames , upcoming} = useSelector((state) => state.games);
 
    return(
        <GameList>
            <h2>Upcoming Games </h2>
            <Games_data>
                {upcoming.map(game => (
                    <Games />
                ))}
            </Games_data>    
        </GameList>
    );
}

const GameList = styled(motion.div)``

const Games_data = styled(motion.div)``

export  default Home;