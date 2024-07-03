import { Menu } from "@ark-ui/react"

export default function Home() {
  return (
    <Menu.Root>
      <Menu.Trigger>
        Open menu <Menu.Indicator>➡️</Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="react" asChild>
            <AsyncComponent />
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

async function AsyncComponent() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return "react"
}
