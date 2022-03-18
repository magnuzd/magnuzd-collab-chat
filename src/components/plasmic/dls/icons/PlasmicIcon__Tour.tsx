// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TourIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TourIcon(props: TourIconProps) {
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
          "M20 4H6V2H4v20h2v-8h14l-2-5 2-5zm-3.86 5.74l.9 2.26H6V6h11.05l-.9 2.26-.3.74.29.74zM13 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TourIcon;
/* prettier-ignore-end */
