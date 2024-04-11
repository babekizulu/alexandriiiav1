//libs
import React, { useState } from 'react';

const GeoSearchSVG = () => {
  //state management
  const [hover, setHover] = useState(false);
  //handlers
  const hoverHandler = () => {
    setHover(true);
  };
  const unhoverHandler = () => {
    setHover(false);
  };
  return (
    <div
      className='svg-container'
      onMouseEnter={hoverHandler}
      onMouseLeave={unhoverHandler}
    >
      <svg
        width='178'
        height='178'
        viewBox='0 0 178 178'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='89'
          cy='63'
          r='47.5'
          stroke={hover ? '#ff5959' : '#131313'}
          strokeWidth='13'
        />
        <path
          d='M91 168L123.043 104.25H58.9571L91 168Z'
          fill={hover ? '#ff5959' : '#131313'}
        />
        <circle
          cx='90'
          cy='63'
          r='40.6538'
          stroke='#131313'
          strokeWidth='2.69231'
        />
        <path
          d='M53.6757 50.8919C55.3711 52.658 56.7447 53.7104 56.7447 55.979C56.7447 56.3354 57.8192 56.1892 58.048 56.1892C59.6922 56.1892 59.0635 58.4425 59.3514 58.4595C60.5076 58.5275 60.6965 59.5946 61.4324 59.5946C62.5572 59.5946 62.9514 60.2277 63.8919 60.6457C65.2221 61.2369 68.4423 61.6448 66.6246 63.4625C66.1549 63.9322 66.6997 65.5644 66.5195 66.1952C66.2272 67.2183 65.2816 67.5815 64.4384 68.003C63.8405 68.302 63.6898 69.4777 63.5345 70.021C63.4168 70.4332 63.1807 70.625 63.0511 71.03C62.7655 71.9223 63.4702 72.0581 63.5135 72.8379C63.5568 73.6175 63.9357 74.5445 64.2703 75.2973C64.6431 76.1363 66.1382 76.0788 66.8348 76.7057C68.0469 77.7965 68.6747 78.7217 69.6517 79.943C70.4915 80.9927 72.3732 80.167 73.5405 80.4264C75.0949 80.7719 75.9124 80.957 77.3243 79.8589C79.5306 78.1429 80.2558 81.6783 80.5195 82.8649C80.7967 84.1123 80.493 85.6386 80.5405 86.9219C80.5964 88.429 81.5754 88.5986 82.0541 89.6757C83.4062 92.718 87.5023 98.0222 84.8709 101.405C83.9621 102.574 85.2119 100.786 85.3754 100.459C85.884 99.4422 86.263 98.432 86.7628 97.4325C87.2792 96.3995 87.6006 95.3735 88.1922 94.4054C88.5928 93.75 89.5796 93.2012 89.5796 92.3454C89.5796 91.8518 89.2432 91.3702 89.2432 90.8108C89.2432 90.3643 88.8649 90.2538 88.8649 89.8649C88.8649 88.9824 89.6929 88.2269 89.9159 87.3844C90.118 86.6209 90.1987 85.0766 89.8108 84.3784C88.8749 82.6938 89.0731 80.1055 89.9159 78.5135C90.8465 76.7558 90 74.8093 90 72.8379C90 71.3921 89.8831 71.4172 89.0751 70.3784C88.3908 69.4986 88.1081 69.4898 88.1081 68.3814C88.1081 67.1553 87.1692 67.7732 86.4054 67.1622C85.4768 66.4193 85.8944 66.027 84.3243 66.027C83.2354 66.027 79.7333 65.9866 78.9429 65.3544C78.204 64.7632 77.0062 65.92 76.7357 64.7027C76.5346 63.7974 74.865 63.4205 74.1081 63.0841C73.3808 62.7609 72.6048 62.3207 71.8168 62.2222C69.9709 61.9915 71.3493 59.7227 70.3243 59.5946C69.4121 59.4806 70.7557 57.9581 70.7027 57.8919C70.2489 57.3246 69.6853 56.2081 70.03 55.4325C70.7037 53.9166 72.5946 52.698 72.5946 51.2493C72.5946 47.3289 75.162 49.2554 77.3243 48.0541C78.8203 47.223 79.2192 44.8379 81.1081 44.8379C82.7056 44.8379 84.3243 45.3441 84.3243 43.1352C84.3243 42.3138 83.2801 41.9593 82.7267 41.5165C82.3943 41.2506 81.8675 41.5186 81.4865 41.2222C80.5379 40.4845 81.0393 40.9853 80.3303 41.3904C79.4488 41.8941 77.8821 39.6691 77.3453 39.1622C76.4448 38.3117 73.9367 38.7838 72.8048 38.7838C71.6137 38.7838 71.5406 38.0339 70.997 37.3544C70.4372 36.6546 69.4396 36.8919 68.6216 36.8919C66.4874 36.8919 64.0161 38.8528 62.1892 37.8379C60.7025 37.0119 60.8963 38.7374 60.1081 38.7838C58.4369 38.8821 58.6849 38.9998 57.4595 39.9189'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M87.7297 37.6486C86.9918 37.5564 86.3506 37.8544 87.3093 39.015C88.6588 40.6486 91.8129 40.6671 89.8108 43.1141C87.7162 45.6741 92.12 47.6512 93.4054 45.5946C93.8313 44.9131 94.1752 44.8791 94.9189 44.8378C95.4347 44.8092 95.17 44.3343 95.4865 44.0811C96.674 43.131 95.9287 41.1082 94.8769 40.4654C93.1445 39.4068 91.5664 36.7496 89.6216 36.2192C88.8618 36.012 87.7297 37.3562 87.7297 37.2702'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M81.2973 27.054C80.9008 27.1036 80.4973 27.5873 80.1622 27.8108'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M81.2973 27.054C80.6282 27.491 73.5143 30.5695 75.7898 31.8048C76.9367 32.4274 80.8797 32.9788 81.7598 31.973C82.4382 31.1976 83.3782 31.9309 84.1351 31.9309C84.7138 31.9309 85.193 31.2485 85.8378 31.2162C87.3023 31.143 88.506 30.4052 89.9159 30.4595C90.6078 30.4861 90.615 31.5105 91.3453 31.5105C92.0017 31.5105 92.9399 29.8764 93.3213 30.7537C93.9211 32.1333 94.4087 32.8811 95.3814 31.048C95.6969 30.4534 97.5605 26.9213 96.6426 26.3814C95.1584 25.5083 96.8703 24.5967 95.2973 25.5405'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M94.9189 25.5405C94.8117 25.1115 94.516 25.2506 94.1622 25.1622'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M86.973 98.5676C87.1247 97.2016 89.6563 94.2787 90.9249 94.048C92.7408 93.7179 94.5212 93.3497 96.3483 92.976C100.405 92.1462 104.104 94.4693 107.405 91.1682C107.925 90.6484 108.246 90.2613 109.003 90.2432C110.141 90.2161 110.836 89.4312 111.757 89.3603C113.479 89.2278 113.711 88.1975 115.267 87.6787C115.958 87.4483 117.567 87.7386 118.189 88.015C118.826 88.2979 120.191 90.5424 119.892 90.2432'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M85.4595 96.2973C83.5464 96.2973 81.9179 95.1622 79.994 95.1622C79.074 95.1622 78.6934 96.0824 77.976 96.5075C77.5881 96.7374 75.5273 95.2964 74.8859 95.1832C72.2832 94.7239 68.0541 93.7416 68.0541 97.4324'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M97.1892 39.5406C97.2488 38.1111 98.786 35.9178 98.2402 34.6216C97.8226 33.6297 98.817 33.7593 99.6487 33.2973C100.177 33.0039 100.375 33.3365 100.784 33.6547C101.463 34.1827 101.841 32.8151 102.192 32.4354C103.351 31.1843 106.404 31.9086 108.078 31.973C109.039 32.0099 113.512 31.2515 112.324 30.4595'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M96.8108 41.054C95.5277 40.9115 96.4219 40.2372 96.979 39.9189C97.8673 39.4113 98.0338 40.2222 98.5135 41.0751C99.8233 43.4035 101.238 42.1008 103.432 42.5886C104.037 42.723 104.845 44.6141 104.568 44.0601C104.234 43.3925 105.99 43.6495 106.102 43.6817C106.646 43.8372 107.936 44.2758 108.33 44.6697C108.926 45.2649 110.014 44.8825 110.432 45.4054C110.914 46.0076 112.27 48.3287 113.081 48.2432C113.527 48.1963 114.281 46.7893 114.595 47.1501C115.282 47.9401 115.207 48.9269 116.486 49C117.657 49.0669 118.136 48.3932 119.135 47.9489C119.995 47.5669 121.304 48.731 121.7 49.3784C122.206 50.2068 122.936 49.8905 123.676 50.2192C125.033 50.8226 126.329 51.2703 127.838 51.2703'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M104.378 53.5406C103.138 53.3855 102.15 52.2676 100.637 52.1111C99.2511 51.9678 99.6453 52.9693 98.5345 53.5406C96.5661 54.5529 95.7447 55.9436 95.6757 58.2913C95.6552 58.9881 95.4921 59.5609 96.3483 59.3003C96.9798 59.1081 95.7004 59.3874 95.4444 59.7418C93.6598 62.2128 94.5017 62.9283 96.6216 63.3994C98.038 63.7142 98.5643 63.7568 100.006 63.7568C101.328 63.7568 99.9023 65.7681 101.162 66.0481C102.381 66.3189 102.486 69.1946 102.486 70.1892C102.486 71.8181 101.153 73.2328 100.216 74.8138C99.8927 75.3598 99.4808 76.3859 99.7538 77C100.07 77.7106 100.514 77.424 100.889 77.8409C101.488 78.5068 100.686 82.0045 100.384 82.8228C100.077 83.6576 99.9471 83.4324 100.973 83.4324C101.35 83.4324 102.264 83.6118 102.486 83.2222C103.299 81.8003 104.899 82.8565 105.892 81.9189C106.84 81.0232 107.689 81.3071 108.541 80.4054C109.059 79.8569 109.98 77.7247 110.222 77.967C111.822 79.5664 112.703 74.9381 112.703 73.7838C112.703 73.0595 113.417 72.5348 113.417 71.9129C113.417 71.4268 112.896 71.4313 113.27 70.7568C113.746 69.8996 115.294 70.0677 116.024 70.6517C116.685 71.1802 117.82 70.976 118.462 71.6186C119.72 72.876 119.216 71.3173 118.841 70.5676C118.08 69.0462 117.929 64.6169 118.757 63.1682C119.426 61.9974 117.764 61.3711 116.676 61.1291C115.257 60.8138 114.446 60.4896 114.616 58.7117C114.739 57.4159 113.591 58.6244 112.871 57.4925C112.128 56.3247 110.907 56.7847 110.811 55.0541C110.773 54.3775 110.081 54.9125 109.76 54.5916C109.444 54.276 109.872 53.5963 109.592 53.2463C108.84 52.3068 108.568 52.4054 107.216 52.4054C106.389 52.4054 105.415 52.2475 104.61 52.4264C103.953 52.5724 103.542 53.4985 102.697 53.4985C102.283 53.4985 101.553 52.8116 101.162 52.5946C100.223 52.0731 98.7175 53.5109 99.4595 52.027'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M120.649 56.9459C120.879 55.1048 120.27 58.3073 120.27 59.048C120.27 59.345 120.403 60.0261 120.186 60.2672C120.115 60.3465 119.315 60.3631 119.598 60.6456C120.997 62.0454 122.737 60.8045 121.952 63.4204C121.704 64.2458 121.611 65.0246 121.384 65.8168C121.086 66.8616 120.54 65.5127 121.405 66.5946C122.348 67.7726 124.065 66.7837 125.189 66.7837C125.752 66.7837 127.459 63.9715 127.459 63.1892C127.459 61.5038 128.02 60.8317 127.165 59.2162C126.54 58.0358 127.842 57.3295 127.081 56.3783C125.734 54.6949 122.615 57.7013 121.027 55.054'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
        <path
          d='M79.027 28.1892C79.3164 27.932 81.059 27.5129 80.4565 26.7597C80.0509 26.2528 80.0777 24.7415 80.9189 25.1622'
          stroke='#131313'
          strokeWidth='2.27027'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

export default GeoSearchSVG;