// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwitchRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwitchRightIcon(props: SwitchRightIconProps) {
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
          "M15.5 15.38V8.62L18.88 12l-3.38 3.38zM14 19l7-7-7-7v14zm-4 0V5l-7 7 7 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwitchRightIcon;
/* prettier-ignore-end */
