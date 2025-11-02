import { Box, Typography } from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import AboutContainer from "../components/AboutContainer";
import FrameComponent2 from "../components/FrameComponent2";
import CommunicationCard from "../components/CommunicationCard";
import ConsultationDetails from "../components/ConsultationDetails";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";

const MendlesonLandingPageDesign = () => {
  return (
    <Box className="w-full relative bg-white overflow-hidden flex flex-col items-end !pt-num-0 !pb-[22px] !pl-num-0 !pr-num-0 box-border gap-9 leading-[normal] tracking-[normal] mq450:gap-[18px]">
      <Box className="self-stretch h-[899px] relative bg-white hidden z-[0]" />
      <section className="self-stretch h-[947px] relative max-w-full">
        <FrameComponent />
        <FrameComponent1 />
      </section>
      <section className="flex items-start justify-end !pt-num-0 !pb-[93px] !pl-[130px] !pr-[130px] box-border max-w-full mq1225:!pl-num-65 mq1225:!pr-num-65 mq1225:box-border mq850:!pb-[60px] mq850:box-border mq450:!pl-8 mq450:!pr-8 mq450:box-border">
        <AboutContainer />
      </section>
      <img
        className="w-[259px] h-[471px] absolute !!m-[0 important] top-[2633px] left-[-52px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/Asset-7-1@2x.png"
      />
      <img
        className="w-[409.4px] h-[505.3px] absolute !!m-[0 important] right-[-133.1px] bottom-[1485.7px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/Asset-8-2@2x.png"
      />
      <FrameComponent2 />
      <CommunicationCard />
      <ConsultationDetails />
      <section className="self-stretch flex items-start justify-center !pt-num-0 !pb-num-82 !pl-num-20 !pr-[60px] box-border max-w-full text-left text-[22px] text-black font-rubik mq1225:!pr-[30px] mq1225:box-border">
        <Box className="w-[960px] flex items-start justify-between gap-5 max-w-full mq850:flex-wrap">
          <Typography
            className="!m-0 relative mq450:text-num-19"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "400", fontSize: "24px" }}
          >
            Jessica D’suza
          </Typography>
          <Box className="flex flex-col items-start !pt-px !pb-num-0 !pl-num-0 !pr-num-20">
            <Typography
              className="!m-0 relative mq450:text-num-18"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "400" }}
            >
              Johny Williams
            </Typography>
          </Box>
          <Box className="flex flex-col items-start !pt-px !pb-num-0 !pl-num-0 !pr-num-0">
            <Typography
              className="!m-0 relative mq450:text-num-18"
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "400" }}
            >
              Sanya R,
            </Typography>
          </Box>
        </Box>
      </section>
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
    </Box>
  );
};

export default MendlesonLandingPageDesign;
