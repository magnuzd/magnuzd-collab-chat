// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShoppingBasketIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShoppingBasketIcon(props: ShoppingBasketIconProps) {
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
          "M22 9.49h-4.79l-4.38-6.56a.993.993 0 00-.83-.42c-.32 0-.64.14-.83.43L6.79 9.49H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27.03-.27c0-.55-.45-1-1-1zm-10-4.2l2.8 4.2H9.2l2.8-4.2zm6.5 14.2l-12.99.01-2.2-8.01H20.7l-2.2 8zm-6.5-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShoppingBasketIcon;
/* prettier-ignore-end */
