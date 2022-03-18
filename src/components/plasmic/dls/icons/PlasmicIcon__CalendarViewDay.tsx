// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarViewDayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarViewDayIcon(props: CalendarViewDayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M3 16.5h18v2H3v-2zm16-5v1H5v-1h14zm2-2H3v5h18v-5zm-18-4h18v2H3v-2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalendarViewDayIcon;
/* prettier-ignore-end */
