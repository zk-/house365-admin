import React from 'react';
import { connect } from 'dva';
import styles from './Demo.css';

function Demo() {
  return (
    <div className={styles.normal}>
      Route Component: Demo
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Demo);
