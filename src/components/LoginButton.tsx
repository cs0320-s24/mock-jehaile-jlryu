import { Dispatch, SetStateAction } from 'react';

/**
 * This is our login interface which holds a boolean indicating whether we are logged in and 
 * the function setter which updates the isLoggedIn state in a react component
 */
interface loginProps {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

/**
 * This component displays a button that allows users to either log in or log out on click based on the current login state.
 * @param props the interface holding a boolean indicating whether it is logged in and a setter
 * @returns the JSX element representing the login button.
 */
export function LoginButton(props: loginProps) {

  const authenticate = () => {
    const newValue = !props.isLoggedIn
    props.setIsLoggedIn(newValue)
    return newValue
  }

  if (props.isLoggedIn) {
    return (
      <button aria-label='Sign Out' onClick={authenticate}>Sign out</button>
    )
  } else {
    return (
      <button aria-label='Login' onClick={authenticate}>Login</button>
    )
  }
}