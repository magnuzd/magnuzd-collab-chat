// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 72tUXrciMYQcBHG6D1vyXy
// Component: YxxugrvOXyDJd
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
import TextInput from "../../TextInput"; // plasmic-import: QtgH6B6JlnAfz/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_dls_css from "../dls/plasmic_dls.module.css"; // plasmic-import: wKYGFqyVBmDVb7fPCj2tLF/projectcss
import projectcss from "./plasmic_copy_of_text_messaging_app.module.css"; // plasmic-import: 72tUXrciMYQcBHG6D1vyXy/projectcss
import sty from "./PlasmicComposeMessage.module.css"; // plasmic-import: YxxugrvOXyDJd/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: T2ZHvLJ9kHHH8y/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: stDZdaEWpQOmVV/icon

export type PlasmicComposeMessage__VariantMembers = {};

export type PlasmicComposeMessage__VariantsArgs = {};
type VariantPropType = keyof PlasmicComposeMessage__VariantsArgs;
export const PlasmicComposeMessage__VariantProps = new Array<VariantPropType>();

export type PlasmicComposeMessage__ArgsType = {};
type ArgPropType = keyof PlasmicComposeMessage__ArgsType;
export const PlasmicComposeMessage__ArgProps = new Array<ArgPropType>();

export type PlasmicComposeMessage__OverridesType = {
  root?: p.Flex<"div">;
  newMessage?: p.Flex<typeof TextInput>;
};

export interface DefaultComposeMessageProps {
  className?: string;
}

function PlasmicComposeMessage__RenderFunc(props: {
  variants: PlasmicComposeMessage__VariantsArgs;
  args: PlasmicComposeMessage__ArgsType;
  overrides: PlasmicComposeMessage__OverridesType;

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
    >
      <TextInput
        data-plasmic-name={"newMessage"}
        data-plasmic-override={overrides.newMessage}
        className={classNames("__wab_instance", sty.newMessage)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "newMessage"],
  newMessage: ["newMessage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  newMessage: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComposeMessage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComposeMessage__VariantsArgs;
    args?: PlasmicComposeMessage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicComposeMessage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicComposeMessage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicComposeMessage__ArgProps,
      internalVariantPropNames: PlasmicComposeMessage__VariantProps
    });

    return PlasmicComposeMessage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComposeMessage";
  } else {
    func.displayName = `PlasmicComposeMessage.${nodeName}`;
  }
  return func;
}

export const PlasmicComposeMessage = Object.assign(
  // Top-level PlasmicComposeMessage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    newMessage: makeNodeComponent("newMessage"),

    // Metadata about props expected for PlasmicComposeMessage
    internalVariantProps: PlasmicComposeMessage__VariantProps,
    internalArgProps: PlasmicComposeMessage__ArgProps
  }
);

export default PlasmicComposeMessage;
/* prettier-ignore-end */
