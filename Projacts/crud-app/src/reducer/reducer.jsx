const IntialData={
    details:[],
    isResponse:false,
    isDelete:false,
    isUpdate:false,
}


const reducer=(state=IntialData,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
        case 'POST_DETAILS':
            return{
                isResponse:action.payload
            }
        case 'DELETE_DETAILS':
            return{
                isDelete:action.payload
            }
        case 'UPDATE_DETAILS':
            return{
                isUpdate:action.payload
            }
        default:return state
    }
}


export default reducer;