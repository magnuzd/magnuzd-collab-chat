// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccessibleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccessibleIcon(props: AccessibleIconProps) {
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
          "M12 6a2 2 0 100-4 2 2 0 000 4zm7 7v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 105.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccessibleIcon;
/* prettier-ignore-end */
