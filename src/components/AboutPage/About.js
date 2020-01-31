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
                        <p>A wholesome diet is essential to people all over the world as it enables them to
                        remain healthy and full of energy, both of which are important as they lead to a happy
                        life. <br/><br/>
                         <strong>What2Eat</strong> was made after looking at a <a href="https://link.springer.com/article/10.1007/s00127-012-0623-5" target="_blank">study </a>
                         done by The International Journal for Research in Social and Genetic Epidemiology and Mental Health Services.
                         Inspiration was drawn from this research as from it one could see that one's diet quality impacted their mental health.
                         However, as many people can attest to, it is often challenging to find what foods one should eat to increase their energy and consequently happiness.
                         So, to help people determine what foods to eat <strong>What2Eat</strong> was made. </p>

                    </article>

                    <article id="how">
                        <h2 className="major">How</h2>
                        <p><strong>What2Eat</strong> uses <i>sentiment analysis</i> which is a machine learning technique that detects the emotion conveyed in a
                        given text. So, by entering how your day went in a journal like format emotion can be detected and specific foods can
                        be recommended to increase your feelings of happiness. </p>
                        <p>Since there is an evident link between diet, mood, and behavior <strong>What2Eat</strong> attempts to help people fix their nutritional imbalances
                        and to improve emotional well being. For example, a <a href="https://www.nature.com/articles/s41538-017-0008-y" target="_blank">study</a> found that
                        consumption of fruits and
                        vegetables high in <a href ="https://www.medicalnewstoday.com/articles/319728.php#list-of-foods-that-are-high-in-polyphenols" target="_blank">polyphenolics</a> can prevent and even reverse age-related cognitive deficits by lowering oxidative stress and
                        inflammation.</p>
                    </article>

                    <article id="why">
                        <h2 className="major">Why</h2>
                        <p>The fundamental belief behind <strong>What2Eat</strong> is that everyone deserves to live a happy and healthy life, filled with energy. And while nutrition is
                        very much in your own control, sometimes it can be hard to figure out exactly what your body needs at a given moment. While this web app is not perfect
                        and definitely can not replace a registered dietitian or other medical professionals, it is meant to help people figure out what foods will make them feel 
                        their happiest and healthiest.</p>
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
