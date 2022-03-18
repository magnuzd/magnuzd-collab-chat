// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YoutubeSearchedForIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YoutubeSearchedForIcon(props: YoutubeSearchedForIconProps) {
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
          "M17.01 14.26h-.8l-.27-.27a6.451 6.451 0 001.57-4.23 6.5 6.5 0 00-6.5-6.5c-3.59 0-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 019 0 4.507 4.507 0 01-6.32 4.12l-1.48 1.48a6.474 6.474 0 007.52-.67l.27.27v.79l5.01 4.99L22 19.26l-4.99-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default YoutubeSearchedForIcon;
/* prettier-ignore-end */
