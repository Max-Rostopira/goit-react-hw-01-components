export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isonline, avatar, name }) => {
        return (
          <li key={id}>
            <span isonline={isonline}></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
