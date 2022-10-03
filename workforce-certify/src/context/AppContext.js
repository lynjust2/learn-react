import { createContext, useState } from 'react';

const AppContext = createContext(undefined)

export const AppProvider = ({ children }) => {
  // Global context/state variables
  const [user, setUser] = useState({ roleId: 0, token: null })

  // Update user
  const updateUser = (userInfo) => { setUser({ ...user, ...userInfo }) }

  // Return the context state and methods for component consumption
  return (
    <AppContext.Provider value={{
      user,
      updateUser
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppContext
