import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dummy = () => {
    const navigate = useNavigate();
    useEffect( () => {
        navigate("/search");
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Dummy;