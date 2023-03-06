import { Fragment } from 'react';
import mealsImage from'../../assests/meals.jpg';

import classes from'./Header.Module.css';

const Header =props=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h2>ReactMeals</h2>
                <button>Cart</button>
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food !'></img>
            </div>

        </Fragment>
    );
};

export default Header;