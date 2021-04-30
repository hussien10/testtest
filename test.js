// // let lang=document.querySelector("#lang").value
// // let loca=document.querySelector("#location").value
// // let c_logo=document.querySelector(".logo")
// // let c_name=document.querySelector(".company-name")
// // let j_title=document.querySelector(".jop-title")
// // let j_location=document.querySelector(".location")
// // let j_apply=document.querySelector(".apply")
// // let j_description=document.querySelector(".jop-description")
// // let xhr=new XMLHttpRequest()

// // xhr.open("GET",`https://jobs.github.com/positions.json?description=ruby&page=1`)
// // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// // xhr.setRequestHeader(
// //   "Access-Control-Allow-Headers",
// //   "Origin, X-Requested-With, Content-Type, Accept")

// // xhr.onload=function(){
// // 	console.log(this.responseText)
// // }
// // xhr.send()

// const data = null;

// const xhr = new XMLHttpRequest();
// var se=document.querySelector("select")

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		var res=JSON.parse(this.responseText)
// 		for(var i=0;i<res.chapters.length;i++) {
// 			se.innerHTML+=`<option name=${res.chapters[i].name_arabic}>${res.chapters[i].name_arabic}</option>`
// 			console.log(res)
// 		};}
// });
// xhr.onload=function(){
	
// }
// xhr.open("GET", "https://api.quran.com/api/v4/chapters?language=ar");
// xhr.send(data);

// var num=Number(window.prompt("Enter Your First Num"));
// var num1=Number(window.prompt("Enter Your Sec Num"));
// var num2=Number(window.prompt("Enter Your Third Num"));
// var subtotal=num+num1+num2
// // var total=Number(num)+Number(num1)+Number(num2)
// console.log(subtotal)




// var res;
// var authors=[]
// var result;
// var search=document.querySelector(".serach")
// getData()
// // create authors array
// setTimeout(() => {
//     for(var i=0;i<res.length;i++){
//         authors.push(res[i].author)
//     }
//     console.log(authors)
// }, 500);
// // real time search
// function updateResult(query) {
//     let resultList = document.querySelector(".search-result");
//     resultList.innerHTML = "";

//    setTimeout(() => {
//     authors.map(function(author){
//         query.split(" ").map(function (word){
//             if(author.toLowerCase().indexOf(word.toLowerCase()) != -1){
//                 resultList.innerHTML += `<li class="list-group-item">${author}</li>`;
//                 result=document.querySelector(".list-group-item")
//             }
//         })
//     }) 
//     result.addEventListener("click",function(){
//         search.value==this.innerHTML
//     })
//    }, 750);
// }

var btn=Array.from(document.getElementsByClassName("gbtn"))

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        (document.querySelector(".active"))?document.querySelector(".active").classList.replace("active","gbtn"):
        this.classList.replace("gbtn","active")
    })
}


function one(){
    return new Promise(function(){
        console.log("welocme hussien")
    })
}

one().then(data=>{
    console.log(data)
}).catch(err=>console.log(err))