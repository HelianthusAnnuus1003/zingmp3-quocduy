import actionTypes from "./actionTypes";
import * as apis from "../../apis";

// use React Thunk => function return function
export const getHome = () => async (dispatch) => {
    try {
        const response = await apis.getHome();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: response.data.data.items,
            });
        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null, // loi thi tra ve null
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null, // loi thi tra ve null
        });
    }
};
