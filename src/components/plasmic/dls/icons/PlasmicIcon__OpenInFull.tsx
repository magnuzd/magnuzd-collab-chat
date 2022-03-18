// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OpenInFullIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OpenInFullIcon(props: OpenInFullIconProps) {
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
        d={"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10L21 11z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OpenInFullIcon;
/* prettier-ignore-end */
