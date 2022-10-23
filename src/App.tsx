import React, { FC, useState } from "react";
import headshot from "./assets/headshot.jpg";
import tw, { styled } from "twin.macro";

type Props = {
  children?: React.ReactNode;
};

const Greeting = tw.div`text-6xl mb-5`;

const Paragraph = tw.div`max-w-[500px] text-base mb-3`;

const Headshot = tw.img`max-h-[600px]`;

const AppContainer = tw.div`h-full w-full flex flex-row items-center justify-center`;

const ContentContainer = tw.div`flex flex-col items-start ml-10`;

const Link: FC<Props & { link: string }> = ({ children, link }) => (
  <span css={[tw`cursor-pointer`]} onClick={() => window.open(link)}>
    {children}
  </span>
);

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <Headshot src={headshot} />
      <ContentContainer>
        <Greeting>Hi, I'm Jason</Greeting>
        <Paragraph>
          I'm currently a software engineer at{" "}
          <Link link="https://getcensus.com">Census</Link>, helping teams use
          data in their day-to-day operations. Previously, I cofounded{" "}
          <Link link="https://cohere.io">Cohere</Link>, and was at{" "}
          <Link link="https://about.fb.com/news/2018/06/all-of-your-facebook-memories-are-now-in-one-place/">
            Facebook
          </Link>
          ,{" "}
          <Link link="https://www.plm.automation.siemens.com/">
            Siemens R&D
          </Link>
          , and{" "}
          <Link link="https://www.bloomberg.com/news/articles/2020-08-03/farmers-business-network-raises-funds-at-1-75-billion-valuation">
            Farmers Business Network
          </Link>
          .
        </Paragraph>
        <Paragraph>
          You can find me on{" "}
          <Link link="https://github.com/kamesstory">Github</Link>,{" "}
          <Link link="https://linkedin.com/in/jason-hf-wang">LinkedIn</Link>, or
          through my <Link link="mailto:jhw513@gmail.com">email</Link>.
        </Paragraph>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
