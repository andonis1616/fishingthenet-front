import React from 'react';
import { connect } from 'react-redux';
import { changePageThunk } from '../../state/thunks/page.thunk';
import FB from '../../utils/Icons/FB';
import Insta from '../../utils/Icons/Insta';

import './Bottom.css';

const Bottom = ({ ...props }) => {
  return (
    <div className="bottom">
      <p aria-label="Our Blog" className="text">
        Our blog:
        <a
          aria-label="like to website fishingnet.com"
          href="javascript:void(0)"
        >
          http://www.fishingnet.com
        </a>
      </p>
      <div className="bottom-social">
        <FB fill="var(--clr-black)"></FB>
        <Insta fill="var(--clr-black)"></Insta>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);
