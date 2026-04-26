 let allHeroes = [];
 function closeDetail() {
  document.getElementById("hero-detail").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

fetch('heroes.json')
  .then((response) => response.json())
  .then(data => {
    console.log(data.heroes);
     allHeroes = data.heroes;
     displayHeroes(allHeroes);
  })


 function displayHeroes(list){
      document.getElementById("hero-container").innerHTML = "";
      list.forEach(function(element, index){

        const {name, role, icon, counters, counteredBy, tier} = element;
        const newDiv = document.createElement("div");
        newDiv.className = "hero-box"

        newDiv.innerHTML = `
          <img src="hero-images/${name}.jpg" alt="${name}">
          <h2>${name}</h2>
          <p>${role}</p>
          `
        const container = document.getElementById("hero-container");
        container.appendChild(newDiv);
        
        newDiv.addEventListener('click', function() {
      const detail = document.getElementById("hero-detail");
        document.getElementById("overlay").style.display = "block";
      
      detail.innerHTML = `
       <button id="close-btn" onclick="closeDetail()">X</button>
       <img src="hero-images/${name}.jpg" alt="${name}">
        <h2>${name}</h2>
        <p>${role}</p>
        <span class="tier-${tier}">Tier: ${tier} </span>
        <p>Counters: ${counters}</p>
        <p>Countered by: ${counteredBy}</p>
      `;
      detail.style.display = "block"
    })


      }) 
    }

 
  function filterSelection(role, clickedBtn){
     document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
     clickedBtn.classList.add('active');
    if(role == 'all'){
      displayHeroes(allHeroes);
    } else {
      let result = allHeroes.filter(heroes => heroes.role === role);
      console.log(result);
      displayHeroes(result);
    }
  }

  document.getElementById("search-input").addEventListener('input', function() {
  
    let typed = this.value.toLowerCase();
    let result = allHeroes.filter(hero => hero.name.toLowerCase().includes(typed))
    displayHeroes(result);
})



