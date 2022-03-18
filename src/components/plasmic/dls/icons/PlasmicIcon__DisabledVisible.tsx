// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DisabledVisibleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DisabledVisibleIcon(props: DisabledVisibleIconProps) {
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
          "M16 15c1.95 0 3.76.98 4.75 2.5-.99 1.52-2.8 2.5-4.75 2.5-1.95 0-3.76-.98-4.75-2.5.99-1.52 2.8-2.5 4.75-2.5zm0-2c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5zm0 6c-.83 0-1.5-.67-1.5-1.5S15.17 16 16 16s1.5.67 1.5 1.5S16.83 19 16 19zm4.99-6.66c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S1 6.48 1 12c0 5.17 3.93 9.43 8.96 9.95a9.343 9.343 0 01-2.32-2.68A8.01 8.01 0 013 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L6.1 5.69A7.902 7.902 0 0111 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DisabledVisibleIcon;
/* prettier-ignore-end */
