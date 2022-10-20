// 【ホーム画面】敵を選択して画面遷移
function battle(){
    let enemy = "";
    const enemies = document.enemy_selection.kind;
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].checked) {
          enemy = enemies[i].value;
          break;
        }
    }
    window.location.href = "green_peace_battle.html" + "?" + enemy ;
}

// 【バトル画面】敵キャラ設定
function init(){
    const param = location.search;
    if(param=="?zu"){
        document.querySelector("#enemy_name").innerHTML = "ズ・ゴオマ・グ";
        document.querySelector("#enemy_photo").src = "./img/ズ・ゴオマ・グ_2.jpeg";
    }
    else if(param=="?me"){
        document.querySelector("#enemy_name").innerHTML = "メ・ガルメ・レ";
        document.querySelector("#enemy_photo").src = "./img/メ・ガルメ・レ_2.jpeg";
    }
    else if(param=="?go"){
        document.querySelector("#enemy_name").innerHTML = "ゴ・ガドル・バ";
        document.querySelector("#enemy_photo").src = "./img/ゴ・ガドル・バ_2.jpeg";
    }
    else if(param=="?n"){
        document.querySelector("#enemy_name").innerHTML = "ン・ダグバ・ゼバ";
        document.querySelector("#enemy_photo").src = "./img/ン・ダグバ・ゼバ_2.jpeg";
    }
};

// 【バトル画面】じゃんけん
function janken(your_hand){
    const e = Math.ceil(Math.random()*3);
    console.log(`敵の手は${e}。自分の手は${your_hand}`);
    let enemy_hand = "";
    let conclusion = "";
        // 相手がパーの時
        if(e == 3){
            enemy_hand = "pa";
            if(your_hand == "gu"){
                conclusion = "lose";
                document.querySelector("#echo").innerHTML = "You Lose";
            }
            else if(your_hand == "cho"){
                conclusion = "win";
                document.querySelector("#echo").innerHTML = "You Win";
            }
            else{
                conclusion = "draw";
                document.querySelector("#echo").innerHTML = "Draw";
            }
            document.querySelector(".enemy_hand").innerHTML = `<img class = "your_hand" src="img/パー.jpg" alt="パー">`;
        }
        // 相手がチョキの時
        else if(e == 2){
            enemy_hand = "cho";
            if(your_hand == "gu"){
                conclusion = "win";
                document.querySelector("#echo").innerHTML = "You Win";
            }
            else if(your_hand == "cho"){
                conclusion = "draw";
                document.querySelector("#echo").innerHTML = "Draw";
            }
            else{
                conclusion = "lose";
                document.querySelector("#echo").innerHTML = "You Lose";
            }
            document.querySelector(".enemy_hand").innerHTML = `<img class = "your_hand" src="img/チョキ.jpg" alt="チョキ">`;
        }
        // 相手がグーの時
        else if(e == 1){
            enemy_hand = "gu";
            if(your_hand == "gu"){
                conclusion = "draw";
                document.querySelector("#echo").innerHTML = "Draw";
            }
            else if(your_hand == "cho"){
                conclusion = "lose";
                document.querySelector("#echo").innerHTML = "You Lose";
            }
            else{
                conclusion = "win";
                document.querySelector("#echo").innerHTML = "You Win";
            }
            document.querySelector(".enemy_hand").innerHTML = `<img class = "your_hand" src="img/グー.jpg" alt="グー">`;
        };
};



