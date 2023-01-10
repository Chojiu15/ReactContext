import { createContext, useState } from "react";



export const MovieContext = createContext()


export const MovieController = ({children}) => {
    const [movies, setMovies]= useState([
        {
            name : 'Interstellar',
            type : 'S-F',
            price : '$10'
        },
        {
            name : 'Avatar 2',
            type : 'S-F',
            price : '$15'
        },
        {
            name : 'Equalizer',
            type : 'Action',
            price : '$12'
        }
    ])


    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
    )


}