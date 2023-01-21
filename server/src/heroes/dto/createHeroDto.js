'use strict';
const { z } = require('zod');

const CreateHeroDtoSchema = z.object({
    body: z.object({
        nickName: z
            .string({
                required_error: 'nickName is required',
                invalid_type_error: 'nickName must be a string',
            })
            .trim()
            .regex(/^([a-zA-Z\d _-]+)$/, 'Enter a valid nickName')
            .min(3, 'nickName cannot be less than 3 characters')
            .max(255, 'nickName cannot be more than 255 characters'),
        realName: z
            .string({
                required_error: 'realName is required',
                invalid_type_error: 'realName must be a string',
            })
            .trim()
            .regex(/^([a-zA-Z\d _-]+)$/, 'Enter a valid realName')
            .min(3, 'realName cannot be less than 3 characters')
            .max(255, 'realName cannot be more than 255 characters'),
        originDescription: z
            .string({
                required_error: 'originDescription is required',
                invalid_type_error: 'originDescription must be a string',
            })
            .trim()
            .min(3, 'originDescription cannot be less than 3 characters')
            .max(2000, 'originDescription cannot be more than 2000 characters'),
        catchPhrase: z
            .string({
                required_error: 'catchPhrase is required',
                invalid_type_error: 'catchPhrase must be a string',
            })
            .trim()
            .min(3, 'catchPhrase cannot be less than 3 characters')
            .max(500, 'catchPhrase cannot be more than 500 characters'),
        superpowers: z.array(z.string().trim().min(3).max(300)).optional(),
    }),
});

module.exports = { CreateHeroDtoSchema };
