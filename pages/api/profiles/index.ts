import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// Public Route
// GET /api/profiles | Route that returns all users.
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != 'GET') {
        res.status(405).send({
            message: `The HTTP ${req.method} method is not supported at this route.`,
        });
    }

    const users = await prisma.user.findMany();

    res.status(200).json(users);
}
