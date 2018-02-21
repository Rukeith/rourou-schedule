import React from 'react';
import Typography from 'material-ui/Typography';

const style = {
  width: '100%',
  margin: 25,
};

export default function Types() {
  return (
    <div style={style}>
      <Typography variant="display1" gutterBottom>
        肉肉 Rou Rou
      </Typography>
      <Typography variant="headline" gutterBottom>
        吃肉肉 長肉肉  ~~~~
      </Typography>
      <Typography variant="subheading" gutterBottom>
        郎客謀灣億，只好再升級 v1.1.1
      </Typography>
    </div>
  );
}
