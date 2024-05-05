import { DoctorProfileType } from "../types";

function get(id){
    return {
        type:DoctorProfileType.REQUEST,
        payload: id,
    };
}

function success(data){
    return {
        type:DoctorProfileType.SUCCESS,
        payload: data,
    };
}

function error(error){
    return {
        type:DoctorProfileType.REJECT,
        payload: error,
    }
}

export {
    get,success,error
};