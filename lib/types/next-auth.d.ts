// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Session } from 'next-auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt';

/** Example on how to extend the built-in session types */
declare module 'next-auth' {
    interface Session {
        /** This is an example. You can find me in types/next-auth.d.ts */
        foo: string;
    }
}

/** Example on how to extend the built-in types for JWT */
declare module 'next-auth/jwt' {
    interface JWT {
        /** This is an example. You can find me in types/next-auth.d.ts */
        bar: number;
    }
}
