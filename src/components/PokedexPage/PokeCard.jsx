import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './style/PokeCard.css'

const PokeCard = ( { pokemon } ) => {

    const [ pokeInfo, getPokeInfo] = useFetch(pokemon.url)

    // console.log(pokemon)

    useEffect(() => {
      getPokeInfo()
    }, [])

    // console.log(pokeInfo)

    const navigate = useNavigate()

    const handlePokeDetail = () => {

        navigate(`/pokedex/${pokeInfo.name}`) //pokemon.name
    }

    // console.log(pokeInfo)
    return (

        <article onClick={handlePokeDetail} className={`card border-${pokeInfo?.types[0].type.name}`} >
            <header className={`card__header bg-${pokeInfo?.types[0].type.name}`}>
                <img src = {pokeInfo?.sprites.other["official-artwork"].front_shiny} alt= {`Imagen de ${pokemon.name}`} className='card__img'/>
            </header>
            <section className='card__principal'>
                <h3 className={`card__name color-${pokeInfo?.types[0].type.name}`}>{pokemon.name}</h3>
                <ul className='card__types'>
                    {
                        pokeInfo?.types.map(poketype => (
                            <li className='card__type' key={poketype.type.url}>{poketype.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <hr className='card__hr'/>
            <section className='card__stats'>
                <ul className='card__list'>
                    {
                        pokeInfo?.stats.map(pokestat => (
                            !pokestat.stat.name.includes('special') && 
                                
                                (<li className='card__stat' key= {pokestat.stat.url} >
                                    <span className='card__stat__label'>{pokestat.stat.name}</span>
                                    <span className={`card__stat__value color-${pokeInfo?.types[0].type.name}`}>{pokestat.base_stat}</span>
                                </li>)
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default PokeCard