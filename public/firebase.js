const firebaseConfig = {
    apiKey: "AIzaSyDZfAlrIYLZwFBHsuEvDEQ2u7vN0hWgelU",
    authDomain: "resume-cf609.firebaseapp.com",
    databaseURL: "https://resume-cf609-default-rtdb.firebaseio.com",
    projectId: "resume-cf609",
    storageBucket: "resume-cf609.appspot.com",
    messagingSenderId: "684499292318",
    appId: "1:684499292318:web:b642f3eb347e3e3e1ceb8f",
    measurementId: "G-VS0RQXHY63"
  };

  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference for database
  var resumeContact = firebase.database().ref('resumeDetails');

  document.getElementById('formResume').addEventListener('submit', submitForm);

  function submitForm(e){
        e.preventDefault();

        var name = getElementVal('name');
        var email = getElementVal('email');
        var message = getElementVal('message'); 

        console.log(name, email, message);
        saveDetails(name,email,message);

        // validations
        //Display Alert
        document.querySelector('.alert').style.display="block";

        //Remove Alert
        setTimeout(() => {
            document.querySelector('.alert').style.display="none";
        }, 3000);

        //Reset the Form
        document.getElementById('formResume').reset();
    }

    const saveDetails = (name, email, message) => {
        var messageDetails = resumeContact.push(); // Create a new child location with a unique key
        messageDetails.set({ // Set data to the child location
            name: name,
            email: email,
            message: message,
        });
    }
    
  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }
