// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterListOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterListOffIcon(props: FilterListOffIconProps) {
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
          "M11.545 7.295h10.17v-2H9.545l2 2zm5 5h2.17v-2h-4.17l2 2zm-1.83 3.83v1.17h-4v-2h3.17l-3-3h-4.17v-2h2.17l-3-3h-2.17v-2h.17l-1.78-1.78 1.41-1.41 18.38 18.38-1.41 1.41-5.77-5.77z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilterListOffIcon;
/* prettier-ignore-end */
