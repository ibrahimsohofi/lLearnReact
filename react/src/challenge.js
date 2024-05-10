export default function Challenge({ children }) {
  return (
    <div
      style={{
        width: "500px",
        textAlign: "center",
        border: "4px solid green",
        margin: "20px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      {children}
    </div>
  );
}
