import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`flex items-start justify-end !pt-num-0 !pb-[26px] !pl-[235px] !pr-[235px] box-border max-w-full text-left text-num-48 text-black font-rubik mq850:!pl-[117px] mq850:!pr-[117px] mq850:box-border mq450:!pl-num-20 mq450:!pr-num-20 mq450:box-border ${className}`}
    >
      <Box className="flex flex-col items-end gap-[27px] max-w-full">
        <Box className="flex items-start justify-end !pt-num-0 !pb-num-0 !pl-[329px] !pr-[329px] box-border max-w-full mq1225:!pl-[164px] mq1225:!pr-[164px] mq1225:box-border mq850:!pl-num-82 mq850:!pr-num-82 mq850:box-border mq450:!pl-num-20 mq450:!pr-num-20 mq450:box-border">
          <Box className="w-[362px] flex flex-col items-start max-w-full">
            <Typography
              className="!m-0 relative mq850:text-num-38 mq450:text-num-29"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "500" }}
            >
              OUR PROJECTS
            </Typography>
            <Box className="self-stretch h-num-7 relative z-[1]">
              <Box className="absolute top-[4px] left-[0px] border-darkgray border-solid border-t-[1px] box-border w-[363px] h-px" />
              <Box className="absolute top-[0px] left-[0px] rounded-num-4 bg-darkgray w-[103px] h-num-7 z-[1]" />
            </Box>
          </Box>
        </Box>
        <Box className="w-[1130px] flex items-start flex-wrap content-start gap-[22px] max-w-full">
          <img
            className="h-[667px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[360px] mq1225:min-w-full"
            loading="lazy"
            alt=""
            src="/Our-Project-1-img-1@2x.png"
          />
          <Box className="flex-1 flex flex-col items-start gap-[22px] min-w-[360px] max-w-full mq1225:min-w-full">
            <img
              className="self-stretch h-[322px] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/Our-Project-2-img-1@2x.png"
            />
            <img
              className="self-stretch h-[323px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/Our-Project-3-img-1@2x.png"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
