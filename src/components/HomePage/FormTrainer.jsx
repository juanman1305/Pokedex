import React, { useRef } from 'react'
import { setTrainer } from '../../store/states/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/FormTrainer.css'

const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(trainerInput.current.value.trim())
        dispatch(setTrainer(trainerInput.current.value.trim()))
        trainerInput.current.value = ''
        navigate('/pokedex')
    }

    return (
        <div className='form__wrapper'>
            <form onSubmit={handleSubmit} className='form'>
                <input placeholder='Your name...' ref = {trainerInput} type="text" className='input__form'/>
                <button className='btn__form'>Let's start</button>
            </form>
        </div>
    )
}

export default FormTrainer