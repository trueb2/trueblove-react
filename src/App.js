import React, {Component} from 'react';
import home_pic from './home_pic.png'
import small_and_pic from './small_and.png';
import './App.css';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {home: true, tabIndex: 0};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let body = (event.target || event.srcElement).body;
        let tabs = body.children[1].children[0].children[1].children[0];
        let tab_panel = body.children[1].children[0].children[1].children[this.state.tabIndex + 1];
        let tab_rect = tabs.getBoundingClientRect();
        let body_rect = body.getBoundingClientRect();
        console.log(body_rect.y, tab_rect.y);
        if(tab_rect.y < 1 && body_rect.y < -150) {
            tabs.className = 'sticky-tabs';
            tab_panel.className = 'sticky-selected-panel';
        } else {
            tabs.className = 'react-tabs__tab--list';
            tab_panel.className = 'react-tabs__tab-panel--selected';
        }
    }

    onSelectTab(index, lastIndex, event) {
        console.log(index);
        if(index === 0 && lastIndex !== 0) {
            this.setState({tabIndex: index, home: true});
        } else if(lastIndex === 0 && index !== 0) {
            this.setState({tabIndex: index, home: false});
        } else {
            this.setState({tabIndex: index});
        }
        return true;
    }

    render() {
    return (
        <div className="App">
            {
              this.state.home ?
              <header className="App-home-header">

                  <div className="couple-names">
                      <h1 className="couple-name-home">Allie</h1>
                      <div className="couple-and">and</div>
                      <h1 className="couple-name-home">Jacob</h1>
                  </div>
              </header>
              :
              <header style={{animation: 'fadein 1s'}} className="App-other-header">
                  <div className="couple-names names-flex-row">
                      <div style={{order: 1}} className="hor-couple">
                        <h1 className="couple-name-other">Allie</h1>
                      </div>
                      <div style={{order: 2}} className="and-pic-div">
                        <img src={small_and_pic} className="and-pic" alt="and"/>
                      </div>
                      <div style={{order: 3}} className="hor-couple">
                        <h1 className="couple-name-other">Jacob</h1>
                      </div>
                  </div>
              </header>
            }
            <Tabs
                selectedIndex={this.state.tabIndex}
                onSelect={this.onSelectTab.bind(this)}>
                <TabList>
                    <Tab> Home </Tab>
                    <Tab> RSVP </Tab>
                    <Tab> Wedding Party </Tab>
                    <Tab> Events </Tab>
                    <Tab> Photos</Tab>
                    <Tab> Accommodations </Tab>
                    <Tab> Gift Registry </Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <img src={home_pic} className="App-main-pic" alt="logo"/>
                        <h3 className="announcement">Please join us for our wedding celebration on</h3>
                        <time className="wedding-date" dateTime="08-04-2018">
                            August 4th, 2018
                        </time>
                        <div className='story-container'>
                            <h2 className='story'>Our Story</h2>
                            <p>
                                <span className='story'>Allie and Jacob met in middle school.</span>
                            </p>
                            <p>
                                <span className='story'>They have been together ever since 2010.</span>
                            </p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <hr/>
                    <div className='panelContent'>
                        <div className='underlinedTabHeader'>
                            <h2 className='story' style={{marginBottom: 30}}>You're Invited</h2>
                            <div className='underlined'>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </TabPanel>
                <TabPanel>
                    <hr/>
                    <div className='panelContent'>
                        <div className='underlinedTabHeader'>
                            <h2 className='story' style={{marginBottom: 30}}>Wedding Party</h2>
                            <div className='underlined'>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </TabPanel>
                <TabPanel>
                    <hr/>
                    <div className='panelContent'>
                        <div className='underlinedTabHeader'>
                            <h2 className='story' style={{marginBottom: 30}}>Events</h2>
                            <div className='underlined'>
                                <hr/>
                            </div>
                        </div>

                        <div className="events-container">
                            <div className="events-row">
                                <div className="events-block">
                                    <div style={{animation: 'fadeInLeft 2s'}} className="event-description">
                                        <div className="event-marker">1</div>
                                        <div className="event-name">Wedding Ceremony</div>
                                        <p className="event-address">
                                            3:00 PM on August 4th, 2018
                                        </p>
                                        <p className="event-address">
                                            First Presbyterian Church of Edwardsville
                                        </p>
                                        <p className="event-address">
                                            3577 Ridgeview Road
                                            <br/>
                                            Edwardsville, IL 62025
                                        </p>
                                        <a className="event-map-link" href="https://www.google.com/maps/place/3577+Ridge+View+Rd,+Edwardsville,+IL+62025/" >
                                            Get Directions
                                        </a>
                                    </div>
                                    <div style={{animation: 'fadeInRight 2s'}} className="event-description">
                                        <div className="event-marker">2</div>
                                        <div className="event-name">Wedding Reception</div>
                                        <p className="event-address">
                                            5:30 PM on August 4th, 2018
                                        </p>
                                        <p className="event-address">
                                            Leclaire Room
                                        </p>
                                        <p className="event-address">
                                            600 Troy Rd #109
                                            <br/>
                                            Edwardsville, IL 62025
                                        </p>
                                        <a className="event-map-link" href="https://www.google.com/maps/place/Leclaire+Room/@38.8061318,-89.9520998,17z/" >
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                                {/*<div className="events-block">*/}
                                    {/*<div className="events-map">*/}
                                        {/*Google Map*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <hr/>
                </TabPanel>
                <TabPanel>
                    <hr/>
                    <div className='panelContent'>
                        <div className='underlinedTabHeader'>
                            <h2 className='story' style={{marginBottom: 30}}>Photos</h2>
                            <div className='underlined'>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </TabPanel>

                <TabPanel>
                    <hr/>
                    <div className='panelContent'>
                        <div className='underlinedTabHeader'>
                            <h2 className='story' style={{marginBottom: 30}}>Accommodations</h2>
                            <div className='underlined'>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </TabPanel>
                <TabPanel>
                    <hr/>
                    <div className='panelContent'>
                        <div className='underlinedTabHeader'>
                            <h2 className='story' style={{marginBottom: 30}}>Registry Locations</h2>
                            <div className='underlined'>
                                <hr/>
                            </div>
                        </div>

                        <div className='registry-container'>
                            <div style={{animation: 'fadeInLeft 2s'}} className='registry-location'>
                                <div className='location-name'>
                                    Bed, Bath & Beyond
                                </div>
                                <div className='location-description'>
                                    <p className='location-description-text'>
                                        This registry is larger than the Kohl's registry. A virtual copy is available at
                                        the link below, and a physical copy can be printed in store.
                                    </p>
                                    <p className='location-description-text'>
                                        We are registered under Allie Sweatt or Jacob Trueb.
                                        The name of registry is <i>Allie Sweatt & Jacob Trueb's</i> and
                                        the registry number is <i>545283690</i>.
                                    </p>
                                </div>
                                <a className='registry-link' href='https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=545283690&pwsurl='>View Registry</a>
                            </div>

                            <div className='underlined'>
                                <hr/>
                            </div>

                            <div style={{animation: 'fadeInRight 2s'}} className='registry-location'>
                                <div className='location-name'>
                                    Kohl's
                                </div>
                                <div className='location-description'>
                                    <p className='location-description-text'>
                                        There are plenty of important items on the Kohl's registry as well. Good luck
                                        accessing the registry on their website. Hopefully, there is location near you.
                                    </p>
                                    <p className='location-description-text'>
                                        We are registered under Allie Sweatt, and the name of registry is
                                        <i> Allie & Jacob's Wedding Registry</i>. The registry number is <i>R3386573</i>.
                                    </p>
                                </div>
                                <a className='registry-link' href='https://google.com'>View Registry</a>
                            </div>


                        </div>
                    </div>
                    <hr/>
                </TabPanel>
            </Tabs>
        </div>
    );
    }
}

export default App;
