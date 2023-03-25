import PropTypes from 'prop-types';
import {
  FriendItem,
  Status,
  UserName,
} from 'components/FriendList/friendListStyled.jsx';

export default function Item({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FriendItem>
  );
}

Item.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
