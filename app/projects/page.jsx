import Link from "next/link";
import { projects } from "./projects";
import {
  Container,
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
const ProjectCard = ({ name, url, index }) => {
  return (
    // <div class="space-y-8 xl:row-span-2">
    //   <Link href={url}>
    //     <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 flex justify-center hover:bg-cyan-500">
    //       <blockquote class="text-gray-900">
    //         <p className="text-lg font-bold ">{name}</p>
    //       </blockquote>
    //     </figure>
    //   </Link>
    // </div>

    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          p: 1,
        }}
      >
        <Link href={url}>
          <CardContent>
            <Typography component="h4" variant="h6" color="text.primary">
              {name}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};

const Page = () => {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
      className={styles.container}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Projects
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              name={item.name}
              url={`/projects${item.url}`}
              index={index}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Page;
