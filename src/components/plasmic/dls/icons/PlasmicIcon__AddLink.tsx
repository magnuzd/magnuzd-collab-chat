// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddLinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddLinkIcon(props: AddLinkIconProps) {
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
          "M8 9.5h8v2H8v-2zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zm-16.2 0c0-1.71 1.39-3.1 3.1-3.1h4V5.5H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zm15.1 0h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddLinkIcon;
/* prettier-ignore-end */
