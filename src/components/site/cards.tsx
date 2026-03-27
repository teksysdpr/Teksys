type CardProps = {
  title: string;
  description: string;
};

export function InfoCard({ title, description }: CardProps) {
  return (
    <div className="card">
      <h3 style={{
        fontSize: "1.05rem",
        fontWeight: 700,
        margin: "0 0 10px",
        fontFamily: "var(--font-sora, system-ui)",
        color: "var(--text)",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--text-3)" }}>
        {description}
      </p>
    </div>
  );
}

export function SimpleListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card">
      <h3 style={{
        fontSize: "1.05rem",
        fontWeight: 700,
        margin: "0 0 14px",
        fontFamily: "var(--font-sora, system-ui)",
        color: "var(--text)",
      }}>
        {title}
      </h3>
      <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>–</span>
            <span style={{ fontSize: "0.875rem", color: "var(--text-3)", lineHeight: 1.7 }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IconStatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-lg)",
      padding: "20px",
    }}>
      <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--gold)", marginBottom: "6px" }}>
        {value}
      </div>
      <div style={{ fontSize: "0.8rem", color: "var(--text-3)", lineHeight: 1.65 }}>{label}</div>
    </div>
  );
}
