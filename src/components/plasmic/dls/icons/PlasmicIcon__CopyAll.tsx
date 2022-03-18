// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyAllIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyAllIcon(props: CopyAllIconProps) {
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
          "M18.5 2h-9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14h-9V4h9v12zm-15-1v-2h2v2h-2zm0-5.5h2v2h-2v-2zm7 10.5h2v2h-2v-2zm-7-1.5v-2h2v2h-2zm2 3.5c-1.1 0-2-.9-2-2h2v2zM9 22H7v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5.5 6v2h-2c0-1.1.9-2 2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CopyAllIcon;
/* prettier-ignore-end */
