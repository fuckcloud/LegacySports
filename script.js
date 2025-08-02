
document.getElementById("searchBar").addEventListener("input", function(e) {
  const query = e.target.value.toLowerCase();
  const output = document.getElementById("searchResults");
  output.innerHTML = "";

  const fakeDB = [
    { title: "1986 World Cup Final - Argentina vs Germany" },
    { title: "Maradona Goal of the Century" },
    { title: "Pelé 1970 Highlights" },
    { title: "Nadal vs Federer - Wimbledon 2008" }
  ];

  const results = fakeDB.filter(item => item.title.toLowerCase().includes(query));
  results.forEach(result => {
    const div = document.createElement("div");
    div.textContent = result.title;
    output.appendChild(div);
  });
});
