// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OpenInNewOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OpenInNewOffIcon(props: OpenInNewOffIconProps) {
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
          "M17.505 5.09l-2.79-2.8h7v7l-2.79-2.8-4.09 4.09-1.41-1.41 4.08-4.08zm2.21 6.2v4.17l2 2v-6.17h-2zm.78 10.61l-1.61-1.61H5.715a2 2 0 01-2-2V5.12l-1.61-1.61 1.41-1.41 18.38 18.38-1.4 1.42zm-3.61-3.61l-4.88-4.88-1.59 1.59-1.41-1.41 1.59-1.59-4.88-4.88v11.17h11.17zm-8.34-14h4.17v-2h-6.17l2 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OpenInNewOffIcon;
/* prettier-ignore-end */
