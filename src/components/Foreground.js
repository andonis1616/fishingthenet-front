import React from 'react';

function Foreground() {
  console.log(
    'aaaaaaaaaaaaa',
    document.querySelector('[data-app-section="MailReadCompose"]'),
  );
  return (
    <div style={styles.test}>
      <div>Chrome Ext - Foreground testttt ffffffffff</div>
    </div>
  );
}

const styles = {
  main: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000',
    fontSize: '80px',
    pointerEvents: 'none',
  },
  test: {
    height: '100%',
    background: 'red',
    width: '350px',
  },
};

export default Foreground;
