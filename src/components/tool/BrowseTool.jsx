import React from "react";
import {
  ToolSection,
  ToolMain,
  ToolTitle,
  ToolListSection,
  ToolList,
  ParticularList,
  Img,
  Para,
} from "./BrowseToolStyle.js";

function BrowseTool({ tools, onClickTools, toolId }) {
  return (
    <>
      <ToolSection>
        <ToolMain>
          <ToolTitle>Browse by Tools</ToolTitle>
          <ToolListSection>
            {tools?.map((res) => (
              <ToolList key={res?.id} onClick={() => onClickTools(res?.id)}>
                <ParticularList
                  active={res?.id === toolId}
                  cover={<Img src={res?.img} />}
                >
                  <Para
                    title={res?.title}
                    break={res?.title === "Recommendation" ? "word_break" : ""}
                  />
                </ParticularList>
              </ToolList>
            ))}
          </ToolListSection>
        </ToolMain>
      </ToolSection>
    </>
  );
}

export default BrowseTool;
