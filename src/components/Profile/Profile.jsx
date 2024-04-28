import css from "./Profile.module.css";

const UserCard = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.userCard}>
      <div className={css.userCardBody}>
        <img src={image} alt={name} className={css.userCardImage} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userCardStats}>
        <li className={css.userCardStatsItem}>
          <span className={css.statName}>Followers</span>
          <span className={css.statData}>{followers}</span>
        </li>
        <li className={css.userCardStatsItem}>
          <span className={css.statName}>Views</span>
          <span className={css.statData}>{views}</span>
        </li>
        <li className={css.userCardStatsItem}>
          <span className={css.statName}>Likes</span>
          <span className={css.statData}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
