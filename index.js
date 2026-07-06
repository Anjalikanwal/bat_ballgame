function generate_comp_choice(){
            let RandomNum= Math.random()*3;
            if(RandomNum<=1){
                return 'bat';
            }
            else if(RandomNum<=2){
                return 'ball';
            }
            else{
                return'stump';
            }
        }
function comparison (usermove,CompMove){
    if ( usermove =='bat' ){
        
            if(CompMove==='bat'){
                return 'its a tie';
            }
            else if(CompMove==='ball'){
                return'user won';
            } 
            else{
                return 'comp won';
            }
    }
    else if(usermove=='ball'){
         if(CompMove === 'bat'){
        return 'user won';
        }
       else if(CompMove === 'ball'){
        return  'its a tie';
       } 
      else{
        return 'computer won';
    }
   }
   else if(usermove=='stump'){
            if(CompMove==='bat'){
                return 'computer won';
            }
            else if(CompMove==='ball'){
                return 'user won';
            } 
            else{
                return'its a tie';
            }
   }

}

function display(userMove , CompMove, result){
    console.log(alert(`user Move is ${userMove} and compMove is ${CompMove} then  ${result}`))
}