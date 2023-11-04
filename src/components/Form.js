import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../App";


const Form = () => {
  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext);
  const [userName,setUserName] = useState();
  const handleUserName = (event)=>{
    setUserName(event.target.value)

  }
  const handleFormSubmit = ()=>{
    setUser(userName);
    navigate("/");

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="login-form-container bg-white p-8 rounded shadow-md w-96 mt-4">
        <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
        <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-600">User Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleUserName}
            />
          </div>
      
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Form;
