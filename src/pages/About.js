import * as React from "react";
import appleImageSeven from "../assets/images/apple-image-seven.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const About = () => {
  return (
    <>
      <div className="col-12 text-center">
        <h2 className="my-3">About</h2>
        <hr />
      </div>
      <div className="about_card">
        <Card sx={{ maxWidth: 700 }}>
          <CardActionArea>
            <CardMedia component="img" height="380" image={appleImageSeven} />
            <CardContent sx={{ background: "whitesmoke" }}>
              <Typography
                gutterBottom
                variant="h4"
              >
              </Typography>
              <Typography variant="body3" fontSize={16} color="text.secondary">
                Apple Inc. is an American multinational technology company that
                specializes in consumer electronics, software and online services
                headquartered in Cupertino, California, United States. Apple is
                the largest technology company by revenue billion in 2 and as of
                May 2022, it is the world's second biggest company by market
                capitalization, the fourth-largest personal computer vendor by
                unit sales and second-largest mobile phone manufacturer. It is one
                of the Big Five American information technology companies,
                alongside Alphabet, Amazon, Meta, Microsoft. <br /> Apple became the first publicly traded U.S. company to be valued at over $1 trillion in August 2018, and most recently $3 trillion in January 2022.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default About;
