import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import SubPageForm from './Form/SubPageForm';
 

function Users() {
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [users,setUsers] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(false);
                setSuccess(true)
                setLoading(true);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, [setLoading]);

    if (loading) return <div>로딩중</div>;
    if (error) return <div>에러</div>;
    if (success) return <SubPageForm/>;
    if (!users) return null;
    return (
        <div>
           List
        </div>
    ) 
}

export default Users;