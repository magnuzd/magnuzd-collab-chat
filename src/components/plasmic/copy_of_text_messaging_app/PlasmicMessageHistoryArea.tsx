// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 72tUXrciMYQcBHG6D1vyXy
// Component: U31Z3Qz5o1OYd
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
import sty from "./PlasmicMessageHistoryArea.module.css"; // plasmic-import: U31Z3Qz5o1OYd/css

export type PlasmicMessageHistoryArea__VariantMembers = {
  messageSent: "messageSent";
};

export type PlasmicMessageHistoryArea__VariantsArgs = {
  messageSent?: SingleBooleanChoiceArg<"messageSent">;
};

type VariantPropType = keyof PlasmicMessageHistoryArea__VariantsArgs;
export const PlasmicMessageHistoryArea__VariantProps =
  new Array<VariantPropType>("messageSent");

export type PlasmicMessageHistoryArea__ArgsType = {};
type ArgPropType = keyof PlasmicMessageHistoryArea__ArgsType;
export const PlasmicMessageHistoryArea__ArgProps = new Array<ArgPropType>();

export type PlasmicMessageHistoryArea__OverridesType = {
  messageHistory?: p.Flex<"main">;
  recipient?: p.Flex<"label">;
  freeBox?: p.Flex<"div">;
  messages?: p.Flex<"div">;
  recruiterMessage?: p.Flex<"div">;
  candidateMessage?: p.Flex<"div">;
  recruiterMessage2?: p.Flex<"div">;
};

export interface DefaultMessageHistoryAreaProps {
  messageSent?: SingleBooleanChoiceArg<"messageSent">;
  className?: string;
}

function PlasmicMessageHistoryArea__RenderFunc(props: {
  variants: PlasmicMessageHistoryArea__VariantsArgs;
  args: PlasmicMessageHistoryArea__ArgsType;
  overrides: PlasmicMessageHistoryArea__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"main"}
      data-plasmic-name={"messageHistory"}
      data-plasmic-override={overrides.messageHistory}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        plasmic_dls_css.plasmic_tokens,
        sty.messageHistory,
        {
          [sty.messageHistorymessageSent]: hasVariant(
            variants,
            "messageSent",
            "messageSent"
          )
        }
      )}
    >
      <label
        data-plasmic-name={"recipient"}
        data-plasmic-override={overrides.recipient}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.recipient
        )}
      >
        {"To: Jack Murciano"}
      </label>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      />

      {true ? (
        <div
          data-plasmic-name={"messages"}
          data-plasmic-override={overrides.messages}
          className={classNames(projectcss.all, sty.messages, {
            [sty.messagesmessageSent]: hasVariant(
              variants,
              "messageSent",
              "messageSent"
            )
          })}
        >
          <div
            data-plasmic-name={"recruiterMessage"}
            data-plasmic-override={overrides.recruiterMessage}
            className={classNames(projectcss.all, sty.recruiterMessage, {
              [sty.recruiterMessagemessageSent]: hasVariant(
                variants,
                "messageSent",
                "messageSent"
              )
            })}
          >
            <p
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p__xztf3
              )}
            >
              {"Hi Jack"}
            </p>
          </div>

          <div
            data-plasmic-name={"candidateMessage"}
            data-plasmic-override={overrides.candidateMessage}
            className={classNames(projectcss.all, sty.candidateMessage, {
              [sty.candidateMessagemessageSent]: hasVariant(
                variants,
                "messageSent",
                "messageSent"
              )
            })}
          >
            <p
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p__tWo8
              )}
            >
              {"Hi recruiter X"}
            </p>
          </div>

          {(
            hasVariant(variants, "messageSent", "messageSent") ? true : false
          ) ? (
            <div
              data-plasmic-name={"recruiterMessage2"}
              data-plasmic-override={overrides.recruiterMessage2}
              className={classNames(projectcss.all, sty.recruiterMessage2, {
                [sty.recruiterMessage2messageSent]: hasVariant(
                  variants,
                  "messageSent",
                  "messageSent"
                )
              })}
            >
              <p
                className={classNames(
                  projectcss.all,
                  projectcss.p,
                  projectcss.__wab_text,
                  sty.p__gb8Z2
                )}
              >
                {"Please do xyz"}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  messageHistory: [
    "messageHistory",
    "recipient",
    "freeBox",
    "messages",
    "recruiterMessage",
    "candidateMessage",
    "recruiterMessage2"
  ],
  recipient: ["recipient"],
  freeBox: ["freeBox"],
  messages: [
    "messages",
    "recruiterMessage",
    "candidateMessage",
    "recruiterMessage2"
  ],
  recruiterMessage: ["recruiterMessage"],
  candidateMessage: ["candidateMessage"],
  recruiterMessage2: ["recruiterMessage2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  messageHistory: "main";
  recipient: "label";
  freeBox: "div";
  messages: "div";
  recruiterMessage: "div";
  candidateMessage: "div";
  recruiterMessage2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMessageHistoryArea__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMessageHistoryArea__VariantsArgs;
    args?: PlasmicMessageHistoryArea__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMessageHistoryArea__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMessageHistoryArea__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMessageHistoryArea__ArgProps,
      internalVariantPropNames: PlasmicMessageHistoryArea__VariantProps
    });

    return PlasmicMessageHistoryArea__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "messageHistory") {
    func.displayName = "PlasmicMessageHistoryArea";
  } else {
    func.displayName = `PlasmicMessageHistoryArea.${nodeName}`;
  }
  return func;
}

export const PlasmicMessageHistoryArea = Object.assign(
  // Top-level PlasmicMessageHistoryArea renders the root element
  makeNodeComponent("messageHistory"),
  {
    // Helper components rendering sub-elements
    recipient: makeNodeComponent("recipient"),
    freeBox: makeNodeComponent("freeBox"),
    messages: makeNodeComponent("messages"),
    recruiterMessage: makeNodeComponent("recruiterMessage"),
    candidateMessage: makeNodeComponent("candidateMessage"),
    recruiterMessage2: makeNodeComponent("recruiterMessage2"),

    // Metadata about props expected for PlasmicMessageHistoryArea
    internalVariantProps: PlasmicMessageHistoryArea__VariantProps,
    internalArgProps: PlasmicMessageHistoryArea__ArgProps
  }
);

export default PlasmicMessageHistoryArea;
/* prettier-ignore-end */
