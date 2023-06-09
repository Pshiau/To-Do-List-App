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

    // Mark an item as done;Crossing out an item from the list

    li.on("dblclick", function crossOut() { //using event handling "on"
        li.addClass("strike");
      }); //created a CSS class strike that apply line-through and add this class to <li>
        //what is the different between using toggleClass & addClass? 

    //Add the delete button "X" and delete an item from the list 
    let crossOutButton= $('<crossOutButton></crossOutButton>'); //create crossOutButton element 
    
    crossOutButton.append(document.createTextNode("X")); //reuse createTextNode('X') in jQuery
    li.append(crossOutButton);//append li element to <crossOutButton> variable 

    crossOutButton.on("click", function deleteListItem(){
        li.addClass("delete");
    });//created Class delete (display: none) from the css

    
     //Reordering the items 
    $('#list').sortable();


}

