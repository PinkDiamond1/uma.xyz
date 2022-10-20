import { useState, useEffect } from "react";
import styled from "styled-components";
import Clock from "public/assets/clock.svg";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import calculateTimeRemaining from "./calculateTimeRemaining";

type theme = "light" | "dark";

interface Props {
  theme: theme;
}

const VoteTicker: React.FC<Props> = ({ theme = "dark" }) => {
  const { timeRemaining } = useVoteTicker();
  return (
    <Section>
      <Wrapper>
        <VoteBlock>
          <ClockBG>
            <Clock />
          </ClockBG>
          <VoteText>
            Time to commit vote:
            <span>{timeRemaining}</span>
          </VoteText>
        </VoteBlock>
        <MoreDetailsBlock>
          <span>More details</span>
          <a href="https://vote.umaproject.org/" target="_blank" rel="noreferrer">
            <UpRightArrow />
          </a>
        </MoreDetailsBlock>
      </Wrapper>
    </Section>
  );
};

export default VoteTicker;

function useVoteTicker() {
  const [timeRemaining, setTimeRemaining] = useState("00:00");
  // Set time remaining depending if it's the Commit or Reveal
  // Note: the requests are all slightly differently in there final vote time. I'll use the last
  // Vote added.
  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining());

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return { timeRemaining };
}

interface IStyledProps {
  theme: theme;
}

const Section = styled.div<IStyledProps>`
  width: 100%;
  background: ${({ theme }) => (theme === "dark" ? "inherit" : "var(--grey-100)")};
  padding-top: ${({ theme }) => (theme === "dark" ? "16px" : "48px")}; ;
`;
const Wrapper = styled.div<IStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  gap: 16px;
  isolation: isolate;
  max-width: var(--max-section-width);
  margin: 0 auto;
  height: 48px;
  background: ${({ theme }) => (theme === "dark" ? "var(--black-100)" : "var(--white-50)")};
  border-radius: 8px;
`;

const VoteBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const ClockBG = styled.div<IStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 32px;
  height: 32px;
  background: rgba(255, 74, 74, 0.15);
  border-radius: 28px;
  g {
    fill: #503236;
  }
`;

const VoteText = styled.div<IStyledProps>`
  font: var(--body-sm);
  color: #b0afb3;
  span {
    color: var(--white);
    margin-left: 4px;
  }
  padding-right: 16px;
  border-right: 1px solid hsl(255, 2%, 64%, 0.2);
`;

const MoreDetailsBlock = styled.div<IStyledProps>`
  font: var(--body-sm);
  color: #b0afb3;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  path {
    stroke: #b0afb3;
  }
`;
