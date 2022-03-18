// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 72tUXrciMYQcBHG6D1vyXy
// Component: _4_i9nb16DyA6
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
import sty from "./PlasmicIconButton.module.css"; // plasmic-import: _4_i9nb16DyA6/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _YyChvp-V52F2m/icon

export type PlasmicIconButton__VariantMembers = {};

export type PlasmicIconButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicIconButton__VariantsArgs;
export const PlasmicIconButton__VariantProps = new Array<VariantPropType>();

export type PlasmicIconButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIconButton__ArgsType;
export const PlasmicIconButton__ArgProps = new Array<ArgPropType>("children");

export type PlasmicIconButton__OverridesType = {
  container?: p.Flex<"button">;
};

export interface DefaultIconButtonProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicIconButton__RenderFunc(props: {
  variants: PlasmicIconButton__VariantsArgs;
  args: PlasmicIconButton__ArgsType;
  overrides: PlasmicIconButton__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <button
      data-plasmic-name={"container"}
      data-plasmic-override={overrides.container}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={"back" as const}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        plasmic_dls_css.plasmic_tokens,
        sty.container
      )}
      disabled={false}
      role={"button" as const}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <IconIcon
            className={classNames(projectcss.all, sty.svg___0OjwK)}
            role={"img"}
          />
        ),

        value: args.children
      })}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: ["container"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIconButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIconButton__VariantsArgs;
    args?: PlasmicIconButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIconButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIconButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicIconButton__ArgProps,
      internalVariantPropNames: PlasmicIconButton__VariantProps
    });

    return PlasmicIconButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "container") {
    func.displayName = "PlasmicIconButton";
  } else {
    func.displayName = `PlasmicIconButton.${nodeName}`;
  }
  return func;
}

export const PlasmicIconButton = Object.assign(
  // Top-level PlasmicIconButton renders the root element
  makeNodeComponent("container"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicIconButton
    internalVariantProps: PlasmicIconButton__VariantProps,
    internalArgProps: PlasmicIconButton__ArgProps
  }
);

export default PlasmicIconButton;
/* prettier-ignore-end */
