import { lazy } from "react";



export const Layout = lazy(()=>import("../Layout/Layout"))
export const Home = lazy(()=>import("../Pages/Home/Home"))
export const Shop = lazy(()=>import("../Pages/Shop/Shop"))
export const Contacts = lazy(()=>import("../Pages/Contacts/Contacts"))
export const Feedback = lazy(()=>import("../Pages/Feedback/Feedback"))
export const Help = lazy(()=>import("../Pages/Help/Help"))
export const Nothing = lazy(()=>import("../Pages/Nothing/Nothing"))
