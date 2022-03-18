// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SavingsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SavingsIcon(props: SavingsIconProps) {
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
          "M15 10.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-7-1h5v-2H8v2zM22 8v6.97l-2.82.94-1.68 5.59H12v-2h-2v2H4.5S2 13.04 2 10c0-3.04 2.46-5.5 5.5-5.5h5c.91-1.21 2.36-2 4-2a1.498 1.498 0 011.38 2.08c-.14.34-.26.73-.32 1.15L19.83 8H22zm-2 2h-1l-3.5-3.5c0-.65.09-1.29.26-1.91-.97.25-1.76.97-2.09 1.91H7.5C5.57 6.5 4 8.07 4 10c0 1.88 1.22 6.65 2.01 9.5H8v-2h6v2h2.01l1.55-5.15 2.44-.82V10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SavingsIcon;
/* prettier-ignore-end */
