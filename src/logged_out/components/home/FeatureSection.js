import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth, Hidden } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import calculateSpacing from "./calculateSpacing";
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DescriptionIcon from '@material-ui/icons/Description';
import FeatureCard from "./FeatureCard";


const iconSize = 50;

const features = [
  {
    color: "#00C853",
    headline: "E-Certification",
    text:
      "you wil get e-certification after finish",
    icon: <DescriptionIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "E-Books",
    text:
      "You will get any E-books for learn program language, ex: javascript, Html, css,atc",
    icon: <CollectionsBookmarkIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Front-End Knowlage",
    text:
      "This is Course we practicing about Front-End Development",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Relation",
    text:
      "You will have many new friends after participating in this training",
    icon: <SupervisorAccountIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },

];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-mg-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Benefits
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)} align="center">
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={6}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
