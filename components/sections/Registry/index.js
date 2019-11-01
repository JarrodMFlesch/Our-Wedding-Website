import React from 'react';
import PropTypes from 'prop-types';

const Registry = () => {
  return (
    <>
      <h3>Our Registries</h3>
      <p>Currently we are only registered with Bed Bath &amp; Beyond, but that may change in the future!</p>
      <ul>
        <li>
          <a
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548171263"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bed Bath &amp; Beyond
          </a>
        </li>
        {/* <li>Amazon</li> */}
      </ul>
    </>
  );
};

export default Registry;
