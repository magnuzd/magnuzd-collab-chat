// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeWorkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeWorkIcon(props: HomeWorkIconProps) {
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
          "M17 15h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2V7zm-3.26 0l1.26.84V7h-1.26z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M10 3v1.51l2 1.33V5h9v14h-4v2h6V3H10z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HomeWorkIcon;
/* prettier-ignore-end */
