// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextRotationAngledownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextRotationAngledownIcon(
  props: TextRotationAngledownIconProps
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
          "M15.625 20.75v-4.24l-1.41 1.41-9.2-9.19-1.41 1.41 9.19 9.19-1.41 1.42h4.24zm-3.75-12.52l3.54 3.54-.92 2.19 1.48 1.48 4.42-11.14-1.06-1.05-11.14 4.42 1.49 1.48 2.19-.92zm6.59-3.05l-2.23 4.87-2.64-2.64 4.87-2.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TextRotationAngledownIcon;
/* prettier-ignore-end */
