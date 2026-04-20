export default function TaskCard({ title, status, owner }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "12px",
      marginBottom: "12px"
    }}>
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <p>Owner: {owner}</p>
    </div>
  );
}
