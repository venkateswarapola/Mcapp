export const createProject = (project) => {
    return (dispatch,getState,{ getFirebase , getFirestore })=>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'MCS',
            authorLastName:'ADMIN',
            authorId:1234,
            createAt:new Date()

        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type:'CREATE_PROJECT_ERROR',err});
        })
       
    }
};