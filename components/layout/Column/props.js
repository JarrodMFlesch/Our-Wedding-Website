import PropTypes from 'prop-types';

export const defaultProps = {
  className: '',
  span: 12,
  largeBreak: null,
  midBreak: null,
  smallBreak: null,
  justify: '',
  align: '',
  direction: '',
  disableMargin: false,
  disableGutter: false,
  enableWrap: false,
};

export const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([
      'auto',
      'grow',
    ]),
  ]),
  push: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  largeBreak: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  largePush: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  midBreak: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  midPush: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  smallBreak: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  smallPush: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  justify: PropTypes.oneOf([
    '',
    'start',
    'center',
    'end',
    'space-between',
  ]),
  align: PropTypes.oneOf([
    '',
    'start',
    'center',
    'end',
  ]),
  flexDirection: PropTypes.oneOf([
    'column',
    'row',
  ]),
  enableWrap: PropTypes.bool,
  disableMargin: PropTypes.bool,
  disableGutter: PropTypes.bool,
};
