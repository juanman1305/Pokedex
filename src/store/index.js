import { configureStore } from '@reduxjs/toolkit'
import trainer from './states/trainer.slice'

export default configureStore({
    reducer:{
        trainer
    }
})