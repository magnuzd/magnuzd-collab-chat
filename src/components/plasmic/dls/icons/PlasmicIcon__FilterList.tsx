// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterListIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterListIcon(props: FilterListIconProps) {
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
        d={"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilterListIcon;
/* prettier-ignore-end */
