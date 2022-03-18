// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScheduleSendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScheduleSendIcon(props: ScheduleSendIconProps) {
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
          "M16.5 11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16 16.2V13h1v2.79l1.85 1.85-.7.71z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10.5 11l-6-1.5V6.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L2.5 3v16l7-2.95V16c0-.8.14-1.56.39-2.28L4.5 15.99V12.5l6-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ScheduleSendIcon;
/* prettier-ignore-end */
