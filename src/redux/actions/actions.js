import { ADD_NUMBER } from "../action-types";

export function addNumber(payload) {
    return {type: ADD_NUMBER, payload}
}