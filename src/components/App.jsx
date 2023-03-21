//=================Profile========================//
import Profile from './Profile';
import user from '../data/user.json';
//=================Statistic======================//
import Statistics from './Statistics';
import data from '../data/data.json';
//=================FriendList====================//
import FriendList from './FriendList';
import friends from '../data/friends.json';
//=================TransactionHistory============//
import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';

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
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Statistics stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
