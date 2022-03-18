// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppBlockingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppBlockingIcon(props: AppBlockingIconProps) {
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
          "M16.5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM14 12a2.5 2.5 0 012.5-2.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15zm2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 01-2.5 2.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.5 18h-10V6h10v1h2V3c0-1.1-.9-2-2-2h-10c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM5.5 3h10v1h-10V3zm10 18h-10v-1h10v1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppBlockingIcon;
/* prettier-ignore-end */
