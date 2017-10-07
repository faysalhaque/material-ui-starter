import React from 'react';

const rtl = document.getElementsByTagName('html')[0].getAttribute('dir');
const withDirection = Component => props => {
  // console.log(props, 'my props');
  return <Component {...props} rtl={rtl} />;
};

export default withDirection;
export { rtl };
