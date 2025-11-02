import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`flex items-start justify-end !pt-num-0 !pb-num-0 !pl-[130px] !pr-[130px] box-border max-w-full text-left text-num-16 text-black font-rubik mq850:!pl-num-65 mq850:!pr-num-65 mq850:box-border mq450:!pl-num-20 mq450:!pr-num-20 mq450:box-border ${className}`}
    >
      <Box className="w-[1340px] flex flex-col items-start gap-[22px] max-w-full">
        <Box className="self-stretch bg-lightsteelblue flex items-start justify-between !pt-num-42 !pb-[41px] !pl-[84px] !pr-[111px] box-border gap-5 max-w-full mq1225:flex-wrap mq1225:!pl-num-42 mq1225:!pr-[55px] mq1225:box-border mq850:!pl-[21px] mq850:!pr-[27px] mq850:box-border">
          <Box className="h-52 w-[1340px] relative bg-lightsteelblue hidden max-w-full" />
          <Box className="flex items-end gap-3.5">
            <Box className="flex flex-col items-start justify-end !pt-num-0 !pb-1.5 !pl-num-0 !pr-num-0">
              <Box className="flex flex-col items-start gap-[15.5px]">
                <img
                  className="w-4 h-4 relative object-cover z-[1]"
                  alt=""
                  src="/facebook-1@2x.png"
                />
                <img
                  className="w-4 h-4 relative object-cover z-[1]"
                  alt=""
                  src="/linkedin-1@2x.png"
                />
                <Box className="w-4 h-4 relative z-[1]">
                  <Box className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
                  <img
                    className="absolute top-[3px] left-[3px] w-2.5 h-2.5 object-cover z-[1]"
                    alt=""
                    src="/search-1@2x.png"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col items-start">
              <Typography
                className="relative shrink-0 z-[2]"
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "221%", fontWeight: "700" }}
              >
                Social
              </Typography>
              <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-0 text-num-14 text-gray">
                <div className="!mt-[-3px] relative leading-[221%] shrink-0 z-[1]">
                  <Typography className="!m-0" variant="inherit">
                    Facebook
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    Linkedin
                  </Typography>
                  <Typography className="!m-0" variant="inherit">
                    Google +
                  </Typography>
                </div>
              </Box>
            </Box>
          </Box>
          <Box className="flex flex-col items-start">
            <Typography
              className="relative shrink-0 z-[2]"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "221%", fontWeight: "700" }}
            >
              Explore
            </Typography>
            <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-0 text-num-14 text-gray">
              <div className="!mt-[-3px] relative leading-[221%] shrink-0 z-[1]">
                <Typography className="!m-0" variant="inherit">
                  Services
                </Typography>
                <Typography className="!m-0" variant="inherit">
                  Team
                </Typography>
                <Typography className="!m-0" variant="inherit">
                  Clients
                </Typography>
              </div>
            </Box>
          </Box>
          <Box className="flex flex-col items-start">
            <Typography
              className="relative shrink-0 z-[2]"
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "221%", fontWeight: "700" }}
            >
              Contact
            </Typography>
            <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-0 text-num-14 text-gray">
              <div className="!mt-[-3px] relative leading-[221%] shrink-0 z-[1]">
                <Typography className="!m-0" variant="inherit">
                  Lorem Ipsum dummy address
                </Typography>
                <Typography className="!m-0" variant="inherit">
                  used for display
                </Typography>
                <Typography className="!m-0" variant="inherit">
                  1234567890
                </Typography>
              </div>
            </Box>
          </Box>
          <Box className="flex flex-col items-start">
            <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-0">
              <Typography
                className="!mb-[-3px] relative inline-block shrink-0 z-[2]"
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "221%", fontWeight: "700" }}
              >
                Email
              </Typography>
            </Box>
            <div className="relative text-num-14 leading-[221%] text-gray shrink-0 z-[1]">
              mendlesoncommunication@email.com
            </div>
          </Box>
        </Box>
        <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-[497px] !pr-[497px] text-num-14 text-gray mq1225:!pl-[248px] mq1225:!pr-[248px] mq1225:box-border mq850:!pl-[124px] mq850:!pr-[124px] mq850:box-border mq450:!pl-num-20 mq450:!pr-num-20 mq450:box-border">
          <div className="relative">{`© Copyright 2018 Mendleson Communication Pty Ltd `}</div>
        </Box>
      </Box>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
