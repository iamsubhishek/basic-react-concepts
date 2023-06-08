import React from "react";

//Steps 1  : here we are creating context
const UserContext = React.createContext('Subhi Normal User')

const UserProvider= UserContext.Provider
const UserConsumer = UserContext.Consumer

//this added for giving context type example
export default UserContext

export {UserProvider, UserConsumer}
