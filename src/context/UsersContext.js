import { createContext,useState, useEffect } from "react";
import axios from 'axios'

export const UsersContext = createContext()


export const UsersController = (props) => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('John')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .then(() => setLoading(false))
        .catch(err => console.log(err))
    }

    return(
        <UsersContext.Provider value={{value : [users, setUsers], value2 : [name, setName]}}>
            {!loading && props.children}
        </UsersContext.Provider>
    )

}