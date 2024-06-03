import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../components/PokeDetailPage/styles/PokeDetailPage.css'

const PokeDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokeDetails, getPokeDetails] = useFetch(url)

  useEffect(() => {
    getPokeDetails()
  }, [name])

  // console.log(pokeDetails)

  return (
    <div className='pokeDetails'>
      <header className='img__container'>
        <img src= {pokeDetails?.sprites.other["official-artwork"].front_shiny} 
        alt={`Imagen de ${pokeDetails?.name}`} className='poke__img'/>
      </header>
      <section className='general__info'>
        <h2 className='poke__id'>{`#${pokeDetails?.id}`}</h2>
        <h2 className='poke__name'>{pokeDetails?.name}</h2>
        <ul className='poke__weight-height'>
          <li className="poke__grnl-data">
            <span className='poke__data-label'>Weight</span>
            <span className='poke__data-value'>{pokeDetails?.weight}</span>
          </li>
          <li className="poke__grnl-data">
            <span className='poke__data-label'>Height</span>
            <span className='poke__data-value'>{pokeDetails?.height}</span>
          </li>
        </ul>
      </section>

      <section className='type__skills-section'>
        <div className='type__skills-titles'>
          <p className="type__skills-title">Type</p>
          <p className="type__skills-title">Skills</p>
        </div>
        <ul className='type__skills-list'>
          {
            pokeDetails?.types.map(type => (
              <li className="type__skills-value" key={type.type.url}>{type.type.name}</li>
            ))
          }
          {
            pokeDetails?.abilities.map(skill => (
              <li className="type__skills-value" key={skill.ability.url}>{skill.ability.name}</li>
            ))
          }
        </ul>
      </section>
      <section className="stats">
        <hr className='stats__hr' />
        <h2 className='stats__title'>Stats</h2>

        {
          pokeDetails?.stats.map(st => (
            <article key={st.stat.name} className='stat'>
              <div className='stat__desc-container'>
                <h3 className='stat__name'>{st.stat.name}</h3>
                <h3 className='stat__value'>{`${st.base_stat}/150`}</h3>
              </div>
              <div className='stat__points-container'>
                <div style={{width: `${(st.base_stat / 150)*100}%`}} className='stat__points'>
                  <p className='points__percentage'>{`${Math.round((st.base_stat / 150)*100)}%`}</p>
                </div>
              </div>
            </article>
          ))
        }
      </section>
    </div>
  )
}

export default PokeDetailPage