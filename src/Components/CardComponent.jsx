import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import DropDown from "./DropDown";

export default function CardComponent({ category }) {
  const { _id, categoryName, bookName, description, image } = category;

  return (
    <div style={{ margin: "10px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="wwwwwwww" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {bookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
            <h2>{categoryName}</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><DropDown /> </Button>

        </CardActions>
      </Card>
    </div>
  );
}
