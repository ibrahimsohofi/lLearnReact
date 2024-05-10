export default function Calculer() {
  function calcule() {
    let x;
    let num = parseInt(prompt("Enter a number"));
    return (x = num * 10) (document.getElementById("x").innerHTML = x);
  }

  return (
    <div>
      <p id="x"></p>
      <button onClick={calcule}>Calculer</button>
    </div>
  );
}
