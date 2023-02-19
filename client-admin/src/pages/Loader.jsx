import React from 'react';
import '../styles/loader.css';
const Loader = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-50 z-[100000]'>
      <div class='loadingio-spinner-double-ring-676agfqasmf'>
        <div class='ldio-q4fgl0j4hs8'>
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
