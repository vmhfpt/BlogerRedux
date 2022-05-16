const initState = {
    category : [],
     morePost : [],
     tag : []
};
const categoryReducer = (state = initState, action) => {
    switch(action.type){
        case 'change' : {
            return {
                category :  action.payLoad.category,
                morePost : action.payLoad.morePost,
                tag : action.payLoad.tag
            }
              
        }
        default : {
            return (state);
        }
    }
}
export default categoryReducer;