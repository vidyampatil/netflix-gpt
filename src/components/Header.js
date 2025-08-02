import { auth } from "../utils/firebase";
import { signOut,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO,USER_AVATAR } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            navigate('/error')
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                 navigate('/browse')
            } else {
                dispatch(removeUser)
                 navigate('/')
            }
        });

        //unsubscribe when componnet unmount

        return () => unsubscribe()

    }, [])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="" />
            {user && <div className="flex">
                <img src={USER_AVATAR} className="rounded-3xl w-12 h-12 my-4" />
                <button className="font-bold text-white p-2" onClick={handleSignOut}>Sign Out</button>
            </div>}

        </div>
    )

}

export default Header;