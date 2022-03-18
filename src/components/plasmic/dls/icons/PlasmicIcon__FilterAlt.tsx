// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterAltIcon(props: FilterAltIconProps) {
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
          "M7.005 6h10l-5.01 6.3L7.005 6zm-2.75-.39c2.02 2.59 5.75 7.39 5.75 7.39v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39a.998.998 0 00-.79-1.61H5.045c-.83 0-1.3.95-.79 1.61z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilterAltIcon;
/* prettier-ignore-end */
