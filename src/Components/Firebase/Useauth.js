import  { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Useauth = () => {
    return useContext(AuthContext)
};

export default Useauth;