//libs
import React from 'react';
//component
import Link from '../Link';

const BrowseBtn = ({ region }) => {
  return (
    <div>
      <Link href={`/browse-data/${region}`}>Browse Data</Link>
    </div>
  );
};

export default BrowseBtn;
