type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({ eyebrow, title, description, centered }: Props) {
  return (
    <div style={{
      marginBottom: "40px",
      maxWidth: centered ? "680px" : "720px",
      marginInline: centered ? "auto" : undefined,
      textAlign: centered ? "center" : undefined,
    }}>
      {eyebrow && (
        <div className="eyebrow" style={{ marginInline: centered ? "auto" : undefined }}>
          {eyebrow}
        </div>
      )}
      <h2 className="section-title" style={{ margin: 0 }}>{title}</h2>
      {description && (
        <p className="lead" style={{ marginTop: "14px" }}>{description}</p>
      )}
    </div>
  );
}
