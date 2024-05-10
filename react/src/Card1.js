export default function Card2(person2) {
  let name = person2.name;
  let lname = person2.lastName;
  let email = person2.email;
  let age = person2.age;
  let content = person2.children;
  return (
    <>
      <div
        style={{
          width: "250px",
          height: "400px",
          backgroundColor: "black",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          margin: "20px",
          marginBottom: "20px",
          color: "yellow",
          boxShadow: "10px 10px 8px grey",
        }}
      >
        <h1>About:</h1>
        <hr style={{ border: "none", background: "white", height: "1px" }}></hr>
        <h2>First Name: {name} </h2>
        <h2>Last Name: {lname} </h2>
        <h2>Age: {age} </h2>

        <code>{email}</code>
        <div>{content}</div>
      </div>
    </>
  );
}
