import React from 'react';
import "../.././css/main.css";
import "../.././css/noscript.css";
import logo from "./logo2.png"
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function About() {
    return (
        <div className="back">
            <div id="wrapper">

                <header id="header">
                    <div className="logo">
                        <img src={logo} className="logo" alt="logo"/>

                    </div>
                    <div className="content">
                        <div className="inner">
                            <h1>What2Eat</h1>
                            <p>Allowing people to achieve happiness via smart nutrition</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#intro">Intro</a></li>
                            <li><a href="#how">How</a></li>
                            <li><a href="#why">Why</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <div id="main">

                    <article id="intro">
                        <h2 className="major">Intro</h2>
                        <p>A wholesome diet is important to people all over the world as it enables them to
                        remain healthy and full of energy which is important as both health and energy
                        lead to a happy life. After looking at a <a href="https://link.springer.com/article/10.1007/s00127-012-0623-5">study </a> done by the Social Psychiatry and
                        Psychiatric Epidemiology that looked at one's diet quality and their mental health
                        What2Eat was made to help people determine what foods they should eat in order to
                        increase their energy and consequently happiness.</p>

                    </article>

                    <article id="how">
                        <h2 className="major">How</h2>
                        <p>What2Eat uses sentiment analysis which is a machine learning technique that detects the emotion conveyed in a
                        given text. So, by entering how your day went in a journal format emotion can be detected and certain foods can
                        be recommended to increase your feelings of happiness, given whatever emotion that was detected in the text you have imputed. </p>
                        <p>Since there is an evidential link between diet, mood, and behaviour What2Eat attempts to help people fix their
                        nutritional imbalances and in order to improve emotional well being. For example, a <a href="https://www.nature.com/articles/s41538-017-0008-y">study</a> found that consumption of fruits and
                        vegetables high in polyphenolics can prevent and even reverse age-related cognitive deficits by lowering oxidative stress and
                        inflammation.</p>
                    </article>

                    <article id="why">
                        <h2 className="major">Why</h2>
                        <p>The fundamental belief behind what2eat is that everyone deserves to have a happy and healthy life that is filled with energy.
                        And while nutrition is very much in your own control, sometimes it can be hard to figure out exactly what your body needs at a
                        given moment. While this web app will not be perfect and definitely can not replace a registered dietitian, it is meant to help
                        people figure out what foods will make them feel their happiest and healthiest. </p>
                    </article>

                    <article id="contact">
                        <h2 className="major">Contact</h2>
                        <form method="post" action="#">
                            <div className="fields">
                                <div className="field half">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="4"></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="primary"/></li>
                                <li><input type="reset" value="Reset"/></li>
                            </ul>
                        </form>
                        <ul className="icons">
                            <li></li>
                            <li><a href="https://twitter.com/ArezinaKristina" target="_blank"className="icon brands fa-twitter-f"><TwitterIcon/></a></li>
                            <li><a href="https://linkedin.com/in/kristina-arezina-7a0113197" target="_blank"className="icon brands fa-instagram"><LinkedInIcon/></a></li>
                            <li><a href="https://github.com/kristina-arezina" target="_blank" className="icon brands fa-github"><GitHubIcon/></a></li>
                        </ul>
                    </article>



                </div>

                <footer id="footer">
                    <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                </footer>

            </div>

        </div>
    );
}

export default About;
