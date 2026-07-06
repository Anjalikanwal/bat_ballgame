let scores={
    win:0,
    lost:0,
    tie:0,
    display_score:function(){return  `win:${scores.win} , lost:${scores.lost} ,tie :${scores.tie}`}

};
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
                scores.tie++;
                return 'its a tie';
                
            }
            else if(CompMove==='ball'){
                scores.win++;
                return'user won';
                
            } 
            else{
                scores.lost++;
                return 'comp won';
                
            }
    }
    else if(usermove=='ball'){
         if(CompMove === 'bat'){
         scores.win++;
        return 'user won';
        
        }
       else if(CompMove === 'ball'){
        scores.tie++;
        return  'its a tie';
        
       } 
      else{
        scores.lost++;
        return 'computer won';
        
    }
   }
   else if(usermove=='stump'){
            if(CompMove==='bat'){
                scores.lost++;
                return 'computer won';
                

            }
            else if(CompMove==='ball'){
                scores.win++;
                return 'user won';
                
            } 
            else{
                scores.tie++;
                return'its a tie';
                
            }
   }

}

function display(userMove , CompMove, result){
    console.log(alert(`user Move is ${userMove} and compMove is ${CompMove} then  ${result}
        ${scores.display_score()}`))
}




console.log("hello");