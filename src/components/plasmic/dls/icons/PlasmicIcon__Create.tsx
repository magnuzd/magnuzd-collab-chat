// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreateIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreateIcon(props: CreateIconProps) {
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
          "M2.999 17.25V21h3.75l11.06-11.06-3.75-3.75-11.06 11.06zM5.919 19h-.92v-.92l9.06-9.06.92.92L5.919 19zm14.79-13.37l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.26 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CreateIcon;
/* prettier-ignore-end */
