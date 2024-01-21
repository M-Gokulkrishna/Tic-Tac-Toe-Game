// Tic Tac Toe Game 
//      -by M-GOKULKRISHNA
// JS file
// Global Variables-----!!
const Stick_1=document.querySelector('.stick1');
const Stick_2=document.querySelector('.stick2');
const Game_board=document.querySelector('.Game_board');
const result_value=document.querySelector('#result_h1');
const Game_over_board=document.querySelector('.Game_over_box');
let Game_board_shell_divs=document.querySelectorAll('.shell div');
let Shell_value=document.getElementsByClassName('shell');
let Selection_btn=document.querySelector('.Game_board+Select');
let count;
let key_value;
let Draw_count=0;
let winner_value='';

// Initial_symbol_selection_function-----!
Selection_btn.addEventListener('change',()=>{
    let result=Selection_btn.value
    switch(result){
        case 'X':
            count=0;
            break;
        case 'O':
            count=1;
        break;
    }
})
// end-----!
// function for put the symbol in shell-----!
let General=(count,Value)=>{
    if(count==0){
        Shell_value[Value].firstElementChild.style.visibility='visible';
        Shell_value[Value].value="X";
    }
    else if(count==1){
        Shell_value[Value].lastElementChild.style.visibility='visible';
        Shell_value[Value].value="O";
    }
    // Finish condition
    if((Shell_value[0].value+Shell_value[1].value+Shell_value[2].value)=="XXX" ||(Shell_value[0].value+Shell_value[1].value+Shell_value[2].value)=="OOO"){
        winner_value=Shell_value[0].value;
        window.setTimeout(timer1,1000);
        Stick_2.style.visibility="visible";
        Stick_2.style.top="-32%";
        Stick_2.style.transform="rotate(90deg)";
    }
    else if((Shell_value[3].value+Shell_value[4].value+Shell_value[5].value)=="XXX" ||(Shell_value[3].value+Shell_value[4].value+Shell_value[5].value)=="OOO"){
        winner_value=Shell_value[3].value;
        window.setTimeout(timer1,1000);
        Stick_2.style.transform="rotate(90deg)";
        Stick_2.style.visibility="visible";
    }
    else if((Shell_value[6].value+Shell_value[7].value+Shell_value[8].value)=="XXX" ||(Shell_value[6].value+Shell_value[7].value+Shell_value[8].value)=="OOO"){
        winner_value=Shell_value[6].value;
        window.setTimeout(timer1,1000);
        Stick_2.style.visibility="visible";
        Stick_2.style.top="36%";
        Stick_2.style.transform="rotate(90deg)";
    }
    else if((Shell_value[0].value+Shell_value[3].value+Shell_value[6].value)=="XXX" ||(Shell_value[0].value+Shell_value[3].value+Shell_value[6].value)=="OOO"){
        winner_value=Shell_value[0].value;
        window.setTimeout(timer1,1000);
        Stick_2.style.left="15%";
        Stick_2.style.transform="rotate(0deg)";
        Stick_2.style.visibility="visible";
    }
    else if((Shell_value[1].value+Shell_value[4].value+Shell_value[7].value)=="XXX" ||(Shell_value[1].value+Shell_value[4].value+Shell_value[7].value)=="OOO"){
        winner_value=Shell_value[1].value;
        window.setTimeout(timer1,1000);
        Stick_2.style.transform="rotate(0deg)"
        Stick_2.style.visibility="visible";
    }
    else if((Shell_value[2].value+Shell_value[5].value+Shell_value[8].value)=="XXX" ||(Shell_value[2].value+Shell_value[5].value+Shell_value[8].value)=="OOO"){
        winner_value=Shell_value[2].value;
        window.setTimeout(timer1,1000);
        Stick_2.style.left="83%";
        Stick_2.style.transform="rotate(0deg)"
        Stick_2.style.visibility="visible";
    }
    else if((Shell_value[0].value+Shell_value[4].value+Shell_value[8].value)=="XXX" ||(Shell_value[0].value+Shell_value[4].value+Shell_value[8].value)=="OOO"){
        winner_value=Shell_value[0].value;
        window.setTimeout(timer1,1000);
        Stick_1.style.transform="rotate(-45deg)";
        Stick_1.style.visibility="visible";
    }
    else if((Shell_value[2].value+Shell_value[4].value+Shell_value[6].value)=="XXX" ||(Shell_value[2].value+Shell_value[4].value+Shell_value[6].value)=="OOO"){
        winner_value=Shell_value[2].value;
        window.setTimeout(timer1,1000);
        Stick_1.style.visibility="visible";
    }
}
// end-----!
// Shell's clicking event capturing function-----!
let btn_click=(Value)=>{
    Draw_count+=1;
    General(count,Value);
    count+=1;
    if(count>1){
        count=0;
    }
    if(Draw_count==8){
        winner_value='Draw';
        window.setTimeout(timer1,1000);
    }
}
// end-----!
// Timer function-----!
let timer1=()=>{
    Game_board.style.visibility="hidden";
    Stick_1.style.visibility="hidden";
    Stick_2.style.visibility="hidden";
    for (key_value of Game_board_shell_divs) {
        key_value.style.visibility="hidden";
    }
    Game_over_board.style.visibility="visible";
    if(winner_value!='Draw'){
        result_value.innerHTML=`${winner_value} is Winner`
        return;
    }
    else{
        result_value.innerHTML=`${winner_value}`
    }
        
}
// end-----!

// Refresh_btn_function-----!
// To Start the New Game-----!
let refresh_btn=()=>{
    window.location.reload();
}
// end-----!