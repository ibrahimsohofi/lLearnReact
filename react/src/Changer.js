export default function Changer() {
  var name="Ibrahim SOHOFI";
  function ChangeValue(){
    name="Mohammed SOHOFI";
  }
    return (
    <div style={{textAlign:"center"}}>
      <button
      onClick={ChangeValue}
        style={{
          background: "red",
          color: "white",
          padding: "15px",
          border: "none",
          borderRadius: "6px",
          fontSize: "20px",
          margin: "10px",
        }}
      >
        Change Value
      </button>
      <h1>{name}</h1>
    </div>
  );
}
