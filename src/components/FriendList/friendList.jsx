import PropTypes from 'prop-types';
import { FriendsList } from 'components/FriendList/friendListStyled.jsx';
import Item from 'components/FriendList/friendItem.jsx';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => (
        <Item
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
