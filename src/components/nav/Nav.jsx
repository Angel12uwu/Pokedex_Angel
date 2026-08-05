import NavLink from "./NavLinks";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'



const Nav = ({
    links
})=>{
    return (
        <nav className="nav-root">
          <ul className="nav-list">
            { (links ?? []).map((o)=> {
                return (<NavLink
                    key={o.text}
                    text={o.text}
                    to={o.to}
                    classNames={o.classNames ?? []} />);
            }) }
            <Show when="signed-out">
                <li>
                    <SignInButton>
                        <button className="nav-link">Sign In</button>
                    </SignInButton>
                    <SignUpButton>
                        <button className="nav-link">Sign Up</button>
                    </SignUpButton>
                </li>
            </Show>
            <Show when='signed-in'>
                <li>
                    <UserButton>
                        <button className="nav-link">User button</button>
                    </UserButton>
                </li>
            </Show>
          </ul>
        </nav>
    );
}

export default Nav;