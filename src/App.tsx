import {
  Accordion,
  ActionIcon,
  AppShell,
  Center,
  Container,
  Flex,
  Group,
  Header,
  List,
  MantineProvider,
  Paper,
  RingProgress,
  Table,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
// icons from https://tabler-icons-react.vercel.app/
import {
  CalendarTime,
  TargetArrow,
  Plus,
  BuildingBank,
  Clock,
  Trash,
} from "tabler-icons-react";
import { useThemeDetector } from "./utils/useThemeDetector";

const useStyles = createStyles((theme) => ({
  listItem: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "'Cinzel', serif",
  },
  root: {
    backgroundImage: `linear-gradient(60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    borderRadius: theme.radius.md,
    display: "flex",
    justifyContent: "center",
  },

  calendar: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    color: theme.colors[theme.primaryColor][6],
  },

  stat: {
    minWidth: rem(98),
    paddingTop: theme.spacing.xl,
    minHeight: rem(140),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.white,
  },

  label: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  balance: {
    color: theme.colors.red[6],
  },

  goal: {
    color: theme.colors[theme.primaryColor][6],
  },

  value: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
  },

  count: {
    color: theme.colors.gray[6],
  },

  addNewPlus: {
    fontSize: rem(44),
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  addNewText: {
    fontSize: theme.fontSizes.sm,

    lineHeight: 1,
    textAlign: "center",
  },

  addNew: {
    minWidth: rem(98),
    paddingTop: theme.spacing.xl,
    minHeight: rem(140),
    border: "1px solid white",
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.white,
    "&:hover": {
      backgroundColor: theme.white,
      color: theme.colors[theme.primaryColor][6],
    },
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
          <Group className={classes.root}>
            <Group sx={{ justifyContent: "center" }}>
              <Paper
                className={classes.stat}
                radius="md"
                shadow="md"
                p="xs"
                key="Balance"
              >
                <div className={classes.calendar}>
                  <CalendarTime
                    size={32}
                    className={classes.icon}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <Text className={classes.label}>Balance</Text>
                  <Text fz="xs" className={classes.balance}>
                    <span className={classes.value}>-1:43</span>
                  </Text>
                </div>
              </Paper>
              <Paper
                className={classes.stat}
                radius="md"
                shadow="md"
                p="xs"
                key="Goal"
              >
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={[{ value: 66, color: "blue" }]}
                  label={
                    <Flex justify={"center"} align={"center"}>
                      <TargetArrow
                        size={32}
                        className={classes.icon}
                        strokeWidth={1.5}
                      />
                    </Flex>
                  }
                />
                <div>
                  <Text className={classes.label}>Goal</Text>
                  <Text fz="xs" className={classes.goal}>
                    <span className={classes.value}>9:43</span>
                  </Text>
                </div>
              </Paper>
            </Group>
            <div className={classes.addNew}>
              <Text className={classes.addNewPlus}>
                <Plus size={48} strokeWidth={2} />
              </Text>
              <Text className={classes.addNewText}>New entry</Text>
            </div>
          </Group>
          <Accordion variant="separated">
            <Accordion.Item value="2023 Apr 22">
              <Accordion.Control>
                <Group position="apart" grow>
                  <Flex gap={"0.5rem"} align={"center"}>
                    <Text fz="2rem" fw={700}>
                      22
                    </Text>
                    <Flex direction={"column"}>
                      <Text fz="xs" fw={200}>
                        Apr
                      </Text>
                      <Text fz="xs" fw={200}>
                        2023
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fz="xl" fw={700} c="red.6">
                    5:45
                  </Text>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Table verticalSpacing="xs" fontSize="xs">
                  <tbody>
                    <tr>
                      <td>05:45</td>
                      <td>
                        <Text fz={"xs"} c={"dimmed"}></Text>
                      </td>
                      <td>
                        <ActionIcon
                          color="red"
                          size="xs"
                          radius="xl"
                          variant="outline"
                        >
                          <Trash size="0.75rem" />
                        </ActionIcon>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="2023 Apr 07">
              <Accordion.Control>
                <Group position="apart" grow>
                  <Flex gap={"0.5rem"} align={"center"}>
                    <Text fz="2rem" fw={700}>
                      07
                    </Text>
                    <Flex direction={"column"}>
                      <Text fz="xs" fw={200}>
                        Apr
                      </Text>
                      <Text fz="xs" fw={200}>
                        2023
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fz="xl" fw={700} c="teal.6">
                    8:45
                  </Text>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Table verticalSpacing="xs" fontSize="xs">
                  <tbody>
                    <tr>
                      <td>01:30</td>
                      <td>
                        <Text fz={"xs"} c={"dimmed"}>
                          (08:00 - 09:30)
                        </Text>
                      </td>
                      <td>
                        <ActionIcon
                          color="red"
                          size="xs"
                          radius="xl"
                          variant="outline"
                        >
                          <Trash size="0.75rem" />
                        </ActionIcon>
                      </td>
                    </tr>
                    <tr>
                      <td>02:30</td>
                      <td>
                        <Text fz={"xs"} c={"dimmed"}>
                          (11:30 - 14:00)
                        </Text>
                      </td>
                      <td>
                        <ActionIcon
                          color="red"
                          size="xs"
                          radius="xl"
                          variant="outline"
                        >
                          <Trash size="0.75rem" />
                        </ActionIcon>
                      </td>
                    </tr>
                    <tr>
                      <td>04:45</td>
                      <td>
                        <Text fz={"xs"} c={"dimmed"}></Text>
                      </td>
                      <td>
                        <ActionIcon
                          color="red"
                          size="xs"
                          radius="xl"
                          variant="outline"
                        >
                          <Trash size="0.75rem" />
                        </ActionIcon>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}
