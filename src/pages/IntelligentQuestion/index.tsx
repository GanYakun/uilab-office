
import React from 'react';
import styles from "./index.less"
import '../utils/flexible';
import Chat from "./Chat/index"
window.serviceUrl = `dinstitute/control/odataAppSvc/dinstitute/`

const IntelligentQuestion: React.FC = () => {

  return (
    <div className={styles.pageIndexBox}>
      <div className={styles.chatBox}>
        <Chat />
      </div>
    </div>
  );
};

export default IntelligentQuestion;