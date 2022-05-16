const initState = {
    post : true
}
const changeReducer = (state = initState, action) => {
    switch (action.type) {
        case "change" : {
         
             return ({
                       post : action.payLoad
             });
         }
        default : {
            return (state);
        }
    }
  
}
export default changeReducer;