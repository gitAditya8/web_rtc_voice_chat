import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../Components/shared/Card/Card'
import Button from '../../Components/shared/Button/Button'

const Home = () => {
    const signInLinkStyle = {
        color: "#0077ff",
        fontweight: "bold",
        textDecoration: "none",
        marginLeft: "10px"
    };

    const history = useNavigate();
    // useHistory replaced by useNavigate in react6

    function startRegister() {
        history("/register");
    }

  return (
    <div className={styles.cardWrapper}>
        <Card title="Welcome to CodersDen!" icon="logo">
            <div className={styles.card}>
                <p className={styles.text}>
                    We're working hard to get CodersDen ready for everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks.
                </p>
                <div>
                    <Button onClick={startRegister} text="Get your username"/>
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite text?</span>
                    <Link style={signInLinkStyle} to="/login">Sign in</Link>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Home
