import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps } from "react";
import { ExternalLinkArrowContainer } from "./styles";

type ExternalLinkArrowProps = ComponentProps<typeof ExternalLinkArrowContainer> & {
  text: string;
}

export function ExternalLinkArrow({ text, ...rest }: ExternalLinkArrowProps) {
  return (
    <ExternalLinkArrowContainer {...rest}>
      <FontAwesomeIcon icon={faAngleLeft} />
      {text}
    </ExternalLinkArrowContainer>
  );
}