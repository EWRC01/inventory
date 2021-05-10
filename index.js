


function email(){


     var email = document.getElementById('email').value;
     var pass = document.getElementById('pass').value;
    console.log(email, pass)
    auth.signInWithEmailAndPassword(email, pass)
                .then(()=>{
                    alert("Bienvenido")
                    window.location.replace('principal.html')
                })
                .catch((error)=>{
                    console.log(error.message)
                    alert(error.message)
                })

}

function googleLogin() {
    const btnGoogle = document.getElementById("btnGoogle");
    btnGoogle.addEventListener('click', e=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then(()=>{
            window.location.replace('principal.html');
            alert("Bienvenido")
        })
        .catch((error)=>{
            alert(error.message)
        })
    })
}


function facebookLogin(){
    const btnFacebook = document.getElementById("btnFacebook");
    btnFacebook.addEventListener('click', e=>{
        const providerfb = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(providerfb)
        .then(result=>{
            console.log(result);
            alert("Welcome");
            window.location.replace('principal.html');
        }).catch((error)=>{
            alert(error.message);
        })
    })
}













