// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 72tUXrciMYQcBHG6D1vyXy
// Component: ird-r12wbOv-FI
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
import ChatHeader from "../../ChatHeader"; // plasmic-import: 51ipchq1cPeKS/component
import MessageHistoryArea from "../../MessageHistoryArea"; // plasmic-import: U31Z3Qz5o1OYd/component
import ComposeMessage from "../../ComposeMessage"; // plasmic-import: YxxugrvOXyDJd/component
import ActionsArea from "../../ActionsArea"; // plasmic-import: pvVLcuStze0cNv/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_dls_css from "../dls/plasmic_dls.module.css"; // plasmic-import: wKYGFqyVBmDVb7fPCj2tLF/projectcss
import projectcss from "./plasmic_copy_of_text_messaging_app.module.css"; // plasmic-import: 72tUXrciMYQcBHG6D1vyXy/projectcss
import sty from "./PlasmicChatWindow2.module.css"; // plasmic-import: ird-r12wbOv-FI/css

export type PlasmicChatWindow2__VariantMembers = {};

export type PlasmicChatWindow2__VariantsArgs = {};
type VariantPropType = keyof PlasmicChatWindow2__VariantsArgs;
export const PlasmicChatWindow2__VariantProps = new Array<VariantPropType>();

export type PlasmicChatWindow2__ArgsType = {};
type ArgPropType = keyof PlasmicChatWindow2__ArgsType;
export const PlasmicChatWindow2__ArgProps = new Array<ArgPropType>();

export type PlasmicChatWindow2__OverridesType = {
  chatWindow?: p.Flex<"section">;
  messageOverlayNavigation?: p.Flex<typeof ChatHeader>;
  messageHistoryArea?: p.Flex<typeof MessageHistoryArea>;
  composeMessage?: p.Flex<typeof ComposeMessage>;
  actionsArea?: p.Flex<typeof ActionsArea>;
};

export interface DefaultChatWindow2Props {
  className?: string;
}

function PlasmicChatWindow2__RenderFunc(props: {
  variants: PlasmicChatWindow2__VariantsArgs;
  args: PlasmicChatWindow2__ArgsType;
  overrides: PlasmicChatWindow2__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"section"}
          data-plasmic-name={"chatWindow"}
          data-plasmic-override={overrides.chatWindow}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            plasmic_dls_css.plasmic_tokens,
            sty.chatWindow
          )}
          role={"complementary" as const}
        >
          <ChatHeader
            data-plasmic-name={"messageOverlayNavigation"}
            data-plasmic-override={overrides.messageOverlayNavigation}
            className={classNames(
              "__wab_instance",
              sty.messageOverlayNavigation
            )}
          />

          <MessageHistoryArea
            data-plasmic-name={"messageHistoryArea"}
            data-plasmic-override={overrides.messageHistoryArea}
            className={classNames("__wab_instance", sty.messageHistoryArea)}
            messageSent={true}
          />

          <ComposeMessage
            data-plasmic-name={"composeMessage"}
            data-plasmic-override={overrides.composeMessage}
            className={classNames("__wab_instance", sty.composeMessage)}
          />

          <ActionsArea
            data-plasmic-name={"actionsArea"}
            data-plasmic-override={overrides.actionsArea}
            className={classNames("__wab_instance", sty.actionsArea)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  chatWindow: [
    "chatWindow",
    "messageOverlayNavigation",
    "messageHistoryArea",
    "composeMessage",
    "actionsArea"
  ],
  messageOverlayNavigation: ["messageOverlayNavigation"],
  messageHistoryArea: ["messageHistoryArea"],
  composeMessage: ["composeMessage"],
  actionsArea: ["actionsArea"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  chatWindow: "section";
  messageOverlayNavigation: typeof ChatHeader;
  messageHistoryArea: typeof MessageHistoryArea;
  composeMessage: typeof ComposeMessage;
  actionsArea: typeof ActionsArea;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChatWindow2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChatWindow2__VariantsArgs;
    args?: PlasmicChatWindow2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChatWindow2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicChatWindow2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicChatWindow2__ArgProps,
      internalVariantPropNames: PlasmicChatWindow2__VariantProps
    });

    return PlasmicChatWindow2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "chatWindow") {
    func.displayName = "PlasmicChatWindow2";
  } else {
    func.displayName = `PlasmicChatWindow2.${nodeName}`;
  }
  return func;
}

export const PlasmicChatWindow2 = Object.assign(
  // Top-level PlasmicChatWindow2 renders the root element
  makeNodeComponent("chatWindow"),
  {
    // Helper components rendering sub-elements
    messageOverlayNavigation: makeNodeComponent("messageOverlayNavigation"),
    messageHistoryArea: makeNodeComponent("messageHistoryArea"),
    composeMessage: makeNodeComponent("composeMessage"),
    actionsArea: makeNodeComponent("actionsArea"),

    // Metadata about props expected for PlasmicChatWindow2
    internalVariantProps: PlasmicChatWindow2__VariantProps,
    internalArgProps: PlasmicChatWindow2__ArgProps
  }
);

export default PlasmicChatWindow2;
/* prettier-ignore-end */
