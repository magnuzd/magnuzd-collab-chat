// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 72tUXrciMYQcBHG6D1vyXy
// Component: gFqM6rSSYqZHE
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_dls_css from "../dls/plasmic_dls.module.css"; // plasmic-import: wKYGFqyVBmDVb7fPCj2tLF/projectcss
import projectcss from "./plasmic_copy_of_text_messaging_app.module.css"; // plasmic-import: 72tUXrciMYQcBHG6D1vyXy/projectcss
import sty from "./PlasmicProgressIndicator.module.css"; // plasmic-import: gFqM6rSSYqZHE/css

export type PlasmicProgressIndicator__VariantMembers = {};

export type PlasmicProgressIndicator__VariantsArgs = {};
type VariantPropType = keyof PlasmicProgressIndicator__VariantsArgs;
export const PlasmicProgressIndicator__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProgressIndicator__ArgsType = {};
type ArgPropType = keyof PlasmicProgressIndicator__ArgsType;
export const PlasmicProgressIndicator__ArgProps = new Array<ArgPropType>();

export type PlasmicProgressIndicator__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultProgressIndicatorProps {
  className?: string;
}

function PlasmicProgressIndicator__RenderFunc(props: {
  variants: PlasmicProgressIndicator__VariantsArgs;
  args: PlasmicProgressIndicator__ArgsType;
  overrides: PlasmicProgressIndicator__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        plasmic_dls_css.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProgressIndicator__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProgressIndicator__VariantsArgs;
    args?: PlasmicProgressIndicator__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProgressIndicator__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProgressIndicator__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProgressIndicator__ArgProps,
      internalVariantPropNames: PlasmicProgressIndicator__VariantProps
    });

    return PlasmicProgressIndicator__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProgressIndicator";
  } else {
    func.displayName = `PlasmicProgressIndicator.${nodeName}`;
  }
  return func;
}

export const PlasmicProgressIndicator = Object.assign(
  // Top-level PlasmicProgressIndicator renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicProgressIndicator
    internalVariantProps: PlasmicProgressIndicator__VariantProps,
    internalArgProps: PlasmicProgressIndicator__ArgProps
  }
);

export default PlasmicProgressIndicator;
/* prettier-ignore-end */