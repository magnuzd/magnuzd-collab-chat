// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CommitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CommitIcon(props: CommitIconProps) {
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
          "M16.9 11a5 5 0 00-9.8 0H2v2h5.1a5 5 0 009.8 0H22v-2h-5.1zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CommitIcon;
/* prettier-ignore-end */
