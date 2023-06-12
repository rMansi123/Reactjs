import { useEffect, useState } from "react";
import {GetApiDetails,PostAPIDetails,DeleteApiDetails,EditAPiDetails,UpdateAPiDetails} from '../CRUD/AxosAPI'

//getdata
export const GetAPIAction=()=>{
    return function(dispatch)
    {
            return GetApiDetails().then((res)=>{
                console.log(res);
                dispatch({
                    type:'GET_DETAILS',
                    payload:res.data
                })
            })
    }
}

//postdata
export const PostAPIAction=(data)=>{
    return function(dispatch)
    {
            return PostAPIDetails(data).then((res)=>{
                console.log(res);
                dispatch({
                    type:'POST_DETAILS',
                    payload:''
                })
            })
    }
}

//delete data
export const DeleteAPIAction=(id)=>{
    return function(dispatch)
    {
            return DeleteApiDetails(id).then((res)=>{
                console.log("Delete data response ",res);
                dispatch({
                    type:'DELETE_DETAILS',
                    payload: true,
                })
            })
    }
}

//edit data
export default (props) => {
    const [detailsById, setDetailsById] = useState({})
    const GetDetailsId = (requestId) => {
        console.log("EDIT DATA from action", requestId);
        return EditAPiDetails(requestId).then((res) => {
            console.log(res.id);
            setDetailsById(res);
        })
    }
    useEffect(() => {
        GetDetailsId(props)
    }, [])
    return [detailsById]
}

//update data
export const UpdateAPIAction=(request,id)=>{
    return function(dispatch)
    {
            dispatch({
                type:'UPDATE_DETAILS',
                payload:false,
            })
            return UpdateAPiDetails(request,id).then((res)=>{
                console.log("update data..",res);
                dispatch({
                    type:'UPDATE_DETAILS',
                    payload:true
                })
            })
    }
}