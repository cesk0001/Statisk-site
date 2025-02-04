const liste = document.querySelector("#playliste");
const mitArray = ["WAP", "Family Ties", "Helena", "Den Knaldrøde Gummibåd"];

function lavListe() {
  const punkter = mitArray.map((navn) => `<ul>${navn}</ul>`).join(``);
  liste.innerHTML = punkter;
}
lavListe();
