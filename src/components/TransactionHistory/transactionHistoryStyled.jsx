import styled from '@emotion/styled';

export const MainTable = styled.table`
  width: 480px;
  margin: 80px auto 80px auto;
  text-align: center;
  table-layout: fixed;
`;

export const TableHead = styled.thead`
  background-color: rgb(0, 202, 202);
  color: white;
`;
export const Tabletitle = styled.th`
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const TableBody = styled.tbody`
   tr:nth-of-type(even) {
    background-color: #ecf1f3;
`;
export const TableColumn = styled.td`
  padding-top: 9px;
  padding-bottom: 8px;
  color: grey;
`;
