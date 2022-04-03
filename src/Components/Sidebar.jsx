import React, { Component } from 'react' 

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="#navbar" ><i /> </nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="author-img" style={{backgroundImage: 'url(images/lino.jpeg)' }}>
                        
                        </div>
                        <h1 id="colorlib-logo"><a href="index.html">Lion Lionova</a></h1>
                        <span className="email"><i className="icon-mail"></i>lion.lionich@gmail.com</span>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                        <ul>
                            <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                            <li><a href="#about" data-nav-section="about">About</a></li>
                            <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                            <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                            <li><a href="#Timeline" data-nav-section="timeline">Timeline</a></li>
                        </ul>
                        </div>
                        </nav>

                        <nav id="colorlib-main-menu">
                        <ul>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <i className="icon-facebook2" /></a></li>
                            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer "><i className="icon-twitter2" /></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><i className="icon-instagram" /></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank" rel="nooopener noreferrer"><i className="icon-linkedin2" /></a></li>
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></li>
                            <li><a href="https://www.medium.com/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2" /></a></li>
                        </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"/> <br></br>
                                Thanks <a href="#" target="_blank" rel="noopener noreferrer" >Web Developer</a> for inspiration
                            </small>
                            </p>
                            <p><small>
                                Something coming soon !!
                            </small>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}