import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncUsersJson, selectUsers, selectUsersError, selectUsersLoading } from "./fetchSlice"

const Fetch = () => {
    const users = useSelector(selectUsers)
    const error = useSelector(selectUsersError)
    const loading = useSelector(selectUsersLoading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncUsersJson())
    }, [dispatch])

    if (error !== null) {
        return (
            <>
                <div style={{color: 'red'}}>{error}</div>
            </>
        )
    }

    return (
        <>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Fetch