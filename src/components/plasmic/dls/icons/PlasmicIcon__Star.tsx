// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarIcon(props: StarIconProps) {
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
          "M12 17.77l6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
