import { useQuery, gql } from "@apollo/client";
import { Grid, Card, CardContent, Typography, Container, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const PostQuery = gql`
  query {
    posts{
      title,
      time,
      url,
      author,
      time,
      comments,
      points
    }
  }
`;

const useStyles = makeStyles({
  header: {
    background: "#8888EE",
    padding: "1em",
    fontWeight: 700
  },
  root: {
    marginTop: "1em"
  },
  cardRoot: {
    minWidth: 275,
  },
  title: {
    fontSize: "1em",
    fontWeight: 700,
  },
  titleLink: {
    '&:hover': {
      color: "#909090",
      textDecoration: 'underline'
    },
  },
  pt: {
    fontSize: "0.8em"
  },
});

export default function Home() {
  const { data, error, loading } = useQuery(PostQuery);
  const classes = useStyles();

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <>
      <Typography component="h1" variant="h4" noWrap className={classes.header}>
        Hacker News
      </Typography>
      <Container className={classes.root}>
        <Grid container direction="row" justify="center" spacing={2}>
          {
            data.posts.map((post, idx) => {
              return (
                <Grid item key={idx} xs={12} sm={6} md={4}>
                  <Card className={classes.cardRoot} variant="outlined">
                    <CardContent>
                      <Typography className={classes.title} >
                        <a className={classes.titleLink} target="_blank" href={post.url} rel="noopener noreferrer">
                          {post.title}
                        </a>
                      </Typography>
                      <hr />
                      <Typography>
                        With {post.comments} comments
                      </Typography>
                      <Typography className={classes.pt} color="textSecondary">
                        {post.points} points by {post.author} {post.time}
                      </Typography>
                    </CardContent>
                  </Card >
                </Grid>
              )
            })
          }

        </Grid>
      </Container>
    </>
  )
}
