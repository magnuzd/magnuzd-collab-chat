// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FirstPageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FirstPageIcon(props: FirstPageIconProps) {
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
          "M18.205 16.59L13.615 12l4.59-4.59L16.795 6l-6 6 6 6 1.41-1.41zM5.795 6h2v12h-2V6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FirstPageIcon;
/* prettier-ignore-end */
