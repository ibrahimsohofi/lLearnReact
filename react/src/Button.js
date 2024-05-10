export default function Button({ children }) {
  return (
    <div>
      {children == null || children === " " ? (
        <div></div>
      ) : (
        <div style={{ margin: "20px" }}>
          <button
            style={{
              background: "#7110fe",
              color: "wheat",
              border: "none",
              borderRadius: "6px",
            }}
          >
            {children}
          </button>
        </div>
      )}
    </div>
  );
}
