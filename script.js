let questions = [
 {
  q:"HTML stands for?",
  o:["Hyper Text Markup Language","High Text ML","Hyperlinks ML","None"],
  a:0
 },
 {
  q:"CSS is used for?",
  o:["Logic","Styling","Database","Hosting"],
  a:1
 },
 {
  q:"JavaScript is?",
  o:["Backend","Database","Programming Language","OS"],
  a:2
 },
 {
  q:"GitHub Pages is used for?",
  o:["Hosting","Coding","AI","Design"],
  a:0
 },
 {
  q:"Which tag is for JS?",
  o:["<css>","<js>","<script>","<java>"],
  a:2
 }
];

let index = 0;
let score = 0;
let time = 60;

document.getElementById("student").innerText =
"Student: " + localStorage.getItem("student");

function loadQ(){
 let q = questions[index];
 document.getElementById("question").innerText = q.q;
 document.getElementById("o1").innerText = q.o[0];
 document.getElementById("o2").innerText = q.o[1];
 document.getElementById("o3").innerText = q.o[2];
 document.getElementById("o4").innerText = q.o[3];
}

function next(){
 let options = document.getElementsByName("opt");
 options.forEach(o=>{
  if(o.checked && o.value == questions[index].a){
    score++;
  }
  o.checked=false;
 });
 index++;
 if(index < questions.length){
  loadQ();
 } else {
  localStorage.setItem("score", score);
  window.location.href="result.html";
 }
}

setInterval(()=>{
 time--;
 document.getElementById("timer").innerText = time;
 if(time<=0){
  localStorage.setItem("score", score);
  window.location.href="result.html";
 }
},1000);

loadQ();
