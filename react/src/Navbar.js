export default function Navbar() {
  const Colors = {
    backgroundColor: "orange",
    padding: "5px",
    borderRadius: "6px",
  };

  return (
    <div>
      <ul id="list">
        <li style={Colors}>
          <a href="#home">
            <h2>Home</h2>
          </a>
        </li>
        <li style={Colors}>
          <a href="#Portfolio">
            <h2>Portfolio</h2>
          </a>
        </li>
        <li style={Colors}>
          <a href="#contact">
            <h2>Contact Us</h2>
          </a>
        </li>
        <li style={Colors}>
          <a href="#about">
            <h2>About Us</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}
