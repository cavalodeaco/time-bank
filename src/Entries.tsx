import { Accordion, ActionIcon, Flex, Group, Table, Text } from "@mantine/core";
import { Trash } from "tabler-icons-react";

export default function Entries() {
  return (
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
  );
}
