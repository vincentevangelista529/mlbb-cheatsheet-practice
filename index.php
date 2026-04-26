  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>MLBB Cheat Sheet</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
  <input type="text" id="search-input" placeholder="Search a hero...">
   <div id="BtnContainer">
      <button class="btn" onclick="filterSelection('all', this)">All</button>
<button class="btn" onclick="filterSelection('Fighter', this)">Fighter</button>
<button class="btn" onclick="filterSelection('Mage', this)">Mage</button>
<button class="btn" onclick="filterSelection('Tank', this)">Tank</button>
<button class="btn" onclick="filterSelection('Marksman', this)">Marksman</button>
<button class="btn" onclick="filterSelection('Assassin', this)">Assassin</button>
   </div>


    <div id="hero-container"></div>

    <div id="overlay"></div>
<div id="hero-detail"></div>
  
  <script src="script.js">
  </script>
  </body>
  </html>