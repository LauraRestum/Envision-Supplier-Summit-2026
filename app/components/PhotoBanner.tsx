export default function PhotoBanner({
  imageSrc,
  imageAlt,
  badge,
  heading,
  subtitle,
  ctaText,
  ctaHref,
}: {
  imageSrc?: string;
  imageAlt: string;
  badge: string;
  heading: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <div className="pb rv d2">
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt} />
      ) : (
        <div className="img-placeholder">{imageAlt}</div>
      )}
      <div className="pb-ov">
        <div className="pb-inner">
          <div className="pb-tag">{badge}</div>
          <div className="pb-h" style={{ whiteSpace: "pre-line" }}>
            {heading}
          </div>
          <div className="pb-sub">{subtitle}</div>
          {ctaText && ctaHref && (
            <a
              className="btn-g"
              href={ctaHref}
              style={{ marginTop: 20, fontSize: 10, padding: "13px 24px" }}
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
