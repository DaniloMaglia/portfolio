import NavBarElement from "./navbar_element"
import styles from "./page.module.css"

export default function NavBar () {
    return (
        <div className={styles.navbar}>
            <NavBarElement contentName="About Me" contentLink=""></NavBarElement>
            <NavBarElement contentName="Projects" contentLink=""></NavBarElement>
            <NavBarElement contentName="Contact Me" contentLink=""></NavBarElement>
        </div>
    )
}