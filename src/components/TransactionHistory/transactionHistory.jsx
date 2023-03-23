import PropTypes from 'prop-types';
import {
  MainTable,
  TableHead,
  Tabletitle,
  TableBody,
  TableColumn,
} from 'components/TransactionHistory/transactionHistoryStyled.jsx';

export default function Transactions({ items }) {
  return (
    <MainTable>
      <TableHead>
        <tr>
          <Tabletitle>Type</Tabletitle>
          <Tabletitle>Amount</Tabletitle>
          <Tabletitle>Currency</Tabletitle>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableColumn>{type}</TableColumn>
              <TableColumn>{amount}</TableColumn>
              <TableColumn>{currency}</TableColumn>
            </tr>
          );
        })}
      </TableBody>
    </MainTable>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
