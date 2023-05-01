import {
  AppShell,
  Center,
  Container,
  Header,
  MantineProvider,
  Title,
  createStyles,
} from "@mantine/core";
import { useListState } from "@mantine/hooks";
// icons from https://tabler-icons-react.vercel.app/
import { BuildingBank } from "tabler-icons-react";
import { useThemeDetector } from "./utils/useThemeDetector";
import Hero from "./Hero";
import ReportByDay from "./ReportByDay";
import { DateTime, Duration, Interval } from "luxon";

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
  const dailyGoal = Duration.fromISOTime('08:30:00.000');
  const [intervals, intervalsHandlers] = useListState<Interval>([
    Interval.fromDateTimes(
      DateTime.fromISO("2023-05-01T10:00:00"),
      DateTime.fromISO("2023-05-01T15:45:00")
    ),
    Interval.fromDateTimes(
      DateTime.fromISO("2023-04-07T08:00:00"),
      DateTime.fromISO("2023-04-07T09:30:00")
    ),
    Interval.fromDateTimes(
      DateTime.fromISO("2023-04-07T11:30:00"),
      DateTime.fromISO("2023-04-07T14:00:00")
    ),
    Interval.fromDateTimes(
      DateTime.fromISO("2023-04-07T15:00:00"),
      DateTime.fromISO("2023-04-07T19:45:00")
    ),
  ]);
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
          <Hero intervals={intervals} dailyGoal={dailyGoal}/>
          <ReportByDay intervals={intervals} />
        </Container>
      </AppShell>
    </MantineProvider>
  );
}
