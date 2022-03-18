// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FontDownloadOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FontDownloadOffIcon(props: FontDownloadOffIconProps) {
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
          "M5.485 1.345h15.17c1.1 0 2 .9 2 2v15.17l-2-2V3.345H7.485l-2-2zm6.09 4l-.57 1.52 1.36 1.36.23-.66h.1l.54 1.52 3.04 3.04-2.55-6.78h-2.15zm9.57 17.31l-1.32-1.31H4.655c-1.1 0-2-.9-2-2V4.175l-1.31-1.32 1.41-1.41 19.8 19.8-1.41 1.41zm-3.32-3.31l-5.07-5.07h-2.52l-1.09 3.07h-2.08l2.39-6.37-4.8-4.8v13.17h13.17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FontDownloadOffIcon;
/* prettier-ignore-end */
