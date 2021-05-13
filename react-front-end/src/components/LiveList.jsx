import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { stateContext } from "../contextProviders/stateContext";

const hi = false;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "15%",
    left: "3%",
    maxWidth: 360,
    backgroundColor: `transparent`,
    color: "white",
  },
  "root:hover": {
    background: "green",
  },
  "list-title": {
    "text-decoration": "underline",
  },
  "list-text": {
    color: "white",
  },
  "list-item": {
    backgroundColor: "rgb(2, 237, 116, 0.3)",
    border: "2px solid black",
    borderRadius: "5px",
  },
  "MuiListItemText-secondary": {
    color: "red",
  },
}));

//map through livelist state, put each one into a list item, but that in {var} list

export default function LiveList(props) {
  const classes = useStyles();
  const { state, setState, liveList } = useContext(stateContext);
  const quakePage = function (eq) {
    setState({
      ...state,
      earthquake: {
        title: eq.title,
        latitude: eq.latitude,
        longitude: eq.longitude,
        depth: eq.depth,
        magnitude: eq.magnitude,
        pager: eq.pager,
        time_stamp: eq.time_stamp,
        tsunami: eq.tsunami,
      },
      mode: "earthquake",
    });
  };

  const eqList = liveList.map((quake) => {
    return (
      <ListItem
        button
        onClick={() => quakePage(quake)}
        className={classes["list-item"]}
      >
        <ListItemText
          key={quake.id}
          className={classes["list-text"]}
          primary={quake.title}
          secondary={quake.magnitude}
        />
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <List aria-label="new earthquake">
        <ListItem>
          <ListItemText
            className={classes["list-title"]}
            primary="Most Recent Earthquakes"
          />
        </ListItem>
        {eqList}
      </List>
    </div>
  );
}
