import type { LayoutNode } from "../schema";
import {
  createPageNode,
  createStackNode,
  createGridNode,
  createTextNode,
  createCardNode,
  createButtonNode,
} from "./nodeFactory";

export function createDashboardPreset(): LayoutNode {
  const statCards = createGridNode(
    [
      createCardNode([
        createTextNode("Revenue"),
        createTextNode("$24k"),
      ]),
      createCardNode([
        createTextNode("Users"),
        createTextNode("1.2k"),
      ]),
      createCardNode([
        createTextNode("Churn"),
        createTextNode("2.4%"),
      ]),
    ],
    { columns: 3 }
  );

  const mainContent = createStackNode(
    [
      createTextNode("Dashboard"),
      statCards,
      createButtonNode("View Reports"),
    ],
    { direction: "vertical" }
  );
a
  return createPageNode([mainContent]);
}
