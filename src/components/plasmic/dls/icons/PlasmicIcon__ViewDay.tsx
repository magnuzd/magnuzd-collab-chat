// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ViewDayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ViewDayIcon(props: ViewDayIconProps) {
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
        d={
          "M21.5 18h-19v2h19v-2zm-2-8v4h-15v-4h15zm1-2h-17c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4h-19v2h19V4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ViewDayIcon;
/* prettier-ignore-end */
