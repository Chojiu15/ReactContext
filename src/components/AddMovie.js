import { useContext, useState } from "react"
import { MovieContext } from "../context/MovieContext"


const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)
    const [name, setName] =useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setMovies([...movies, {name : name, type : type, price : price}])
    }

    return(
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type='text' name='name' onChange={(e) => setName(e.target.value) }  />
                <input type='text' name='type' onChange={(e) => setType(e.target.value)} />
                <input type='text' name='price' onChange={(e) => setPrice(e.target.value)}/>
                <button type ='submit'>
                    Add a movie
                </button>
            </form>


        </div>
        
    )
}

export default AddMovie