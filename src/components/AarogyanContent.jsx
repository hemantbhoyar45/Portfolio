import React from 'react';
import aarogyamContent from '../blogContents/aarogyamContent'; // your content file

function AarogyamComponent() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: aarogyamContent }}
    />
  );
}

export default AarogyamComponent;
