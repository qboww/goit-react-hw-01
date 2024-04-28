import css from "./Profile.module.css";

const UserCard = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => (
  <>
    <div className={css.userCard}>
      <div className={css.userCardBody}>
        <img src={avatar} alt={name} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userCardStats}>
        <li>
          <span className={css.statName}>Followers</span>
          <span className={css.statData}>{followers}</span>
        </li>
        <li>
          <span className={css.statName}>Views</span>
          <span className={css.statData}>{views}</span>
        </li>
        <li>
          <span className={css.statName}>Likes</span>
          <span className={css.statData}>{likes}</span>
        </li>
      </ul>
    </div>
  </>
);

export default UserCard;
