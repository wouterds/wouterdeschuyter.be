import styled from 'styled-components';

export const Container = styled.div`
  background: #1f1f1f;
  padding: 0.6em 1em;
  width: 100%;
  font-size: 0.8em;
  color: #fff;
`;

export const Metric = styled.span`
  font-weight: 600;
  display: inline-block;
  vertical-align: middle;
  margin-right: 1.25em;

  a {
    color: #fff;
  }
`;

export const MetricIcon = styled.span`
  opacity: 0.75;
  padding-right: 0.5em;
  font-size: 1.2em;
`;

export const MetricValue = styled.span`
  font-variant-numeric: tabular-nums;

  span {
    opacity: 0.75;
  }
`;

export const MetricUnit = styled.span`
  opacity: 0.75;
  padding-left: 0.25em;
  vertical-align: middle;
`;
