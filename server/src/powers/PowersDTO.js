'use strict';
const { z } = require('zod');

const PowersDtoSchema = z.object({
    body: z.object({
        superpowers: z.array(z.string().trim().min(3).max(300)),
    }),
});

module.exports = { PowersDtoSchema };
