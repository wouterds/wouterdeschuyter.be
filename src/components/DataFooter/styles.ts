import styled from 'styled-components';

export const Container = styled.div`
  background: #1f1f1f;
  display: flex;
  height: 3.2em;
  align-items: center;
  min-width: 100%;
  font-size: 0.8em;
  color: #fff;
  padding: 0 0.75em;
  scroll-snap-type: x proximity;
  overflow-x: hidden;

  @media (max-width: 960px) {
    overflow-x: scroll;
  }
`;

export const Metric = styled.div`
  display: flex;
  white-space: nowrap;
  font-weight: 600;
  align-items: center;
  padding: 0 0.75em;
  scroll-snap-align: start;

  a {
    color: #fff;
  }
`;

export const MetricIcon = styled.span`
  opacity: 0.75;
  padding-right: 0.5em;
  font-size: 1.2em;
  margin-top: -0.15em;
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
