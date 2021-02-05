import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

// with Grid
const Routes = () => {
  return (
    <Grid
      style={{ minHeight: '100%', flexGrow: 1 }}
      container
      direction="column"
    >
      <Switch>
        {/* <Route exact component={} /> */}

        {/* Fallback to '/' route */}
        <Redirect to="/" />
      </Switch>
    </Grid>
  );
};

// without Grid
// const Routes = () => {
//   return (
//     <Switch>
//       {/* <Route exact component={} /> */}
//       {/* <Route exact component={} /> */}
//       {/* <Route exact component={} /> */}
//     </Switch>
//   );
// };

export default Routes;
