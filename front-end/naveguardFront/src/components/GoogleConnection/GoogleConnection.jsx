import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

function GoogleConnection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse?.credential);
        setName(decoded.name);
        setEmail(decoded.email);
        setProfilePic(decoded.picture); 
        setIsLoggedIn(true); 

        navigate('/user-profile', { state: { name: decoded.name, email: decoded.email, profilePic: decoded.picture } });
    };

    return (
        <>
            {!isLoggedIn ? (
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => {
                        console.log("O Login Falhou");
                    }}
                />
            ) : (
                <Link to="/user-profile">
                    
                </Link>
            )}
        </>
    );
}

export default GoogleConnection;