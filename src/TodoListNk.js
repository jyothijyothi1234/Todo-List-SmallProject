import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TodoList() {
  const [name, setName] = useState({ title: "", description: "" });

  const [data, setData] = useState([]);

  console.log(data);
  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          value={name.title}
          onChange={(e) =>
            setName((val) => {
              return { ...val, title: e.target.value };
            })
          }
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          value={name.description}
          onChange={(e) =>
            setName((val) => {
              
              return { ...val, description: e.target.value };
            })
          }
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Button
          variant="contained"
          sx={{ width: "220px", height: "50px" }}
          onClick={() => {
            setData([...data, name]);
            setName({ title: "", description: "" })
        }}
        >
          Add
        </Button>
      </Grid>
      <Grid container xs={12} justifyContent="center" >
        {data.map((item) => (
          <Card title={item.title} description={item.description} />
        ))}
      </Grid>
    </Grid>
  );
}

function Card({ title, description }) {
  return (
    <Grid
      container
      xs={8}
      sx={{ padding: "50px 30px", background: "pink", margin: "20px 0" }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </Grid>
  );
}

export default TodoList;

