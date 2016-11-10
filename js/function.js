/**
 * main function
 */
function main(){
    var innerbox = new Array();
    innerbox[0] = document.getElementById("li1");
    innerbox[1] = document.getElementById("li2");
    innerbox[2] = document.getElementById("li3");
    innerbox[3] = document.getElementById("li4");
    innerbox[4] = document.getElementById("li5");
    innerbox[5] = document.getElementById("li6");
    innerbox[6] = document.getElementById("li7");
    innerbox[7] = document.getElementById("li8");
    var leftBtnDom = document.getElementById("btn_l");
    var rightBtnDom = document.getElementById("btn_r");
    var mark = true;
    var i = 0;

    leftBtnDom.onclick = function(){
        innerbox[i].style.zIndex = 0;
        if(i == 0){
            i = 7;
        }
        else {
            i = i-1;
        }
        innerbox[i].style.zIndex = 1;
    }
    rightBtnDom.onclick = function(){
        innerbox[i].style.zIndex = 0;
        if(i == 7){
            i = 0;
        }
        else {
            i = i+1;
        }
        innerbox[i].style.zIndex = 1;
    }
}
