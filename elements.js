



//elements


const el = document.querySelector('.elements');

//Events
//List elements for user Auth
authPrincipal.onAuthStateChanged(user=> {
    if(user) {
        console.log('signIn');
    }else {
        console.log('signOut');
    }
})  