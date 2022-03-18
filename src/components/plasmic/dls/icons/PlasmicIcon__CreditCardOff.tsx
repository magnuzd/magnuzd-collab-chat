// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditCardOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditCardOffIcon(props: CreditCardOffIconProps) {
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
          "M7.485 3.295h13.17c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94l-1.77-1.77v-5.17h-5.17l-4-4h9.17v-2H9.485l-2-2zm13.66 19.31l-3.32-3.31H4.655c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93l-1.55-1.56 1.41-1.41 19.8 19.8-1.41 1.41zM4.655 6.125v1.17h1.17l-1.17-1.17zm11.17 11.17l-6-6h-5.17v6h11.17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CreditCardOffIcon;
/* prettier-ignore-end */
