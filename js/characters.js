fetch("data/characters.json")

.then(response => response.json())

.then(characters => {

    const list = document.getElementById("characterList");

    characters.forEach(character => {

        list.innerHTML += `

        <div class="card">

            <img src="${character.image}">

            <h3>${character.name}</h3>

            <p>${character.occupation}</p>

            <p>${character.affiliation}</p>

            <a href="pages/character.html?id=${character.id}">
                Read More
            </a>

        </div>

        `;

    });

});
