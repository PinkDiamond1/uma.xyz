import styled from "styled-components";
import { ReactNode } from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackCodeViewer } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";

interface Props {
  title: string;
  body: ReactNode;
}

const code = `pragma solidity ^0.8.14;

contract OO_GettingStarted {
  bytes32 identifier = bytes32 ("YES_OR_NO_QUERY");
  bytes ancillaryData =

    bytes("Q: Did the temperature on the 25th of July 2022 in Manhattan NY exceed 35c? A:1 for yes. 0 for no.");

  uint256 requestTime = 0;
  function requestPrice() public {
    requestTime = block.timestamp;
    IERC20 bondCurrency = IERC20(0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6);
    uint256 reward = 0;
`;
const BuilderTabContent: React.FC<Props> = ({ title, body }) => {
  return (
    <Wrapper>
      <TextColumn>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <GreyBlurb>Real contract used by Polymarket:</GreyBlurb>
        <RedBlurb>“Did the temperature on the 25th of July 2022 in Manhattan NY exceed 35c?”</RedBlurb>
      </TextColumn>
      <CodeColumn>
        <SandpackProvider theme={githubLight}>
          <SandpackLayout>
            <SandpackCodeViewer
              decorators={[
                {
                  line: 1,
                  className: "line-1",
                },
              ]}
              code={code}
              showLineNumbers
              showTabs
            />
          </SandpackLayout>
        </SandpackProvider>
      </CodeColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;

const Title = styled.h2`
  font: var(--header-sm);
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  font: var(--body-lg);
  padding-bottom: 48px;
  border-bottom: 1px solid var(--grey-150);
`;

const GreyBlurb = styled.div`
  font: var(--body-md);
  color: #b0afb3;
  margin-top: 24px;
`;

const RedBlurb = styled(GreyBlurb)`
  margin-top: 8px;
  color: var(--red-500);
`;

const CodeColumn = styled.div`
  display: flex;
  max-width: 50%;
  margin-left: auto;
`;
export default BuilderTabContent;
