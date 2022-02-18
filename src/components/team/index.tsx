import React from "react";
import { Grid, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import lukas from "../../assets/lukas.jpg";
import helen from "../../assets/helen.jpg";
import david from "../../assets/david.jpg";
import avatarMale from "../../assets/avatar-male.png";
import avatarFemale from "../../assets/avatar-female.png";

import Card from "./Card";
import { CardProps } from "./CardDialog";

const team = [
  {
    name: "Helen",
    imageSrc: helen,
    role: "creator & desinger",
    description:
      "Helen is the brainchild of Gegenwind. As a passionate triathlete, she and her training partners often encountered the problem of having to wear inadequate cycling or running shoes. So, as part of her thesis, she developed an individual cycling shoe that solves the problems of athletes and, thanks to its innovative design, can be broken down into its components and produced in Germany with little manual labor. Together with Lukas, Helen is also working on product development with a special focus on design language and corporate identity. With her select team she wants to make Headwind one of the most innovative companies in Germany.",
  },
  {
    name: "Lukas",
    imageSrc: lukas,
    role: "technology & product development",
    description:
      "As a trained industrial designer, Lukas takes care of the technical and creative product development together with Helen. When it comes to the interface between design and technology, he is the right contact. From 3-D modeling of the shoe to the intelligent app - he is up to any challenge. In addition to his technical side, however, social and societal aspects also flow into the design process. Only in this way, he believes, will it be possible to create an innovative, durable and socially just product. Lukas and Helen studied product design together at the HBK Saar and have therefore known each other since their student days. He is also a passionate climber and likes to go on a few tours with his gravel bike.",
  },
  {
    name: "David",
    imageSrc: david,
    role: "sport management & communication",
    description:
      "As an active mountain biker and competitor, David loves challenges. Therefore, it is not surprising that he jumped on the bandwagon when he got to know Helen and Gegenwind. With his expertise as a sports scientist and sports manager, he not only brings a wealth of experience in the field of sports sales and sports brands, but at the same time can support the others in the development of the shoe in the field of biomechanics. He is our communication and sales talent and ensures that we have the right partners on our side for the construction of the shoe. Because of his passion for coffee, he always keeps the office in a good mood.",
  },
  {
    name: "Carsten",
    imageSrc: avatarMale,
    role: "coming soon",
    description:
      "Carsten has a Master of Engineering and works at the Chair of Materials Science. Currently, in his spare time, rather only two-wheelers rotate, while professionally he was involved in the development of a formula racing car as a project manager. Since 2014 he is self-employed with the bicycle store “rad-salon.” and has 20 years of experience in cycling himself. Through this combination he has excellent knowledge in the field of design, manufacturing and material selection for the shoe as well as in the field of customer wishes and requirements for a successful market entry.",
  },
  {
    name: "Jane Doe",
    imageSrc: avatarFemale,
    role: "coming soon",
    description: "Coming soon",
  },
];

const Team = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={classes.root}
    >
      <Grid
        container
        item
        justifyContent="center"
        xs={12}
        alignItems="flex-end"
        sx={{ mb: 4 }}
      >
        {team.map((person: CardProps, index) => (
          <Card
            key={index.toString()}
            name={person.name}
            imageSrc={person.imageSrc}
            role={person.role}
            description={person.description}
          />
        ))}
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography className={classes.text}>
          Alles begann 1969 an einem Strand. Quiksilver schug einen Weg ein,
          welchen es vorher so nicht gegeben hatte und verband Form und
          Funktion. Das Ergebnis was Surf Gear, die nicht nur gut aussah,
          sondern auch fur die notige Performance sorgte - ganz egal wie die
          Bedingungen waren. Heute, etliche Jahre spater, konnen wir mit Stolz
          behaupten, unseren Wurzeln treu geblieben zu sein und das unsere
          Kollektion auch heute noch aus Surf Wear, Snowboard Gear und Kinder
          und Mannerbekleidung besteht, die zu 100% die Boardsport DNA von
          damals wiederspiegelt. Style und Performance sind auch heute noch
          unsere Starke, ebenso wie das beste Surf und Snowboardteam der Welt.
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 75px)",
    width: "100%",
    backgroundColor: theme.palette.ivory.main,
    flexWrap: "nowrap",
    padding: theme.spacing(6, 2),
  },
  text: {
    width: "70%",
    color: theme.palette.secondary.main,
    textAlign: "center",
  },
}));

export default Team;
