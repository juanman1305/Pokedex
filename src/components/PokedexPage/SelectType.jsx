import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './style/SelectType.css'

const SelectType = ( { setTypeSelected } ) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFetch(url)

    useEffect(() => {
      getTypes()
    }, [])

    // console.log(types)

    const handleChange = (e) => {
        // console.log(e.target.value)
        setTypeSelected(e.target.value)
    }

    return (
        <select onChange={handleChange} className="select">
            <option value = 'allpokemons' className="option__select">All pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.name} value = {type.url}
                    className="option__select">{type.name}</option>
                ))
            }

        </select>
    )
}

export default SelectType