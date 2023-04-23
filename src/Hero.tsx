import {
  Flex,
  Group,
  Paper,
  RingProgress,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { CalendarTime, Plus, TargetArrow } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
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
  stat: {
    minWidth: rem(98),
    paddingTop: theme.spacing.xl,
    minHeight: rem(140),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.white,
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

export default function Hero() {
  const { classes } = useStyles();
  return (
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
  );
}
