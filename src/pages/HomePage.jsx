import React from 'react'
import FormTrainer from '../components/HomePage/FormTrainer'
import '../components/HomePage/styles/HomePage.css'
import pokedexTitleImage from '../assets/pokedex__title.png';

const HomePage = () => {
  return (
    <div className='homePage__info'>
      <div className='img__title-container'>
        <img src={pokedexTitleImage} alt="pokedex title image" className='title__image'/>
      </div>
      <h2 className='trainer__greeting'>Hi trainer!</h2>
      <p className='trainer__msg'>To see some pokemons, tell me your trainer name</p>
      <FormTrainer />
    </div>
  )
}

export default HomePage