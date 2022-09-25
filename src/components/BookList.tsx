import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Link,
  Theme,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import { BookType } from "../models";

const style = {
  description: {
    maxHeight: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  name: {
    maxHeight: 30,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  paper: {
    color: (theme: Theme) => theme.palette.text.secondary,
    p: 2,
    textAlign: "center",
  },
  root: {
    flexGrow: 1,
  },
};

type IProps = {
  books: Array<BookType>;
  error: boolean;
  loading: boolean;
};

function BookList({ loading, error, books }: IProps) {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  return (
    <Box data-test="book-list" sx={{ ...style.root }}>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid key={book.id} item className="book-item" sm={4} xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom sx={{ ...style.name }} variant="h5">
                    {book.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    sx={{ ...style.description }}
                    variant="body2"
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary" size="small">
                  <Link component={RouterLink} to={`/books/${book.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default BookList;
