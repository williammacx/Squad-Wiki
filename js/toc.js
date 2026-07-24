const article=document.querySelector(".article");

if(article){

const headings=article.querySelectorAll("h2");

if(headings.length){

const toc=document.createElement("div");

toc.className="toc";

toc.innerHTML="<h3>Contents</h3>";

const list=document.createElement("ol");

headings.forEach((h,i)=>{

const id="section"+i;

h.id=id;

const li=document.createElement("li");

li.innerHTML=`<a href="#${id}">${h.innerText}</a>`;

list.appendChild(li);

});

toc.appendChild(list);

article.prepend(toc);

}

}
