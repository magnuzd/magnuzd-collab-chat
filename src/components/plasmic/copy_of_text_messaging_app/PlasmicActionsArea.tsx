// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 72tUXrciMYQcBHG6D1vyXy
// Component: pvVLcuStze0cNv
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
import Button from "../../Button"; // plasmic-import: 5DE4ToOecQeHY/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_dls_css from "../dls/plasmic_dls.module.css"; // plasmic-import: wKYGFqyVBmDVb7fPCj2tLF/projectcss
import projectcss from "./plasmic_copy_of_text_messaging_app.module.css"; // plasmic-import: 72tUXrciMYQcBHG6D1vyXy/projectcss
import sty from "./PlasmicActionsArea.module.css"; // plasmic-import: pvVLcuStze0cNv/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: stDZdaEWpQOmVV/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _YyChvp-V52F2m/icon

export type PlasmicActionsArea__VariantMembers = {};

export type PlasmicActionsArea__VariantsArgs = {};
type VariantPropType = keyof PlasmicActionsArea__VariantsArgs;
export const PlasmicActionsArea__VariantProps = new Array<VariantPropType>();

export type PlasmicActionsArea__ArgsType = {};
type ArgPropType = keyof PlasmicActionsArea__ArgsType;
export const PlasmicActionsArea__ArgProps = new Array<ArgPropType>();

export type PlasmicActionsArea__OverridesType = {
  actions?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  sendButton?: p.Flex<typeof Button>;
};

export interface DefaultActionsAreaProps {
  className?: string;
}

function PlasmicActionsArea__RenderFunc(props: {
  variants: PlasmicActionsArea__VariantsArgs;
  args: PlasmicActionsArea__ArgsType;
  overrides: PlasmicActionsArea__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"actions"}
      data-plasmic-override={overrides.actions}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        plasmic_dls_css.plasmic_tokens,
        sty.actions
      )}
    >
      <Button className={classNames("__wab_instance", sty.button__uHyQb)}>
        {"Tags"}
      </Button>

      <Button className={classNames("__wab_instance", sty.button__fEUf)}>
        {"Trasnlations"}
      </Button>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          data-plasmic-name={"sendButton"}
          data-plasmic-override={overrides.sendButton}
          className={classNames("__wab_instance", sty.sendButton)}
          link={"/new-page-2" as const}
        >
          {"SEND"}
        </Button>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  actions: ["actions", "freeBox", "sendButton"],
  freeBox: ["freeBox", "sendButton"],
  sendButton: ["sendButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  actions: "div";
  freeBox: "div";
  sendButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActionsArea__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActionsArea__VariantsArgs;
    args?: PlasmicActionsArea__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActionsArea__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActionsArea__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicActionsArea__ArgProps,
      internalVariantPropNames: PlasmicActionsArea__VariantProps
    });

    return PlasmicActionsArea__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "actions") {
    func.displayName = "PlasmicActionsArea";
  } else {
    func.displayName = `PlasmicActionsArea.${nodeName}`;
  }
  return func;
}

export const PlasmicActionsArea = Object.assign(
  // Top-level PlasmicActionsArea renders the root element
  makeNodeComponent("actions"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    sendButton: makeNodeComponent("sendButton"),

    // Metadata about props expected for PlasmicActionsArea
    internalVariantProps: PlasmicActionsArea__VariantProps,
    internalArgProps: PlasmicActionsArea__ArgProps
  }
);

export default PlasmicActionsArea;
/* prettier-ignore-end */
