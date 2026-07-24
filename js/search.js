let pages=[];

fetch("data/pages.json")
.then(r=>r.json())
.then(data=>pages=data);

const box=document.getElementById("search");

if(box){

box.onkeyup=()=>{

const value=box.value.toLowerCase();

const results=pages.filter(p=>p.title.toLowerCase().includes(value));

console.log(results);

};

}
