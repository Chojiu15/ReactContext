import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import { UsersContext } from "../context/UsersContext"

const NavBar = () => {
    const {value, value2} = useContext(UsersContext)
    const [users, setUsers] = value
    const [name, setName] = value2

    const [movies, setMovies] = useContext(MovieContext)
    console.log(name)
    return(
        <h1>There are {movies.length} movies at the cinema with {users.length} spectators </h1>
    )
}

export default NavBar