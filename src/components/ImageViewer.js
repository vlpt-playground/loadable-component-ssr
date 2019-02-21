import React from 'react';
import './ImageViewer.css';

const ImageViewer = ({ src, alt, loading }) => {
  return (
    <div className="ImageViewer">
      {src && !loading ? <img src={src} alt={alt} /> : '이미지 로딩중...'}
    </div>
  );
};

export default ImageViewer;
