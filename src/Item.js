import React from "react";
import {
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemSecondaryAction,
    IconButton
   } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete"

const Item = props => {
    return (
      <ListItem>
          <ListItemIcon>
              <Checkbox
                  checked={props.task.status}
                  onChange={props.toggle(props.task._id)}
              />
          </ListItemIcon>
          {props.task.subject}
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={props.remove(props.task._id)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
    );
}

export default Item;
