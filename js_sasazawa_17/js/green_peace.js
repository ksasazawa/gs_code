// グーを出したら
document.querySelector("#gu").onclick = function(){
    //敵の手
    const e = Math.ceil(Math.random()*3);
    let enemy = "";
    if(e == 3){
        enemy = "パー";
        confusion = "負け";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/パー.jpg" alt="パー">`;
    }
    else if(e == 2){
        enemy = "チョキ";
        confusion = "勝ち";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/チョキ.jpg" alt="チョキ">`;
    }
    else if(e == 1){
        enemy = "グー";
        confusion = "あいこ";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/グー.jpg" alt="グー">`;
    }
    //表示
    document.querySelector("#echo").innerHTML = `相手は${enemy}。${confusion}です。`;
    document.querySelector("#gu").style.opacity = 1.0;
    
};
// チョキを出したら
document.querySelector("#cho").onclick = function(){
    //敵の手
    const e = Math.ceil(Math.random()*3);
    let enemy = "";
    if(e == 3){
        enemy = "パー";
        confusion = "勝ち";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/パー.jpg" alt="パー">`;
    }
    else if(e == 2){
        enemy = "チョキ";
        confusion = "あいこ";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/チョキ.jpg" alt="チョキ">`;
    }
    else if(e == 1){
        enemy = "グー";
        confusion = "負け";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/グー.jpg" alt="グー">`;
    }
    //表示
    document.querySelector("#echo").innerHTML = `相手は${enemy}。${confusion}です。`;
    document.querySelector("#cho").style.opacity = 1.0;
};
// パーを出したら
document.querySelector("#pa").onclick = function(){
    //敵の手
    const e = Math.ceil(Math.random()*3);
    let enemy = "";
    if(e == 3){
        enemy = "パー";
        confusion = "あいこ";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/パー.jpg" alt="パー">`;
    }
    else if(e == 2){
        enemy = "チョキ";
        confusion = "負け";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/チョキ.jpg" alt="チョキ">`;
    }
    else if(e == 1){
        enemy = "グー";
        confusion = "勝ち";
        document.querySelector("#enemy_hand").innerHTML = `<img class = "your_hand" src="img/グー.jpg" alt="グー">`;
    }
    //表示
    document.querySelector("#echo").innerHTML = `相手は${enemy}。${confusion}です。`;
    document.querySelector("#pa").style.opacity = 1.0;
};