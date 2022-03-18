// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoltIcon(props: BoltIconProps) {
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
          "M10.995 21h-1l1-7h-3.5c-.88 0-.33-.75-.31-.78 1.29-2.28 3.23-5.68 5.82-10.22h1l-1 7h3.51c.4 0 .62.19.4.66-3.95 6.89-5.92 10.34-5.92 10.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoltIcon;
/* prettier-ignore-end */
