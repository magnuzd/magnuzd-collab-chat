// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProductionQuantityLimitsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProductionQuantityLimitsIcon(
  props: ProductionQuantityLimitsIconProps
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
          "M14 10.5h-2v-2h2v2zm0-4h-2v-5h2v5zm-6 12c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L22 5.46l-1.75-.96-3.7 7H9.53l-4.26-9H2v2h2l3.6 7.59-1.35 2.44c-.73 1.34.23 2.97 1.75 2.97h12v-2H8l1.1-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ProductionQuantityLimitsIcon;
/* prettier-ignore-end */
