// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubdirectoryArrowLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubdirectoryArrowLeftIcon(
  props: SubdirectoryArrowLeftIconProps
) {
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
          "M10.5 8.5l1.42 1.42-3.59 3.58h9.17v-10h2v12H8.33l3.59 3.58-1.42 1.42-6-6 6-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubdirectoryArrowLeftIcon;
/* prettier-ignore-end */
