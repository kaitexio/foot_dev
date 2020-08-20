// import axios from "axios";
//
// import {CommentTypes, NewsTypes} from "../constants/actionTypes";
// import {CommentUrls} from "../constants/urls";
// import {getUserToken} from "../utils/authUtils";
// import store from "../store";
//
//
// export const failedRequest = (error) => {
//     return {
//         type: CommentTypes.REQUEST_FAILED,
//         error: error
//     }
// }
//
// export const postcomment = (payload) => {
//     return {
//         type: CommentTypes.POST,
//         comment: payload
//
//     }
// }
//
//
// export const postComment = (data) => {
//
//     const url = CommentUrls.POST + `${data.id}/comment/`
//     const constants = {
//         headers: {
//             authorization: "Token " + getUserToken(store.getState())
//         }
//     }
//     return axios.post(url, data, constants).then(response => (
//         console.log(response)
//     )).catch(
//         err => {
//             throw err.response.data
//         }
//     )
// }
//
//
// export const getcomment = (payload) => {
//     return {
//         type: CommentTypes.LIST,
//         comment: payload
//
//     }
// }
//
//
// export const getComment = (id) => {
//     return (dispatch) => {
//         const url = CommentUrls.GET
//         return axios.get(url, constants)
//             .then(response =>
//                 dispatch(getcomment(response.data))
//             ).catch(err =>
//                 console.log(err)
//             )
//     }
// }
