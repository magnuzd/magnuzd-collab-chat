// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterAltOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterAltOffIcon(props: FilterAltOffIconProps) {
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
          "M17.66 5.29l-3.57 4.55 1.43 1.43C16.55 9.96 20.5 4.9 20.5 4.9a.998.998 0 00-.79-1.61H7.54l2 2h8.12zM3.52 2.1L2.1 3.51l8.61 8.78v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L3.52 2.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilterAltOffIcon;
/* prettier-ignore-end */
