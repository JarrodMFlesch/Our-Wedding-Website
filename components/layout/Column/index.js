import React from 'react';

import { defaultProps, propTypes } from './props';

import './index.scss';

const Column = React.forwardRef((props, ref) => {
  const {
    style,
    className,
    children,
    span,
    push,
    frameBreak,
    largeBreak,
    largePush,
    midBreak,
    midPush,
    smallBreak,
    smallPush,
    justify,
    align,
    flexDirection,
    enableWrap,
    disableMargin,
    disableGutter,
  } = props;

  const baseName = 'column';

  const classes = [
    `${baseName}--span-${span}`,
    push && `${baseName}--push-${push}`,
    frameBreak && `${baseName}--frame-break-span-${frameBreak}`,
    largeBreak && `${baseName}--large-break-span-${largeBreak}`,
    largePush && `${baseName}--large-break-push-${largePush}`,
    midBreak && `${baseName}--mid-break-span-${midBreak}`,
    midPush && `${baseName}--mid-break-push-${midPush}`,
    smallBreak && `${baseName}--small-break-span-${smallBreak}`,
    smallPush && `${baseName}--small-break-push-${smallPush}`,
    justify && `${baseName}--justify-${justify}`,
    align && `${baseName}--align-${align}`,
    flexDirection && `${baseName}--direction-${flexDirection}`,
    disableMargin && `${baseName}--margin-disabled`,
    disableGutter && `${baseName}--gutter-disabled`,
    enableWrap && `${baseName}--wrap-enabled`,
    className,
    baseName,
  ].filter(Boolean).join(' ');

  // conditionally render based on the presence of children to avoid
  // logic duplication on every instance of this component
  if (children) {
    return (
      <div className={classes} style={style} ref={ref}>
        {children}
      </div>
    );
  }
  return null;
});

Column.defaultProps = defaultProps;
Column.propTypes = propTypes;

export default Column;
