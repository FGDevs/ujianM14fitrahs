const INITIAL_STATE={
    username:'',
    isLogin:false,
    isLoading:false,
    data:[]
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type) {
        case 'LOGIN':
            return {...state,...action.payload,isLoading:false,isLogin:true}
        case 'LOADING':
            return {...state,isLoading:true}
        case 'ERROR':
            return {...state,isLoading:false}
        case 'LOGOUT':
            return INITIAL_STATE
        case 'ADDDATA':
            return {...state,data:action.data}
        default:
            return state
    };
};