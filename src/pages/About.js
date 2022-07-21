import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import appleImageSeven from "../assets/images/apple-image-seven.png";
import AppleIcon from "@mui/icons-material/Apple";

const About = () => {
  return (
    <div className="about">
      <Card sx={{ maxWidth: 700 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={appleImageSeven} />
          <CardContent sx={{ background: "whitesmoke" }}>
            <Typography
              gutterBottom
              variant="h3"
            >
              <AppleIcon sx={{ fontSize: "4rem" }} />
            </Typography>
            <Typography variant="body3" fontSize={17} color="text.secondary">
              Apple Inc. is an American multinational technology company that
              specializes in consumer electronics, software and online services
              headquartered in Cupertino, California, United States. Apple is
              the largest technology company by revenue billion in 2 and as of
              May 2022, it is the world's second biggest company by market
              capitalization, the fourth-largest personal computer vendor by
              unit sales and second-largest mobile phone manufacturer. It is one
              of the Big Five American information technology companies,
              alongside Alphabet, Amazon, Meta.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default About;
