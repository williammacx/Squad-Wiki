const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch("../data/characters.json")

.then(r=>r.json())

.then(characters=>{

const c = characters.find(x=>x.id===id);

if(!c){

document.getElementById("character").innerHTML="<h1>Character not found.</h1>";

return;

}

document.getElementById("character").innerHTML=`

<div class="article">

<div class="infobox">

<img src="${c.image}">

<table>

<tr><td>Name</td><td>${c.name}</td></tr>

<tr><td>Species</td><td>${c.species}</td></tr>

<tr><td>Age</td><td>${c.age}</td></tr>

<tr><td>Occupation</td><td>${c.occupation}</td></tr>

<tr><td>Weapon</td><td>${c.weapon}</td></tr>

<tr><td>Status</td><td>${c.status}</td></tr>

</table>

</div>

<h1>${c.name}</h1>

<blockquote>${c.quote}</blockquote>

<h2>Appearance</h2>

<p>${c.appearance}</p>

<h2>Personality</h2>

<p>${c.personality}</p>

<h2>Biography</h2>

<p>${c.biography}</p>

<h2>Abilities</h2>

<ul>

${c.abilities.map(a=>`<li>${a}</li>`).join("")}

</ul>

<h2>Equipment</h2>

<ul>

${c.equipment.map(a=>`<li>${a}</li>`).join("")}

</ul>

<h2>Trivia</h2>

<ul>

${c.trivia.map(a=>`<li>${a}</li>`).join("")}

</ul>

</div>

`;

});
