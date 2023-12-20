var userform = document.getElementById('userform');
  var userDetailsDisplay = document.getElementById('userDetailsDisplay');

  //add even listener to clickig function
  userform.addEventListener('submit', function (event) {
    event.preventDefault();


    //grabing the user details
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var phonenumber = document.getElementById('phonenumber').value
   
    //object creation
    var initialize={
      username:username,
      email:email,
      phonenumber:phonenumber
    };
    //json stringfy
    var userdetails=JSON.stringify(initialize);
    
    //new object creation
    var newobj='username_'+username;

    //storing a new key values in locastorage
    localStorage.setItem(newobj,userdetails);

    displayuserdetails(username);
  });
  function displayuserdetails(username){

    //getting the local storage details  
     var newobj='username_'+username;
   var userdetails= localStorage.getItem(newobj);
  

    if(userdetails){
      var userdetailsobj=JSON.parse(userdetails);

      //create a dom and appeding that a div
      var detailscontainer=document.createElement('div');
      detailscontainer.classList.add('user-details-display');
      //header
      var header=document.createElement('h2');
      header.textcontent='userdetails';
      //username
      var name=document.createElement('p');
      name.textContent='username :' +userdetailsobj.username;
      //email
      var mail=document.createElement('p');
      mail.textContent='email :'+userdetailsobj.email;
      //phone number
      var phone =document.createElement('p');
      phone.textContent='phonenumber :'+userdetailsobj.phonenumber;
      

      //edit button
       var editbtn = document.createElement('button');
        editbtn.textContent = 'edit';

        editbtn.addEventListener('click', function () {
          // Populate the form with existing details for editing
          document.getElementById('username').value = userdetailsobj.username;
          document.getElementById('email').value = userdetailsobj.email;
          document.getElementById('phonenumber').value = userdetailsobj.phonenumber;

          // Remove only the specific user details from display (not from localStorage)
          userDetailsDisplay.removeChild(detailscontainer);
        });
      //delete button



      var deletebtn=document.createElement('button');
      deletebtn.textContent='delete';


      deletebtn.addEventListener('click', function(){
       localStorage.removeItem(newobj);
      

       //remove
       userDetailsDisplay.removeChild(detailscontainer);
      });
     //edit button
     
      //add to the class list
      detailscontainer.appendChild(header);
      detailscontainer.appendChild(name);
      detailscontainer.appendChild(mail);
      detailscontainer.appendChild(phone);
      detailscontainer.appendChild(editbtn);
      detailscontainer.appendChild(deletebtn);
     

//append child to container
userDetailsDisplay.appendChild(detailscontainer);

return detailscontainer;
  }
}