//=================Profile========================//
import Profile from 'components/Profile/profile';
import user from 'data/user.json';
//=================Statistic======================//
import Statistics from 'components/Statistics/statistics';
import data from 'data/data.json';
//=================FriendList====================//
import FriendList from 'components/FriendList/friendList';
import friends from 'data/friends.json';
//=================TransactionHistory============//
import TransactionHistory from 'components/TransactionHistory/transactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
