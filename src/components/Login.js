import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidate } from '../utils/validate'; // Ensure this points to your updated validate.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

function getFriendlyAuthError(error) {
  if (!error || !error.code) return "An unknown error occurred.";
  switch (error.code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "Invalid email or password.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/email-already-in-use":
      return "This email is already registered.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    default:
      return error.message;
  }
}

const Login = () => {
  const [isSigninForm, setIsSigninFOrm] = useState(true);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({}); // THIS IS CRUCIAL: 'errors' is an object
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSigninForm = () => {
    setIsSigninFOrm(!isSigninForm);
    setErrors({}); // Clear errors when toggling form
  };

  const handleButtonClick = () => {
    const nameValue = name.current ? name.current.value : '';
    const emailValue = email.current.value;
    const passwordValue = password.current.value;


    const validationResults = checkValidate(isSigninForm ? null : nameValue, emailValue, passwordValue); // Pass all values

    if (validationResults) {
      setErrors(validationResults); // Set the errors object
    } else {
      setErrors({}); // Clear errors if validation passes
      if (!isSigninForm) {
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(auth.user, {
              displayName: name.current.value, photoURL: USER_AVATAR
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            }).catch((error) => {
              setErrors({ auth: getFriendlyAuthError(error) });
            });

          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            setErrors({ auth: getFriendlyAuthError(error) });
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          })
          .catch((error) => {
            //  const errorCode = error.code;
            //   const errorMessage = error.message;
            setErrors({ auth: getFriendlyAuthError(error) });
          });

      }
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg' alt="Netflix Background" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute px-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSigninForm && (
          <>
            <input
              type='text'
              placeholder='Enter your full name'
              className='p-4 my-4 w-full bg-gray-700'
              ref={name}
            />
            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>} {/* Correctly display name error */}
          </>
        )}

        <input
          type='text'
          placeholder='Enter your email'
          className='p-4 my-4 w-full bg-gray-700'
          ref={email}
        />


        <input
          type='password'
          placeholder='Enter your password'
          className='p-4 my-4 w-full bg-gray-700'
          ref={password}
        />
        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>} {/* Correctly display password error */}
        {errors.auth && <p className='text-red-500 text-sm mt-1'>{errors.auth}</p>}

        <button
          type='button'
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}>
          {isSigninForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='pb-[30px] cursor-pointer'
          onClick={toggleSigninForm}>
          {isSigninForm ? 'New to Netflix? Sign Up Now' : 'Already Registered ? Sign In Now'}
        </p>
      </form>
      {errors.auth && <p className='text-red-500 text-sm mt-1'>{errors.auth}</p>}

    </div>
  );
};

export default Login;