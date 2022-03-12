import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useCarouselPosition } from "../hooks/useCarouselPosition";
import Indicators from "../components/Indicators";
import createArrayWithIndicesOfLength from "../helpers/createArrayWithIndiciesOfLength";
import TestimonialCard from "../components/TestimonialCard"
import { ArrowRight } from "@styled-icons/feather/ArrowRight";
import { ArrowLeft } from "@styled-icons/feather/ArrowLeft";

const TestimonialsContainer = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 70px;
`
const theme = {
  marginTopAndBottomToClearBoxShadow: "24px",
  spaceBetweenElements: "26px",
  widthOccupiedBySlide: "100%",
};

const DesktopSteps = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 24px 0;
  flex-wrap: wrap;
  padding: 0 ${(props) => props.theme.spaceBetweenElements};
  justify-content: center;
  scroll-snap-type: x mandatory;
  flex-wrap: nowrap;
  overflow: scroll;
  justify-content: initial;
  padding: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  & > * {
    scroll-snap-align: center;
    box-sizing: border-box;
    min-width: ${(props) => props.theme.widthOccupiedBySlide};
    padding: 0 calc(${(props) => props.theme.spaceBetweenElements} / 2);
  }
  & > *:first-child {
    scroll-snap-align: start;
  }
  & > *:last-child {
    scroll-snap-align: end;
    min-width: calc(
      (
          ${(props) => props.theme.widthOccupiedBySlide} -
            ${(props) => props.theme.ITEMS_PER_SLIDE}*
            ${(props) => props.theme.spaceBetweenElements}
        ) / ${(props) => props.theme.ITEMS_PER_SLIDE} *
        ${(props) => props.theme.ITEMS_ON_LAST_SLIDE} +
        ${(props) => props.theme.ITEMS_ON_LAST_SLIDE} *
        ${(props) => props.theme.spaceBetweenElements}
    );
  }
  & .itemContainer {
    width: 100%;
    margin-top: ${(props) => props.theme.marginTopAndBottomToClearBoxShadow};
    margin-bottom: ${(props) => props.theme.marginTopAndBottomToClearBoxShadow};
  }
`;
const MobileSteps = styled(DesktopSteps)`
  & > *:first-child {
    padding-left: ${(props) => props.theme.PageMarginMobile};
  }
  & > *:last-child {
    padding-right: ${(props) => props.theme.PageMarginMobile};
  }
`;
const ScrollSlide = styled.div`
  display: flex;
  & > *:last-child {
    margin-right: 0;
  }
  & > * {
    margin-right: ${(props) => props.theme.spaceBetweenElements};
  }
`;
const IndicatorsContainer = styled.div`
  width: max-content;
  margin: 0 auto;
`;
const MobileIndicatorsContainer = styled.div`
  width: max-content;
  margin: ${(props) => props.theme.PageMarginMobile};
  padding-left: 20px;
`;
const SliderSection = styled.div`
  position: relative;
`;
const ArrowButton = styled.button`
  position: absolute;
  top: calc(50% - 56px / 2);
  padding: 15px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 4px 4px 12px 0 rgba(4, 0, 0, 0.12);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.2s;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
const NextButton = styled(ArrowButton)`
  right: -30px;
`;
const BackButton = styled(ArrowButton)`
  left: -30px;
`;
const NextArrow = styled(ArrowRight)`
  height: 26px;
  width: 26px;
`;
const BackArrow = styled(ArrowLeft)`
  height: 26px;
  width: 26px;
