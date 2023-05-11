import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){

    function loginGoogle(){
        console.log("Login com Google");
    }

    return(
        <div>
            <MenuItem 
                onClick={loginGoogle}
                className="bg-gradient-to-r from-indigo-600 to-cyan-600">
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    )
}