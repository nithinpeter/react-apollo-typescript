import * as React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const DaysComponent = (props: any) => {
  return (
    <div>
      {!props.data.loading && props.data.allDays.map((day: any) => day.name)}
    </div>
  );
};

export const Days = graphql(gql`
  query GetDays {
    allDays {
      id
      name
    }
  }
`)(DaysComponent);
