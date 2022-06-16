import React from 'react'
import "./Footer.scss"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Footer = () => {
  return (
    <div className='Footer-container'>
        <div className="left">
            <div className="title">
                <h3>
                    KARA.O
                </h3>
                <p className="desc">
                    There are many variations of passages of Lorem Ipsum available, but
                     majority have suffered alteration in some form, by injected
                     humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className="Icon-Box">
                    <div className="icon-footer">
                        <FacebookRoundedIcon />
                    </div>
                    <div className="icon-footer">
                        <InstagramIcon />
                    </div>
                    <div className="icon-footer">
                        <TwitterIcon />
                    </div>
                    <div className="icon-footer">
                        <GitHubIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className="center">
            <h3>
                LINKS
            </h3>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Women fashion
                </li>
                <li>
                    Men fashion
                </li>
                <li>
                    Cart
                </li>
                <li>
                    Accesories
                </li>
                <li>
                    My Account
                </li>
                <li>
                   Order Tracking 
                </li>
                <li>
                   Wish List
                </li>
            </ul>
        </div>
        <div className="right">
            <h3>
                CONTACT
            </h3>
            <div className="Contact-Box">
                <div className="Contact-Icon">
                    622 Dixie Path , South Tobinchester 98336
                </div>
                <div className="Contact-Icon">
                    +1 234 56 78
                </div>
                <div className="Contact-Icon">
                    contact@lama.dev
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}
