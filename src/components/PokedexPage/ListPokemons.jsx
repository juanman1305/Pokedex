import { useEffect, useState } from 'react'
import PokeCard from './PokeCard'
import './style/ListPokemons.css'

const ListPokemons = ( { pokemons, startIndex, endIndex, quantityPages, setPage, page, typeSelected } ) => {

  const [blockPage, setBlockPage] = useState(1)
  const [pagesPerBlock, setPagesPerBlock] = useState(5)

  // Lógica de bloques
  const initialPageBlock = (blockPage - 1) * (pagesPerBlock)
  const endPageBlock = initialPageBlock + pagesPerBlock

  const arrPages = []
  for (let i = 1; i <= quantityPages; i++) {
    arrPages.push(i)
  }

  useEffect(() => {
    setBlockPage(1)
  }, [typeSelected])

  const handlePage = (pag) => setPage(pag)

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
      if ((page - 1) % 5 === 0) {
        setBlockPage(blockPage - 1)
      }
    }
  }

  const handleNext = () => {
    if (page < quantityPages) {
      setPage(page + 1)
      if (page % 5 === 0) {
        console.log(page)
        setBlockPage(blockPage + 1)
      }
    }
  }

  const handlePrevBlock = () => { //
    setBlockPage(blockPage - 1)
    setPage(((blockPage - 1) * 5) - 4)
  }

  const handleNextBlock = () => {
    setBlockPage(blockPage + 1)
    setPage(((blockPage + 1) * 5) - 4)
  }
  // console.log(quantityPages)
  return (

    <div className='pokemons__page'>
      <ul className='pages__list'>

        {
          blockPage !== 1 &&
          <button onClick={handlePrevBlock} className='changeBlock__btn'>...</button>
        }

        {
          page !== 1 &&
          <button onClick={handlePrev} className='change__btn'>&lt;</button>
        }
        {
          arrPages.slice(initialPageBlock, endPageBlock).map(pag => (
            <li key={pag} onClick={() => handlePage(pag)}
            className={`page__number ${(pag === page && 'page__selected')}`}>{pag}</li>
          ))
        }
        {
          page!==quantityPages &&
          <button onClick={handleNext} className='change__btn'>&gt;</button>
        }

        {
          blockPage !== Math.ceil(quantityPages / pagesPerBlock) &&
          <button onClick={handleNextBlock} className='changeBlock__btn'>...</button>
        }

      </ul>

      <div className='pokemons-wrapper'>
          {
              pokemons?.slice(startIndex, endIndex).map(pok => (
                <PokeCard
                  key = { pok.url }
                  pokemon = { pok }
                />
              ))
          }
      </div>
    </div>
  )
}

export default ListPokemons