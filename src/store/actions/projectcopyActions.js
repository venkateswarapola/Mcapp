export const createcopyProject = (projectcopy) => {
    return (dispatch,getState,{ getFirebase , getFirestore })=>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projectcopys').add({
            ...projectcopy,
            authorFirstName: 'MCS',
            authorLastName:'ADMIN',
            authorId:1234,
            createAt:new Date()

        }).then(() => {
            dispatch({type:'CREATE_PROJECT', projectcopy});
        }).catch((err) => {
            dispatch({ type:'CREATE_PROJECT_ERROR',err});
        })
       
    }
};