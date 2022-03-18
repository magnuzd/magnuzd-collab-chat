// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AndroidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AndroidIcon(props: AndroidIconProps) {
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
          "M17.6 9.791l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0l-1.88-3.24a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83l1.84 3.18a10.78 10.78 0 00-5.4 8.52h22a10.78 10.78 0 00-5.4-8.52zM7 15.561a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AndroidIcon;
/* prettier-ignore-end */
