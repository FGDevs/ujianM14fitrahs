import AsyncStorage from '@react-native-async-storage/async-storage'

export const KeepLogin = (username) => {
    return (dispatch) => {
        dispatch({
            type:'LOGIN',
            payload:username
        })
    };
};

export const AddData = (data) => {
    return (dispatch) => {
        dispatch({
            type:'ADDDATA',
            data:data
        });
    };
};