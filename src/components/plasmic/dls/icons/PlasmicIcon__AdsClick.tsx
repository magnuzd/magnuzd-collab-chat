// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdsClickIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdsClickIcon(props: AdsClickIconProps) {
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
          "M11.455 17.74a5.993 5.993 0 01-5.71-5.99c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 10-4.81 4.81l.63 2.1zm10.29-5.99c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10zm-3.77 4.26l3.77-1.26-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AdsClickIcon;
/* prettier-ignore-end */
