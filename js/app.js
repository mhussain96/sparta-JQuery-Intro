
document.addEventListener("DOMContentLoaded", function() {
  console.log('Ready');


  $(function(e){

    // =====JS
    console.log("Hello JQuery");
    var itemCount = document.getElementById("count");
    itemCount.style.color = '#fff';

    // =====JQ
    // var itemCount = $('#count');
    $("#count").css('color', '#0f0')
    var itemList = $('#fruits');

    // var tagList = document.getElementsByTagName('li');

    var tagLi = $('li')
    // ======= JS ========
    var itemListJS = document.getElementById('fruits')
    var items = document.createElement("li");
    items.innerText = "Learn Javascript";
    itemListJS.appendChild(items);
    console.log(items);
    
    // =====JQuery=====
    var itemsJQ = $("<li>New item</li>");  
    $('#fruits').append(itemsJQ);
    console.log(itemsJQ);
    

    // =====JS=====
    var arrToDo = ['Cheese', 'Eggs', 'Bread'];
    
    // for (i = 0; i < arrToDo.length; i++) {
    //   console.log(arrToDo[i]);
      
    // }

    // =====JQuery=====
    $(arrToDo).each(function(item, todo) {
      console.log(todo);
     
    })  
    // =====JS=====
    arrToDo.forEach(function(todo) {
      console.log(todo);
    })  
    
    var allItems = document.getElementsByTagName("li");
    for (i = 0; i < allItems.length; i++) {
      allItems[i].className = allItems[i].className + "done";
      // console.log(allItems[i]);
    }
    
    //=====JQ

    $('li').addClass('doneJS');

    $('#count').html('7 ').css('color', '#999');


    // =====JS

    // var myButton = document.getElementById("myButton");

    // myButton.addEventListener('click', function() {
    //   console.log('myButton');
      
    // })


    // =======JQuery

    $('#myButton').on('click', function() {
      console.log('myButton clicked JQ');
      
    })

  }); // Jquery

}); // DOMContentLoaded