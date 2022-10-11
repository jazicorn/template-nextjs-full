import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// GET api/profiles/[user]
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // accept GET request only
    if (req.method != 'GET') {
        res.status(405).send({
            message: `The HTTP ${req.method} method is not supported at this route.`,
        });
    }

    // select id from request
    const { user } = req.query;

    const profileUser = user.toString();
    console.log(profileUser);

    // select user profile
    const getProfile = await prisma.profile.findUnique({
        where: {
            userName: profileUser,
        },
    });
    // return user profile
    res.status(200).json(getProfile);
    console.log(getProfile);
}
