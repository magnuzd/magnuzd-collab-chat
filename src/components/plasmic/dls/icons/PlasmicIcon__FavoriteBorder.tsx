// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FavoriteBorderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FavoriteBorderIcon(props: FavoriteBorderIconProps) {
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
          "M16.5 2.825c-1.74 0-3.41.81-4.5 2.09-1.09-1.28-2.76-2.09-4.5-2.09-3.08 0-5.5 2.42-5.5 5.5 0 3.78 3.4 6.86 8.55 11.54l1.45 1.31 1.45-1.32c5.15-4.67 8.55-7.75 8.55-11.53 0-3.08-2.42-5.5-5.5-5.5zm-4.4 15.55l-.1.1-.1-.1C7.14 14.065 4 11.215 4 8.325c0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FavoriteBorderIcon;
/* prettier-ignore-end */
