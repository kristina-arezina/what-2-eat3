import React from 'react';
import "../.././css/main.css";
import "../.././css/noscript.css";
import logo from "./logo2.png"

function About() {
    return (
        <div>
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
                        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue.
                            Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus
                            nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#how">awesome
                                work</a>.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. className aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu
                            nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies
                            condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris,
                            fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam
                            maximus risus, vel sed vehicula.</p>
                    </article>

                    <article id="how">
                        <h2 className="major">How</h2>
                        <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
                            Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
                            mauris nec lorem luctus ultrices.</p>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed
                            nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa
                            vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                            sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
                    </article>

                    <article id="why">
                        <h2 className="major">Why</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend
                            sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
                            Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum
                            primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
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
                            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
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
