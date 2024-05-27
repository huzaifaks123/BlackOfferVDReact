// import configure toolkit from redux
import {configureStore} from '@reduxjs/toolkit'

// import reducer to make it available at globle level
import { DataReducer } from './redux/reducers/NavbarReducer'

// export store
export const store = configureStore({
    reducer:{
        DataReducer
    }
})