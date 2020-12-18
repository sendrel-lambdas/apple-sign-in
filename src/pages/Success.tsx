import React from 'react';

const Success = (props: any) => {
  return (
    <div>
      Login successfully! Welcome {props.userData.user.name.firstName} {props.userData.user.name.lastName}
    </div>
  );
};

export default Success;
