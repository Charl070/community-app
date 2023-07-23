import styled from 'styled-components/native';

export const StyledCardLayout = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-horizontal: 24px;
  width: 100%;
`;

export const StyledCardView = styled.View`
  padding-vertical: 12px;
  width: 160px;
`;

export const HeadingView = styled.View`
  align-self: flex-start;
  margin-left: 24px;
`;

export const ActivityView = styled.View`
  flex-grow: 1;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
