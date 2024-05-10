export default function Card2({ name, lastName, email, age, children }) {
  return (
    <>
      <div
        style={{
          width: "250px",
          height: "400px",
          backgroundColor: "navy",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          margin: "20px",
          marginBottom: "20px",
          color: "gold",
          boxShadow: "10px 10px 8px grey",
        }}
      >
        <h1>About:</h1>
        <hr
          style={{ border: "none", background: "orange", height: "1px" }}
        ></hr>
        <h2>First Name: {name} </h2>
        <h2>Last Name: {lastName} </h2>
        <h2>Age: {age} </h2>
        <code>{email}</code>
        <div>{children}</div>
      </div>
    </>
  );
}
