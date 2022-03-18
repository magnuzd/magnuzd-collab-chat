// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextRotateUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextRotateUpIcon(props: TextRotateUpIconProps) {
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
          "M18 4l-3 3h2v13h2V7h2l-3-3zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1l-2.2-.9zM4.98 13L10 11.13v3.74L4.98 13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TextRotateUpIcon;
/* prettier-ignore-end */
