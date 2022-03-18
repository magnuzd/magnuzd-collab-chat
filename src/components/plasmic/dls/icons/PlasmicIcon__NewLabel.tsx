// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NewLabelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NewLabelIcon(props: NewLabelIconProps) {
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
          "M21.5 11.5l-4.37 6.16c-.37.52-.98.84-1.63.84h-3v-2h3l3.55-5-3.55-5h-10v3h-2v-3c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84l4.37 6.16zm-11 3h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NewLabelIcon;
/* prettier-ignore-end */
