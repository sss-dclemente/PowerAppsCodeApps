import React, { createContext, useContext } from "react";
import { User } from "../models/user";

export const UserContext = createContext<User | null>(null);
export const useUser = () => useContext(UserContext);
