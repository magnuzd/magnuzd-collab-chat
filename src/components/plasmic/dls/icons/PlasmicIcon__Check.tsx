// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckIcon(props: CheckIconProps) {
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
          "M8.795 15.875l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckIcon;
/* prettier-ignore-end */
