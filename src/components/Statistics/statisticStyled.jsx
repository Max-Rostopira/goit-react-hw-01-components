import styled from '@emotion/styled';

export const Item = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

export const Label = styled.span`
  color: #cefbfe;
`;

export const Value = styled.span`
  color: #cefbfe;
`;
export const Section = styled.section`
    width: 320px;
    height: 140px;
    margin: 80px auto 0 auto;

    box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.27);
    background-color: white;

    display: flex;
    flex-direction: column;
}
`;

// export const Heading = styled.div`
//   padding: 32px 10px;
//   text-align: center;
// `;

export const Title = styled.h2`
  color: #5c5e60;
  font-size: 24px;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  color: white;
  padding: 0;
  display: flex;
  list-style: none;
  height: 100%;
  margin: 0;
`;
