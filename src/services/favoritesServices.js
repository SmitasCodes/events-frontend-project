import axios from "axios";

const API_URL = "https://events-80pg.onrender.com/api/favorites/"; // Use the absolute URL

//========================= GET EVENT FAVORITES =======================//

const getEventFavorites = async (id) => {
  try {
    const response = await axios.get(API_URL + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//========================= GET ALL FAVORITES =======================//

const getFavorites = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//========================= GET USER FAV EVENTS =======================//

const getUserFavorites = async () => {
  try {
    const userStr = localStorage.getItem("user");
    const userObj = JSON.parse(userStr);
    const token = userObj ? userObj.token : null;

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//========================= DELETE USER FAV EVENTS =======================//

const deleteUserFavorite = async (id) => {
  try {
    const userStr = localStorage.getItem("user");
    const userObj = JSON.parse(userStr);
    const token = userObj ? userObj.token : null;

    const response = await axios.delete(API_URL + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const eventServices = {
  getEventFavorites,
  getFavorites,
  getUserFavorites,
  deleteUserFavorite,
};

export default eventServices;
