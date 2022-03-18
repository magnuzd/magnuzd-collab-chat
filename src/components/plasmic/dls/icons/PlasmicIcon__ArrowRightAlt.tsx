// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightAltIcon(props: ArrowRightAltIconProps) {
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
        d={"M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightAltIcon;
/* prettier-ignore-end */
