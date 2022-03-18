// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpdateDisabledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpdateDisabledIcon(props: UpdateDisabledIconProps) {
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
          "M21.655 12.29a8.865 8.865 0 01-1.33 3.79l-1.47-1.47c.38-.71.65-1.49.77-2.32h2.03zM9.385 5.13a7.06 7.06 0 013.33-.84 7.01 7.01 0 015.74 3h-2.74v2h6v-6h-2v2.36c-1.65-2.04-4.17-3.36-7-3.36-1.76 0-3.4.51-4.78 1.39l1.45 1.45zm2.33 1.16v1.17l2 2V6.29h-2zm8.78 15.61l-3-3a8.973 8.973 0 01-4.78 1.39 9 9 0 01-9-9c0-1.76.51-3.4 1.39-4.78l-3-3 1.41-1.41 18.38 18.38-1.4 1.42zm-4.46-4.46l-9.48-9.48a7.06 7.06 0 00-.84 3.33c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UpdateDisabledIcon;
/* prettier-ignore-end */
