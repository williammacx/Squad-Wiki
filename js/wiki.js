async function load(id,file){

const response=await fetch(file);

const html=await response.text();

document.getElementById(id).innerHTML=html;

}

(async()=>{

await load("header","templates/header.html");

await load("sidebar","templates/sidebar.html");

await load("footer","templates/footer.html");

const button=document.getElementById("darkButton");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}

button.onclick=()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
?"dark":"light"
);

};

})();