`;

function calculateItemsOnLastSlide(numberOfItems, itemsPerSlide) {
  let remainder = numberOfItems % itemsPerSlide;
  if (remainder) return remainder;
  return itemsPerSlide;
}

export const DesktopSlider = ({ items, itemsPerSlide }) => {
  const slider = useRef(null);
  const ITEMS_PER_SLIDE = itemsPerSlide;
  const numberOfSlides = Math.ceil(items.length / ITEMS_PER_SLIDE);
  const slidesArray = createArrayWithIndicesOfLength(numberOfSlides);

  const ITEMS_ON_LAST_SLIDE = calculateItemsOnLastSlide(
    items.length,
    ITEMS_PER_SLIDE
  );

  const [
    setNodes,
    entryIndex,
    scrollToElement,
    scrollToNext,
    scrollToPrevious,
  ] = useCarouselPosition({
    root: slider.current,
    threshold: 0.9,
  });
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length);
    setNodes(itemsRef.current);
  }, [items, setNodes]);

  return (
    <ThemeProvider theme={{ ...theme, ITEMS_ON_LAST_SLIDE, ITEMS_PER_SLIDE }}>
      <SliderSection>
        <DesktopSteps ref={slider}>
          {slidesArray.map((slideIndex, i) => (
            <ScrollSlide
              key={slideIndex}
              ref={(el) => (itemsRef.current[i] = el)}
            >
              {items
                .filter(
                  (_, i) => Math.floor(i / ITEMS_PER_SLIDE) === slideIndex
                )
                .map((item, i) => {
                  return (
                    <div className="itemContainer" key={i}>
                      <TestimonialCard data={item} />
                    </div>
                  );
                })}
            </ScrollSlide>
          ))}
        </DesktopSteps>
        <BackButton show={entryIndex !== 0} onClick={scrollToPrevious}>
          <BackArrow />
        </BackButton>
        <NextButton
          show={entryIndex !== numberOfSlides - 1}
          onClick={scrollToNext}
        >
          <NextArrow />
        </NextButton>
      </SliderSection>
      <IndicatorsContainer>
        <Indicators
          numberOfIndicators={numberOfSlides}
          activeIndicator={entryIndex}
          theme="dark"
          handleClick={scrollToElement}
        />
      </IndicatorsContainer>
    </ThemeProvider>
  );
};

const MobileSlider = ({data}) => {
  const items = data.items
  const slider = useRef(null);
  const ITEMS_PER_SLIDE = 1;
  const numberOfSlides = Math.ceil(items.length / ITEMS_PER_SLIDE);

  const ITEMS_ON_LAST_SLIDE = calculateItemsOnLastSlide(
    items.length,
    ITEMS_PER_SLIDE
  );

  const [setNodes, entryIndex, scrollToElement] = useCarouselPosition({
    root: slider.current,
    threshold: 0.9,
  });
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length);
    setNodes(itemsRef.current);
  }, [items, setNodes]);

  return (
    <ThemeProvider theme={{ ...theme, ITEMS_ON_LAST_SLIDE, ITEMS_PER_SLIDE }}>
      <SliderSection>
        <MobileSteps ref={slider}>
          {items.map((item, i) => {
            return (
              <div
                className="itemContainer"
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
              >
                <TestimonialCard data={item} />
              </div>
            );
          })}
        </MobileSteps>
      </SliderSection>
      <MobileIndicatorsContainer>
        <Indicators
          numberOfIndicators={numberOfSlides}
          activeIndicator={entryIndex}
          theme="dark"
          handleClick={scrollToElement}
        />
      </MobileIndicatorsContainer>
    </ThemeProvider>
  );
};

const TabletSliderContainer = styled.div`
  display: none;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 800px) and (max-width: 1400px) {
    display: block;
  }
`;
const DesktopSliderContainer = styled.div`
  display: none;
  @media (min-width: 1400px) {
    display: block;
  }
`;
const MobileSliderContainer = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

const TestimonialsComponent = ({data}) => {
    return (
    <TestimonialsContainer id="Testimonials">
    <MobileSliderContainer>
        <MobileSlider data={data}/>
    </MobileSliderContainer>
    <TabletSliderContainer>
        <DesktopSlider items={data.items} itemsPerSlide={2} />
    </TabletSliderContainer>
    <DesktopSliderContainer>
        <DesktopSlider items={data.items} itemsPerSlide={3} />
    </DesktopSliderContainer>
</TestimonialsContainer>
    )
}

export default TestimonialsComponent