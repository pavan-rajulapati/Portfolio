import React, { useState } from 'react';
import Styles from '../styles/ReadMore.module.css'

const ReadMore = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const displayedText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <p className={Styles.text}>
      {displayedText}
      {!isExpanded && text.length > maxLength && '... '}
      {text.length > maxLength && (
        <span
          onClick={toggleReadMore}
          style={{ color: '#007bff', cursor: 'pointer' }}
        >
          {isExpanded ? ' Show less' : ' Read more'}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
