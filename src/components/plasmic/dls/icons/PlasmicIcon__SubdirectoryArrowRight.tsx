// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubdirectoryArrowRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubdirectoryArrowRightIcon(
  props: SubdirectoryArrowRightIconProps
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
          "M19.5 14.5l-6 6-1.42-1.42 3.59-3.58H4.5v-12h2v10h9.17l-3.59-3.58L13.5 8.5l6 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubdirectoryArrowRightIcon;
/* prettier-ignore-end */
