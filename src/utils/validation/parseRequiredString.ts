import { z } from "zod";

export const parseRequiredString = z.string().min(1).parse;
