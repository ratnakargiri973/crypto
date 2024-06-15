
let searchBtn = document.getElementById("submit");
 async function searchReasult(){
   let value = document.getElementById("search").value;
   let getValue = await getData(value);
   render(getValue);
//    console.log(getValue);
   return getValue;
}
// searchReasult();
  async function getData(searchText) {
    let result = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchText}`);
    let data = await result.json();
    return data;
  }
  
  function render(data) {
    document.getElementById('search-results').innerHTML = ""; // Clear previous results
  
    if (data.coins) {
    for (let i = 0; i < data.coins.length; i++) {
      const singleCoin = data.coins[i];
      const index = i + 1;
      const logo = singleCoin.thumb;
      const name = singleCoin.name;
      const symbol = singleCoin.symbol;
      const coinId = singleCoin.id;
      createSingleCard(index, logo, name, symbol, coinId);
    }
}
else{
    console.log("No coins found.");
}
  }

  
  function createSingleCard(index, logo, name, symbol, coinId) {
    // document.getElementById('search-results').innerHTML = "";
    const id_elem = document.createElement('p');
    if(index < 10) {
      index = index + "";
    }
    id_elem.innerHTML = index;
  
    const logo_elem = document.createElement('img');
    logo_elem.src = logo;
    logo_elem.alt = "Coin Logo";
  
    const name_elem = document.createElement('h3');
    name_elem.innerText = name;
  
    const symbol_elem = document.createElement('h3');
    symbol_elem.innerText = symbol;
  
    const anchor_elem = document.createElement('a');
  anchor_elem.innerText = "More Info";
  anchor_elem.href = "./details.html";
    // document.querySelector(".seeMore").addEventListener("click" , showDesc());
  
    const container_elem = document.createElement('div');
    container_elem.classList.add('single-search-result', 'card');
    container_elem.appendChild(id_elem);
    container_elem.appendChild(logo_elem);
    container_elem.appendChild(name_elem);
    container_elem.appendChild(symbol_elem);
    container_elem.appendChild(anchor_elem);
  
    document.getElementById('search-results').appendChild(container_elem);
  
  }
    

  
  window.onload = function() {
    searchReasult();
  }
  