import {
  AppShell,
  Center,
  Container,
  Header,
  MantineProvider,
  Title,
  createStyles,
} from "@mantine/core";
// icons from https://tabler-icons-react.vercel.app/
import { BuildingBank } from "tabler-icons-react";
import { useThemeDetector } from "./utils/useThemeDetector";
import Hero from "./Hero";
import Entries from "./Entries";

const useStyles = createStyles((theme) => ({
  listItem: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "'Cinzel', serif",
  },
}));

export default function App() {
  document.title = "Time Bank";
  const isDarkTheme = useThemeDetector();
  const { classes } = useStyles();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: isDarkTheme ? "dark" : "light",
      }}
    >
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={
          <Header height={60} p="xs">
            <Title order={3} className={classes.title}>
              <Center>
                <BuildingBank size={"1em"} strokeWidth={1} />{" "}
                <div>Time Bank</div>
              </Center>
            </Title>
          </Header>
        }
      >
        <Container p={0}>
          <Hero/>
          <Entries/>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}
