const displaymain = document.getElementById('display-main');

const displayChild = displaymain.querySelectorAll('.display-list');
// console.log(displaymain);
// console.log(displayChild[0].children[0]);

// console.log(displayChild.length);
let ArrayValue=[];   
function getValue() {
    ArrayValue = [];
    for (i = 0; i<displayChild.length; i++)
    {
        if (displayChild[i].children[0].checked)
        {
            ArrayValue.push(displayChild[i].children[0].name);
            
        }    
    }

    // console.log(ArrayValue)
    
    fetch('http://localhost:7700/user/delete-list', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            ArrayValue:ArrayValue,
            
        }),
    })
        .then(resData => {

            return resData.json();  
        })
        .then(data => {
            console.log('Delete Successfully!', data);
        for (i = 0; i < displayChild.length;i++){
       
        // console.log(i, displayChild[i].children[0]); 
        // console.log(displayChild[i].children[0].checked)
        if (displayChild[i].children[0].checked)
        {

        //    console.log('Delete Parent Tag')
            displaymain.removeChild(displayChild[i]);
            displayChild[i].children[0].checked = false;
        }    
    
    }
    })
    .catch(err => {
      console.log('Error in Deleting Object', err); 
    })
    
    
    
    
    
     
  
}



