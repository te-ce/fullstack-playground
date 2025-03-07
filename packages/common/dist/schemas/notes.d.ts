import { z } from 'zod';
export declare const noteSchema: z.ZodObject<{
    author: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    author: string;
    title: string;
    description: string;
    id: number;
}, {
    author: string;
    title: string;
    description: string;
    id: number;
}>;
export declare const notesSchema: z.ZodArray<z.ZodObject<{
    author: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    author: string;
    title: string;
    description: string;
    id: number;
}, {
    author: string;
    title: string;
    description: string;
    id: number;
}>, "many">;
export type Note = z.infer<typeof noteSchema>;
//# sourceMappingURL=notes.d.ts.map