function newItem (){
   //Add a new item to a list 
   let li=$('<li></li>');//<li> element in a variable
   let inputValue=$('#input').val(); //# is for the ID;"." is for Class; To get the input values from the index page, we can use val()
   li.append(inputValue);//append inputValue to the list 
   
   if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
    } //append the value of ID=list to the element <li>

