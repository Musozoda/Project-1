import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contacts, Feedback, Help, Home, Layout, Nothing, Shop } from "./Routes/Routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./components/Loader/Loader";



function App()
{

  const [t,i18n] =useTranslation("")
  const changeLanguage = (Language) =>{
    i18n.changeLanguage(Language)
  }

  const router = createBrowserRouter ([
    {
      path:'/',
      element:<Suspense fallback={<Loader/>}>
        <Layout/>
      </Suspense>,
      children:[
        {
          index:true,
          element:<Suspense fallback={<Loader/>}>
          <Home/>
        </Suspense>,
        },

        {
          path:'Shop',
          element:<Suspense fallback={<Loader/>}>
          <Shop/>
        </Suspense>,
        },

        {
          path:'Help',
          element:<Suspense fallback={<Loader/>}>
          <Help/>
        </Suspense>,
        },
        {
          path:'Contacts',
          element:<Suspense fallback={<Loader/>}>
          <Contacts/>
        </Suspense>,
        },
        {
          path:'Feedback',
          element:<Suspense fallback={<Loader/>}>
          <Feedback/>
        </Suspense>,
        },
        {
          path:'*',
          element:<Suspense fallback={<Loader/>}>
          <Nothing/>
        </Suspense>,
        },
      ]
    }
  ])


  return <RouterProvider router={router}/>
}

export default App;
