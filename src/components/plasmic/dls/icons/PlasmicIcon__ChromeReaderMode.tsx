// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChromeReaderModeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChromeReaderModeIcon(props: ChromeReaderModeIconProps) {
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
          "M21 3.5H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-13c0-1.1-.9-2-2-2zm-18 15v-13h8v13H3zm18 0h-8v-13h8v13zM14 9h6v1.5h-6V9zm0 2.5h6V13h-6v-1.5zm0 2.5h6v1.5h-6V14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChromeReaderModeIcon;
/* prettier-ignore-end */
