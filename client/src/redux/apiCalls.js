import { loginFailure, loginStart, loginSuccess } from "./slices/userSlice";
import axios from "axios"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/login", user);
        console.log(res)
        dispatch(loginSuccess(res.data));
    } catch (err) {
        console.log(err)
        dispatch(loginFailure());
    }
};
export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};