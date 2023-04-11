import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
    const greeting = useSelector((state) => state.greeting);

    return (
        greeting.loading ? <h1>Loading...</h1> :
        <div>
            <h1>{greeting.message}</h1>
        </div>
    )

}

export default Greeting;