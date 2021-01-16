import React from 'react'
import './src/styles/global.css'
import "firebase/auth";


import store from "./src/store/userSlice.tsx"
import {Provider} from "react-redux"

export const wrapRootElement = ({element}) => {
        return  (
            <Provider store = {store} >{element}</Provider>

        )
}