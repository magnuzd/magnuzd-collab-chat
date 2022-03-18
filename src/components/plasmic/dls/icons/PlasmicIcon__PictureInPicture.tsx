// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PictureInPictureIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PictureInPictureIcon(props: PictureInPictureIconProps) {
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
          "M19 7.01h-8v6h8v-6zm-2 4h-4v-2h4v2zm4-8H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PictureInPictureIcon;
/* prettier-ignore-end */
