export default function SpeakerCard({
  name,
  role,
  imageSrc,
  objectPosition,
  className,
}: {
  name: string;
  role: string;
  imageSrc?: string;
  objectPosition?: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className={`spk-card${className ? ` ${className}` : ""}`}>
      <div className="spk-photo">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            style={{ objectPosition: objectPosition || "center" }}
          />
        ) : (
          <div className="img-placeholder">{initials}</div>
        )}
        <div className="spk-photo-overlay" />
      </div>
      <div className="spk-info">
        <div className="spk-name">{name}</div>
        <div className="spk-role">{role}</div>
      </div>
    </div>
  );
}
