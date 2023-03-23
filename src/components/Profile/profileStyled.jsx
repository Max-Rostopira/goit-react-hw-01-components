import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  text-align: center;
  padding-top: 20px;
  width: 320px;
  height: 400px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.27);
  background-color: white;
`;

export const Description = styled.div`
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 250px;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f3f6f9;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: x-large;
`;

export const Tag = styled.p`
  color: gray;
`;

export const Location = styled.p`
  color: gray;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #8694a2;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #25384d;
`;

export const Stats = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  background-color: rgb(220, 220, 220);
  width: 100%;

  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 8px;
  border: 1px solid rgb(184, 184, 184);
  border-bottom: none;
`;
