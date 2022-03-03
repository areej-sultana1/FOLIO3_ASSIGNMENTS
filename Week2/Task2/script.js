function peak(array1)
{
    
    let len =array1.length;
    let count;
    count=0;
    let array2 = [count];
    let j=0;
    for(var i=0;i<len;i++ )
    {
        if(array1[0]>array1[1])
        {
                count++;
                array2[j]= array1[i];
                j++;
            
        }
        if(i === len-1  )
        {
            if(array1[i]>array1[i-1])
            {
                count++;
                array2[j]= array1[i];
                j++;
            }

        }
        else if(array1[i] >= array1[i+1] && array1[i] >= array1[i-1])
        {
            count++;
                array2[j]= array1[i];
                j++;
                
    
        }
    }
    let count1=0;
    console.log("Peak Values are: ")
    for(var value of array2)
    {
        count1++;
        console.log(value);
    }
    showpeakarray(array2);
}  
function showarraynum(arr)
{
    
    let len1 = arr.length;
    let ptagline = document.getElementById('pid');
    let tagline = document.createElement('p');
    tagline.innerHTML = "Array Values are :";
    ptagline.appendChild(tagline);
    // here  printing the array the user has entered
    let c= document.getElementById("showarray"); 
   
    for(let i =0;i<len1 ;i++)
    {
        let list =  document.createElement('li');
     c.appendChild(list);
     list.textContent =arr[i];
    };
}
// it shows the list of peak values in an array
function showpeakarray(arr)
{
    let len2 = arr.length;
    let pshowline = document.getElementById('p2id');
    let pnewline = document.createElement('p');
    pnewline.innerHTML = "Peak Values is/are :";
    pshowline.appendChild(pnewline);
    let b = document.getElementById('listpeak');
    
    for(let i =0;i<len2 ;i++)
    {
        let li =  document.createElement('li');
     b.appendChild(li);
     li.textContent =arr[i];
    };
   
    
 }
 
// resting the inputbox
 function reset()
 {
   document.getElementById('inputtext').value = '';
    
 }
//  main fucntion
function main()
{
    document.getElementById('message').innerHTML = "";
    let defined_array =[];

    let lengthofarray = document.getElementById('inputtext').value;
    if(lengthofarray == '')
    {
        document.getElementById('message').innerHTML = "Enter value";
    }
    else{
    for(let i = 1;i <= lengthofarray ;i++)
    {
        defined_array[i-1] = prompt("Enter number  : " + i );
    }
    reset();
   
    peak(defined_array);
    showarraynum(defined_array);
    
}
}