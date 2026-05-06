const questions = [

"👋 Hello farmer, I am AgriNEXA AI — your smart farming assistant built to help you grow better, reduce risks, improve wellbeing and maximize profit.",

"🧑‍🌾 First, what is your full name?",

"🌍 Which region are you farming from?",

"🌱 Which crop are you planning to grow this season?",

"📏 What is your farm size? (Example: 3 Acres)",

"💰 What is your estimated farming budget in TZS?",

"😊 How are you feeling about this farming season?",

"🌦 What is your biggest farming challenge right now?",

"📈 What is your main goal this season? More profit, stability or expansion?",

"🛡 Would you like AI-powered farm insurance protection?",

"🤖 What support do you expect most from AgriNEXA AI this season?"

];

let current = 0;

function nextQuestion(){

const answer = document.getElementById("answer").value;

if(current !== 0 && answer.trim() === ""){
alert("Please answer the question first");
return;
}

current++;

if(current < questions.length){

document.getElementById("question").innerHTML =
questions[current];

document.getElementById("answer").value = "";

if(current === 0){
document.getElementById("answer").style.display = "none";
}else{
document.getElementById("answer").style.display = "block";
}

}else{

window.location.href = "loading.html";

}

}

window.onload = () => {

document.getElementById("question").innerHTML =
questions[0];

document.getElementById("answer").style.display = "none";

};