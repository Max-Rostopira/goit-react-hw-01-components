import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatisticsList,
  Item,
  Label,
  Value,
} from 'components/Statistics/statisticStyled';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title ? <Title>{title}</Title> : 'title'}
      <StatisticsList>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{label}</Label>
            <Value>{percentage}</Value>
          </Item>
        ))}
      </StatisticsList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
