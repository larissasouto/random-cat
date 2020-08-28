import React from 'react';
import Lottie from 'react-lottie';
import './Loading.css';
import * as loading from './loading.json';
import * as done from './done.json';

const defaultLoading = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultDone = {
    loop: true,
    autoplay: true, 
    animationData: done.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Loading = ({loading}) => {
    return (
        <div className="loading-container">
            {!loading ? (
                <Lottie options={defaultLoading} height={90} width={90} />
            ) : (
                <Lottie options={defaultDone} height={70} width={70} />
            )}
            
        </div>
    )
}

export default Loading;


