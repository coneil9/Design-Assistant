import { z } from "zod";
import { NodeType } from "./nodeTypes";

const propsSchema = z.record(z.any()).optional();

// Recursive node schema
const layoutNodeSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.string(),
    type: z.custom<NodeType>((val) => typeof val === "string", {
      message: "Invalid node type",
    }),
    props: propsSchema,
    children: z.array(layoutNodeSchema).optional(),
  })
);

// Root layout schema: usually a single page node or similar
export const layoutSchema = layoutNodeSchema;

export type LayoutNodeFromSchema = z.infer<typeof layoutSchema>;
