import { createContext } from "react";

const Globalcontext= createContext("abcd");

export default Globalcontext;


//first we need to create context for the variable we need to use in any of the descendent file

// only descendent or child,grandchild can use the state variable pushed in global file  