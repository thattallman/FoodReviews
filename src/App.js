import React,{useContext, useState,createContext} from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Form from "./components/Form";
import ReviewForm from "./components/ReviewForm";

export const UserContext = createContext();
const AppLayout = () => {
    const [user,setUser] = useState(null);

  return (
    
    <>
      <UserContext.Provider value={{user, setUser}}>
      <HeaderComponent   />
      <Outlet />
      <Footer />
      </UserContext.Provider>
      </>
      
  );
};
const appRouter = createBrowserRouter(
  [
    {
      path : "/",
      element : <AppLayout/>,
      errorElement : <Error/>,
      children :[
        {
          path : "/",
          element : <Body />,
        },
        {
          path : "/about",
          element : <About/>,
          
        },{

          path : "/contact",
          element : <Contact/>,
          
        },
        {
          path: "/restaurant/:id",
          element: <Menu />,
        },{
          path: "/auth",
          element: <Form />,
        },{
          path: "/reviews",
          element: <Reviews />,
        },{
          path: "/reviewForm",
          element: <ReviewForm />,

        }
      ]

    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(reactElement);
