# AI Design Assistant

The **AI Design Assistant** is a web-based UI builder that converts natural-language prompts into structured layout schemas and renders them as real React components.  
It provides a live, editable canvas, an inspector panel for viewing component props, and an extensible schema system for building complex UIs without manually writing JSX.

---

## Features

### Natural Language → UI Layout
Describe any interface, such as:

> “Make a dashboard with a sidebar, navbar, and 3 stat cards with icons.”

The system will generate a structured JSON layout schema that represents the page hierarchy.

Visual Canvas Renderer
The generated layout is rendered live using a custom React component library:

- Text  
- Button  
- Card  
- Stack  
- Grid  
- Sidebar  
- Navbar  
- StatCard  
- Hero  
- Image  

This renderer is recursive and maps schema nodes → React components.

### Component Inspector
Click any component in the canvas to see:

- Node type  
- Node ID  
- Raw props  

(Editable prop controls will be added in a future milestone.)

### Zustand State Management
Global state stores:

- `rootNode`: the layout tree  
- `selectedNodeId`: the currently-selected component  
- Utility functions for updating nodes in the schema tree  

### Fully Typed Schema System
All layout nodes share a base interface:

```ts
interface LayoutNode {
  id: string;
  type: NodeType;
  props?: Record<string, any>;
  children?: LayoutNode[];
}
