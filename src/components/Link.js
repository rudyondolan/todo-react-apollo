import React from 'react';

function Link(props) {
  const { active, children, onClick } = props;

  if (active) {
    return <span>{children}</span>
  }

  return (
  // eslint-disable-next-line
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}

export default Link;

