


//✅ 1. getElementById()

var para = document.getElementById("page");
/*  ✔️ Only works for IDs
    ❌ Cannot be used for classes or tags  */


//✅ 2. getElementsByClassName()
    var paragraphs = document.getElementsByClassName("main");
/*  ✔️ Selects multiple elements
    ❌ Does not support advanced selectors  */


//✅ 3. getElementsByTagName()
    var allParagraphs = document.getElementsByTagName("p");
/*  ✔️ Good for general element types
    ❌ No class or ID filtering  */


//✅ 4. querySelector()
    var firstNote = document.querySelector(".main");
/*  ✔️ Flexible and powerful
    ❌ Only returns the first match  */


//✅ 5. querySelectorAll()
    var allNotes = document.querySelectorAll(".note");
/*  ✔️ Great for loops, filtering, chaining
    ❌ Not live (doesn’t update automatically if DOM changes)  */







//✅ 6. textContent, innerHTML, setAttribute
var statusE1 = document.getElementById("status");

    // Change text
    statusE1.textContent = "Done!";
    
    // Change HTML
    statusE1.innerHTML = "<strong>Success!</strong>";
    
    // Set attribute
    statusE1.setAttribute("class", "finished");
    
    // Get attribute
    console.log(statusE1.getAttribute("class")); // finished 
    
 /*   ✔️ Versatile
      ❌ innerHTML can be risky if using user input */






//✅ 7. classList methods
      var box = document.getElementById("box");

      // Add/remove/toggle class
      box.classList.add("red");
      box.classList.remove("red");
      box.classList.toggle("hidden");


/*  ✔️ Cleaner than changing className
    ❌ Not supported in older browsers (very rare now)  */










//✅ 8. style property
var txt = document.getElementById("colorText");
txt.style.color = "green";
txt.style.fontSize = "20px";

/*  ✔️ Quick styling
    ❌ Can override styles unexpectedly  */











//✅ 9. createElement + appendChild
var ul = document.getElementById("fruits");
var li = document.createElement("li");
li.textContent = "Apple";
ul.appendChild(li);

/*  ✔️ Good for dynamic content
    ❌ Must manage structure manually  */  












//✅ 10. insertBefore, removeChild, replaceChild
var tasks = document.getElementById("tasks");

// insertBefore
var newTask = document.createElement("li");
newTask.textContent = "Urgent Task";
tasks.insertBefore(newTask, document.getElementById("task1"));

// removeChild
tasks.removeChild(document.getElementById("task2"));

// replaceChild
var updatedTask = document.createElement("li");
updatedTask.textContent = "Updated Task";
tasks.replaceChild(updatedTask, document.getElementById("task1"));

/*  ✔️ Powerful control
    ❌ Needs exact references  */








//✅ 11. addEventListener
var btn = document.getElementById("clickMe");
btn.addEventListener("click", () => {
  alert("Clicked!");
});

/*  ✔️ Works with all events
    ❌ Watch out for multiple listeners  */









//✅ 12. preventDefault() in forms
    var form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var name = document.getElementById("nameInput").value;
  console.log("Submitted: " + name);
});

/*  ✔️ Allows custom form handling
    ❌ Must manually validate input  */










//✅ 13. Dynamic list generation
    var list = document.getElementById("todoList");
    var addBtn = document.getElementById("addTodo");

addBtn.addEventListener("click", () => {
  var item = document.createElement("li");
  item.textContent = "New Task";
  list.appendChild(item);
});

/*  ✔️ Great for to-do apps
    ❌ Can grow infinitely without limits */





      
    