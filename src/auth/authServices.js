import axios from "axios";

const API_URL = "https://events-80pg.onrender.com/api/users/"; 

//======================== REGISTER USER ======================//

// Registering User
const register = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
      const { token, role, email } = response.data;
      const user = { token, role, email };
      localStorage.setItem("user", JSON.stringify(user));
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//======================== LOGIN USER ======================//

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);
    console.log("logindata", response, userData);
    if (response.data) {
      const { token, role, email } = response.data;
      const user = { token, role, email };
      localStorage.setItem("user", JSON.stringify(user));
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//======================== LOGOUT USER ======================//

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authServices = {
  register,
  logout,
  login,
};

export default authServices;