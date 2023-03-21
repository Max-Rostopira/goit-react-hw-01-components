import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats }) {
  const userStats = [
    { lable: 'Followers', quantity: stats.followers },
    { lable: 'Views', quantity: stats.views },
    { lable: 'Likes', quantity: stats.likes },
  ];
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {userStats.map(({ lable, quantity }) => (
          <li key={lable}>
            <span className="label">{lable}</span>
            <span className="quantity">{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.any,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
