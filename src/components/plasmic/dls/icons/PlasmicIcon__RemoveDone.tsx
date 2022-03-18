// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RemoveDoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RemoveDoneIcon(props: RemoveDoneIconProps) {
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
          "M4.675 2.1l-1.41 1.41 10.38 10.38-1.41 1.41-4.24-4.24-1.41 1.41 5.66 5.66 2.83-2.83 6.6 6.6 1.41-1.41L4.675 2.1zm13.21 10.38l4.95-4.96-1.43-1.4-4.94 4.94 1.42 1.42zm-.71-4.96l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM.915 12.47l5.66 5.66 1.41-1.41-5.66-5.66-1.41 1.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RemoveDoneIcon;
/* prettier-ignore-end */
