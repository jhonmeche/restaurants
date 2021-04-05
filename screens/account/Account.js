import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { firebaseApp } from '../../utils/firebase';
import   firebase from 'firebase';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import { getCurrentUser, isUserLogged } from '../../utils/actions';
import Loading from '../../components/Loading';



export default function Account() {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        setLogin(isUserLogged())
    }, [])

    if (login == null) {
        return <Loading isVisible={true} text="cargando..."/>
    }

    return login ? <UserLogged/> : <UserGuest/>

}

const styles = StyleSheet.create({})

// const Account = () => {
//     const [login, setLogin] = useState(null);

//     useEffect(() => {
//         firebase.auth().onAuthStateChanged( (user) => {
//             user !== null ? (setLogin(true)) : setLogin(false)
//         });

//     }, []);

//     if(login == null) {  
//         return <Text>Cargando</Text>
//     }
//     return login ? <UserLogged/> : <UserGuest/>
// }

// export default Account

// const styles = StyleSheet.create({})