// this function will show the tasks
function showtask()
{
 
    document.getElementById('error').innerHTML = " ";
    let nameoftheTask = document.getElementById('tasks').value;
    
   if(nameoftheTask == "")
    {
        document.getElementById('error').innerHTML ="please Enter value";
    }
    else
    { 
        let b = document.getElementById('displaylists');
       
        let li = document.createElement('li');  //creating lists for tasks
        li.className ="list";
        reset();
        li.textContent = nameoftheTask;
        b.appendChild(li);
        let btn = document.createElement('button');
        btn.innerHTML ="x";
        btn.className = "list";
        li.appendChild(btn);
        btn.addEventListener('click', function(e)
        {
            b.removeChild(li);
        });

    }
    
}
function reset()
{
    document.getElementById('tasks').value ='';
    //console.log("in the reset");
}
// this is for deleting all the task clear ALl
function deletelist()
{
     let a = document.getElementById('displaylists').getElementsByTagName('li');
     if(a.length == 0)
     {
         alert("Nothing to delete");
     }
     else{
         let b = confirm("Do you want to delete the list");
         if( b == true)
         {
             document.getElementById('displaylists').innerHTML = " ";
         }

     }
    
}

