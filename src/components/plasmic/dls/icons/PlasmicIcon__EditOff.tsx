// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditOffIcon(props: EditOffIconProps) {
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
          "M14.77 8.31l.92.92-1.11 1.11 1.41 1.41 2.52-2.52-3.75-3.75L12.24 8l1.41 1.41 1.12-1.1zm6.65-1.98a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.26 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3.52 2.1L2.1 3.51l7.32 7.32-5.71 5.71v3.75h3.75l5.71-5.71 7.32 7.32 1.41-1.41L3.52 2.1zm3.11 16.19h-.92v-.92l5.13-5.13.92.92-5.13 5.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EditOffIcon;
/* prettier-ignore-end */
