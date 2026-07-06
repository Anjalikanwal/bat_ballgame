let local_string= localStorage.getItem('scores'); 
let scores;
resetScores(local_string);


function resetScores(local_string){
scores= local_string ? JSON.parse(local_string):{
    win:0,
    lost:0,
    tie:0,
   
};
scores.display_score =function(){return  `win:${scores.win} , lost:${scores.lost} ,tie :${scores.tie}`};
display();
}
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
    localStorage.setItem('scores' , JSON.stringify(scores));
    document.querySelector("#user_move"). innerText= userMove !==undefined? `you have chosen ${userMove}` :' ';
    document.querySelector("#computer_move"). innerText=CompMove !==undefined?`computer have chosen ${CompMove}`: ' ';
    document.querySelector('#result') .innerText= result || ' ';
    document.querySelector('#score').innerText= scores.display_score();
    
}




