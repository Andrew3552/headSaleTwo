import './Banner.scss';

export default function BannerGoldCard({ icon, children, className }) {
  return (
    <div className="bannerGoldCard">
      <div className={`bannerGoldCard__circle ${className}`}>
        <img className="bannerGoldCard__circleIcon" src={icon} alt="icon" />
      </div>
      <div className="bannerGoldCard__wrapper_text">{children}</div>
    </div>
  );
}
