import React, { Component } from 'react';
import cx from 'classnames';
// import wbSunnyIcon from '@material-ui/icons-material/wbSunny';
// import DarkModeIcon from '@material-ui/icons-material/DarkMode';
import { WbSunny } from '@material-ui/icons';
import { NightsStayRounded } from '@material-ui/icons';
import { UserContext, ThemeContext } from '../../context';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;

class Header extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                ([theme, setTheme]) => {
                    const classNames = cx(styles.container, {
                        [styles.light] : theme === THEMES.LIGHT,
                        [styles.dark] : theme === THEMES.DARK,
                    });
                    return (<UserContext.Consumer>
                    {
                    (user) => (<header className={styles.container}>
                        <p>{user.firstName} {user.lastName}</p>
                        <div  onClick={() => {
                            const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                            setTheme(nextTheme);
                        }}>
                            {theme === THEMES.LIGHT ? <WbSunny /> : <NightsStayRounded />}
                        </div>
                    </header>)
                    }
                </UserContext.Consumer>)}
                }
            </ThemeContext.Consumer>
        );
    }
}

export default Header;
