// ID GENERATOR

export function createId(prefix: string = "node"): string {
    const random = Math.random().toString(36).substring(2, 9);
    return `${prefix}_${random}`;
  }
  