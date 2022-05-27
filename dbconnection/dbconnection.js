const firebaseConfig = {
  apiKey: "AIzaSyCmJJBHug_B2jx4wY-r8bSPWs-EIDZzvYQ",
  authDomain: "mcs-coke.firebaseapp.com",
  databaseURL:
    "https://mcs-coke-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mcs-coke",
  storageBucket: "mcs-coke.appspot.com",
  messagingSenderId: "669748157362",
  appId: "1:669748157362:web:42535a46d82aff13a6a2ab",
  measurementId: "G-93K05XSMP2",
};
//initialize hiiv
firebase.initializeApp(firebasebaseConfig);

//reference
var holbogdohFormDB = firebase.database().ref("holbogdohForm");

document.getElementById("holbogdohForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.prevenDefault();

  var email = getElementValue("email");
  var phone = getElementValue("phone");
  var message = getElementValue("message");

  saveholbogdoh(email, phone, message);
}
const saveholbogdoh = (email, phone, message) => {
  var newholbogdohForm = holbogdohFormDB.push();

  newholbogdohForm.set({
    email: email,
    phone: phone,
    message: message,
  });
};
const getElementValue = (id) => {
  return document.getElementById(id).value;
};
