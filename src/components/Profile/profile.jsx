import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Label,
  Quantity,
  Stats,
  StatsItem,
} from 'components/Profile/profileStyled.jsx';

export default function Profile({ username, tag, location, avatar, stats }) {
  const userStats = [
    { lable: 'Followers', quantity: stats.followers },
    { lable: 'Views', quantity: stats.views },
    { lable: 'Likes', quantity: stats.likes },
  ];
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        {userStats.map(({ lable, quantity }) => (
          <StatsItem key={lable}>
            <Label>{lable}</Label>
            <Quantity>{quantity}</Quantity>
          </StatsItem>
        ))}
      </Stats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.any.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
