export default function Card(person1) {
  return (
    <>
      <div
        style={{
          width: "250px",
          height: "400px",
          backgroundColor: "green",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          margin:"20px",  
          marginBottom: "20px",
          color: "orange",
          boxShadow: "10px 10px 8px grey",
        }}
      >
        <h1>About:</h1>
        <hr style={{ border: "none", background: "black", height: "1px" }}></hr>
        <h2>First Name: {person1.name} </h2>
        <h2>Last Name: {person1.lastName} </h2>
        <h2>Age: {person1.age}</h2>

        <code>{person1.email}</code>
        <div>{person1.children}</div>
      </div>
    </>
  );
}
