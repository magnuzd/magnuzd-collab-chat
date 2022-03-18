// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccessibleForwardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccessibleForwardIcon(props: AccessibleForwardIconProps) {
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
          "M17.5 6.27a2 2 0 100-4 2 2 0 000 4zm-3 10.46h-2c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5zm3-3.5h-1.86l1.67-3.67c.61-1.33-.37-2.83-1.85-2.83h-5.2c-.81 0-1.54.47-1.87 1.2l-.67 1.8 1.92.53.65-1.53h2.21l-1.83 4.1c-.6 1.33.39 2.9 1.85 2.9h4.98v5h2v-5.5c0-1.1-.9-2-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccessibleForwardIcon;
/* prettier-ignore-end */
