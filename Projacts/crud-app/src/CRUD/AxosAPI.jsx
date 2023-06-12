import axios from "axios";
export  async function AxiosRequest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    })
}

// get data 

const GetApiDetails=()=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details','GET',headers,{})
}

//post data
const PostAPIDetails=(data)=>{
    
    return axios.post('http://localhost:3000/details',data)
}

// delete data
const DeleteApiDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'DELETE',headers,{})
}

//edit data
const EditAPiDetails = (id) => { //passing id 

    //get Data
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id, 'GET', headers, {})

}

//update data
const UpdateAPiDetails = (data,id) => { //passing id 

    //get Data
    const headers = {
        'Content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/' + id, 'PUT', headers, data)

}

export {GetApiDetails,PostAPIDetails,DeleteApiDetails,EditAPiDetails,UpdateAPiDetails};