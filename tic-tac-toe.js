window.addEventListener('load',function(){
    var whoseTurn="playerX"; 
    var winner_found=false;
    var allSquares= document.querySelectorAll('#board div'); 

    for(let i=0;i<allSquares.length;i++){
        allSquares[i].classList.add('square'); 
        allSquares[i].addEventListener('click', play); 
        allSquares[i].addEventListener('mouseover', hoverStart);
        allSquares[i].addEventListener('mouseout', hoverStop);
    }

    document.querySelector('.btn').addEventListener("click",refreshBoard);



/****************************************event listener Functions******************************************************/
    function play(event){
        var squareArray=Array.from(allSquares);
        var clicked_square_index=squareArray.indexOf(event.target);

        if(whoseTurn==="playerO" && squareArray[clicked_square_index].innerHTML=="" && winner_found==false){
            whoseTurn="playerX"
            squareArray[clicked_square_index].innerHTML = "O";
            squareArray[clicked_square_index].classList.add('O');
            squareArray[clicked_square_index].classList.toggle("hover");
            
            if (check_for_winnner()=="winnerO"){
                document.getElementById('status').innerHTML="Congratulations! O is the Winner!";
                document.getElementById('status').classList.add("you-won");
                document.getElementById('status').classList.add("before");
                document.getElementById('status').classList.add("after");
                winner_found=true;
            }

            whoseTurn="playerX"

        } 
        else if(whoseTurn==="playerX" && squareArray[clicked_square_index].innerHTML=="" && winner_found==false){
            whoseTurn="playerO"
            squareArray[clicked_square_index].innerHTML = "X";
            squareArray[clicked_square_index].classList.add('X');
            squareArray[clicked_square_index].classList.toggle("hover");
            
            if (check_for_winnner()=="winnerX"){
                document.getElementById('status').innerHTML="Congratulations! X is the Winner!";
                document.getElementById('status').classList.add("you-won");
                document.getElementById('status').classList.add("before");
                document.getElementById('status').classList.add("after");
                winner_found=true;
            }

            whoseTurn="playerO"
        }       

    }//end of play function

    function hoverStart(event){
        var squareArray=Array.from(allSquares);
        var hover_square_index=squareArray.indexOf(event.target);
        if (squareArray[hover_square_index].innerHTML==""){
            squareArray[hover_square_index].classList.toggle("hover",true);
        }
    }


    function hoverStop(event){
        var squareArray=Array.from(allSquares);
        var hover_square_index=squareArray.indexOf(event.target);
        if (squareArray[hover_square_index].innerHTML==""){
            squareArray[hover_square_index].classList.toggle("hover");
        }
    }

    
    function refreshBoard(){
        document.getElementById('status').innerHTML="Move your mouse over a square and click to play an X or an O.";
        document.getElementById('status').classList.remove("you-won");
        document.getElementById('status').classList.remove("before");
        document.getElementById('status').classList.remove("after");

        var squareArray=Array.from(allSquares);
        for(let i=0;i<squareArray.length;i++){
            squareArray[i].innerHTML=""
            if (squareArray[i].classList.contains('O')){
                squareArray[i].classList.remove('O');
            }
            else{
                squareArray[i].classList.remove('X');
            }
        }
        
        winner_found=false;
    }
/******************************************************************************************************************************************8 */
    function check_for_winnner(){
        var winning_config=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
        var squareArray=Array.from(allSquares);
        for(i=0;i<winning_config.length;i++){
            if(squareArray[winning_config[i][0]].innerHTML=="X"&&squareArray[winning_config[i][1]].innerHTML=="X"&&squareArray[winning_config[i][2]].innerHTML=="X"){
                return "winnerX"
            }
            else if(squareArray[winning_config[i][0]].innerHTML=="O"&&squareArray[winning_config[i][1]].innerHTML=="O"&&squareArray[winning_config[i][2]].innerHTML=="O"){
                return "winnerO"
            } 
        }
        return false;
    }


});