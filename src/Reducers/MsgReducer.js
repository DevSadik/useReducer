

export const intialMsg = {
    name : '',
    age : Number,
    skill : '',
    error : false
}

export const msgReducer = ( state, {type, payload}) => {
    
    

    switch(type){
        case 'DEVS_DATA_LOAD' :
            return state = {...state, ...payload};
        case 'LOAD_ALERT' :
            let err_val = ( payload.error === 'start' ) ? true : false;
            return state = {...state, error : err_val };


        default : 
        return state;
    }
}