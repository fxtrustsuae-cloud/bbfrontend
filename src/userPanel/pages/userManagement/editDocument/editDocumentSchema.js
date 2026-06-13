import * as z from 'zod';

const emptyToUndefined = (schema) =>
    z.preprocess((val) => (val === "" || val === null ? undefined : val), schema.optional());

export const editDocumentSchema = z.object({
    poi: z.string().min(1, "Please select POI"),
    poa: z.string().min(1, "Please select POA"),
    status: z.string().min(1, "Please select status"),
    remark: emptyToUndefined(z.string().min(1, "Please add remark").max(500, "Remark should not exceed 500 words"))
});