import { useState , useEffect } from "react"

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = () => {
    const [users,setUsers] = useState<User[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<String | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok){
                    throw new Error ("Failed");
                }
                const data: User[] = await response.json();
                setUsers(data);

            } catch (err:unknown){
                const message = err instanceof Error ? err.message : "something went wrong";
                // class use cheythitt error handle cheyyaan
                setError(message);

            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    },[]);
    if(loading){
        return <p>Loading Users...</p>;
    }
    if(error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <h2>Users List</h2>
            {users.map((user) => (
                <div key = {user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;
