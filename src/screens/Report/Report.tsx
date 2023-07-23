import React from 'react';
import { Typography } from 'components/Typography';
import { StyledScrollView, StyledSafeAreaView } from '../common.styles';
import { useGetReports } from './useReports';
import {
  ReportCard,
  ContainerView,
  StyledCard,
  StyledTouchableOpacity,
} from './Report.styles';
import { ReportStatus } from './Report.type';
import { Alert } from 'react-native';

const Report = (): JSX.Element => {
  const { data } = useGetReports();
  const reports = data?.data || null;

  return (
    <StyledSafeAreaView testID="ReportsScreen">
      <StyledTouchableOpacity onPress={() => {}}>
        <Typography variant={'heading2'} weight="bold">
          Previous Reports
        </Typography>
      </StyledTouchableOpacity>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        {reports &&
          reports.map(report => (
            <ContainerView key={report.id} testID="ReportsContainer">
              <Typography variant={'text1'}>{report.title}</Typography>
              <ReportCard
                onPress={() => Alert.alert('Navigate to detailed report')}>
                <StyledCard testID="TicketNumber">
                  <Typography variant={'text1'} textColor="grey7">
                    {report.id}
                  </Typography>
                </StyledCard>
                <StyledCard
                  testID="StatusCard"
                  backGroundColor={
                    report.status === ReportStatus.RESOLVED ? 'green' : 'blue4'
                  }>
                  <Typography
                    variant={'text1'}
                    textColor={
                      report.status === ReportStatus.RESOLVED
                        ? 'green2'
                        : 'blue3'
                    }>
                    {report.status}
                  </Typography>
                </StyledCard>
              </ReportCard>
            </ContainerView>
          ))}
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

export default Report;
