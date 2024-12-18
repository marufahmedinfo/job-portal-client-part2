import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateNamePhoto = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    };

    const hndleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    const handleGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        user,
        loading,
        CreateUser,
        updateNamePhoto,
        SignInUser,
        hndleLogOut,
        handleGoogle
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            // console.log('current user', currentUser?.email)
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://job-portal-server-liart.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log("Login Token", res.data)

                        setLoading(false)

                    })
            }
            else {
                axios.post('https://job-portal-server-liart.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('LogOut', res.data)

                        setLoading(false)
                    })
            }




        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;