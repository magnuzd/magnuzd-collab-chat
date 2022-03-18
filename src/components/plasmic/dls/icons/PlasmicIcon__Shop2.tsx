// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shop2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shop2Icon(props: Shop2IconProps) {
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
        d={"M3 9.5H1v11c0 1.11.89 2 2 2h16v-2H3v-11z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18 5.5v-2c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-11h-5zm-6-2h4v2h-4v-2zm9 13H7v-9h14v9z"
        }
        fill={"currentColor"}
      ></path>

      <path d={"M12 8.5v7l5.5-3.5L12 8.5z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Shop2Icon;
/* prettier-ignore-end */
