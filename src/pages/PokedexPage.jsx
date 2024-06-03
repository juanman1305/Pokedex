import { useSelector} from 'react-redux'
import useFetch from '../hooks/useFetch'
import { useEffect, useRef, useState } from 'react'
import ListPokemons from '../components/PokedexPage/ListPokemons'
import { useNavigate } from 'react-router-dom'
import SelectType from '../components/PokedexPage/SelectType'
import '../components/PokedexPage/style/PokedexPage.css'

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')
  const [typeSelected, setTypeSelected] = useState('allpokemons')
  const [page, setPage] = useState(1)

  const [pokePerPage, setPokePerPage] = useState(12)

  const trainer = useSelector(states => states.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const [ pokemons, getPokemons, getPoksByType ] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allpokemons') {
      getPokemons()
    } else {
      getPoksByType(typeSelected)
    }
    setPage(1)
  }, [typeSelected])

  // console.log(pokemons)

  const pokeRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokeSearch(pokeRef.current.value.trim().toLowerCase())
    setPage(1)
  }

  // console.log(pokemons)

  const pokemonsFiltered = pokemons?.results.filter(
    pok => {
      return pok.name.includes(pokeSearch)
    }
  )

  // Lógica para paginación
  const startIndex = pokePerPage * (page - 1)
  const endIndex = pokePerPage * page
  const pokQuantity = pokemons ? pokemonsFiltered.length : 0
  const quantityPages = Math.ceil(pokQuantity / pokePerPage)
 
  // console.log(pokemonsFiltered)

  return (
    <div>
      <p className='welcome__msg'><span className='trainer__name'>{`Welcome ${trainer}`},</span> look for your favorite Pokemon!</p>

      <div className='filters__wrapper'>
        <form onSubmit={handleSubmit} className='form__filter'>
          <input placeholder='Look for a Pokemon' ref={pokeRef} type="text" className='input__form'/>
          <button className='button__form'>Search</button>
        </form>
        <SelectType
          setTypeSelected = {setTypeSelected}
        />
      </div>
      <ListPokemons
        pokemons = {pokemonsFiltered}
        startIndex = {startIndex}
        endIndex = {endIndex}
        quantityPages = {quantityPages}
        setPage = {setPage}
        page = {page}
        typeSelected = {typeSelected}
      />

    </div>
  )
}

export default PokedexPage