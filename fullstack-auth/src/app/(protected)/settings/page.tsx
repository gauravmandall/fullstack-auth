"use client"

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";


const SettingsPage = () => {
    const user = useCurrentUser();

    const onClick = () => {
        logout();
    };

    return (
        <div className="bg-white p-10 rounded-xl">
            <button onClick={onClick} type="submit">
                Sign out
            </button>
        </div>
    );
}

export default SettingsPage;



// For server side rendering
/**
 * import { auth, signOut } from "@/auth";
 * 
 * 
 * const SettingsPage =  async () => {
 * const session = await auth();
 * 
 * 
 *     return ( 
 *         <div>
 *             {JSON.stringify(session)}
 *             <form action={async () => {
 *                 "use server";
 * 
 *                 await signOut();
 *             }}>
 *                 <button type="submit">
 *                     Sign out
 *                 </button>
 *             </form>
 *         </div>
 *      );
 * }
 * 
 * export default SettingsPage;
 */