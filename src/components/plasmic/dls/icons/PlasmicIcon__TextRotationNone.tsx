// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextRotationNoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextRotationNoneIcon(props: TextRotationNoneIconProps) {
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
          "M20 18l-3-3v2H4v2h13v2l3-3zM8.5 11.8h5l.9 2.2h2.1L11.75 3h-1.5L5.5 14h2.1l.9-2.2zM11 4.98L12.87 10H9.13L11 4.98z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TextRotationNoneIcon;
/* prettier-ignore-end */
