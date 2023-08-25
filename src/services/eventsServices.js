import axios from "axios";

const API_URL = "https://events-80pg.onrender.com/api/events/"; 

//========================= GET ALL EVENTS =======================//

const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//========================= GET USER EVENTS =======================//

const getUserEvents = async () => {
  try {
    const userStr = localStorage.getItem("user");
    const userObj = JSON.parse(userStr);
    const token = userObj ? userObj.token : null;
    const response = await axios.get(API_URL + "user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//========================= UPDATE USER EVENTS =======================//

const updateUserEvents = async (eventID, updatedEvent) => {
  try {
    const userStr = localStorage.getItem("user");
    const userObj = JSON.parse(userStr);
    const token = userObj ? userObj.token : null;
    const response = await axios.put(API_URL + eventID, updatedEvent, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//=========================  DELETE USER EVENTS =======================//

const deleteUserEvents = async (eventID) => {
  try {
    const userStr = localStorage.getItem("user");
    const userObj = JSON.parse(userStr);
    const token = userObj ? userObj.token : null;
    const response = await axios.delete(API_URL + eventID, {
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
  getEvents,
  getUserEvents,
  updateUserEvents,
  deleteUserEvents,
};

export default eventServices;