export default function StatusBadge({ status }) {
  return (
    <span style={{
      padding: "4px 8px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "12px"
    }}>
      {status}
    </span>
  );
}
