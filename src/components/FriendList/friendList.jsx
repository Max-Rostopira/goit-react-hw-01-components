import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendItem,
  UserName,
  Status,
} from 'components/FriendList/friendListStyled.jsx';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendItem key={id}>
            <Status isOnline={isOnline}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <UserName>{name}</UserName>
          </FriendItem>
        );
      })}
    </FriendsList>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
