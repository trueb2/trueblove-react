import React, { Component } from 'react';
import home_pic from './home_pic.png'
import small_and_pic from './small_and.png';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
        let body = event.srcElement.body;
        let tabs = body.children[1].children[0].children[1].children[0];
        let tab_panel = body.children[1].children[0].children[1].children[this.state.tabIndex + 1];
        let tab_rect = tabs.getBoundingClientRect();
        let body_rect = body.getBoundingClientRect();
        console.log(body_rect.y, tab_rect.y);
        if(tab_rect.y < 1 && body_rect.y < -150) {
            tabs.className = 'sticky-tabs';
            tab_panel.className = 'sticky-selected-panel';
        } else {
            tabs.className = 'react-tabs__tab-list';
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
              <header className="App-other-header">
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
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="App-intro">Welcome to the RSVP</p>
                    </div>

                    <div>
                        <img src={home_pic} className="App-main-pic" alt="logo"/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="App-intro">Welcome to the Wedding Party</p>
                    </div>

                    <div>
                        <img src={home_pic} className="App-main-pic" alt="logo"/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="App-intro">Welcome to the Events</p>
                    </div>

                    <div>
                        <img src={home_pic} className="App-main-pic" alt="logo"/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="App-intro">Welcome to the Photos</p>
                    </div>

                    <div>
                        <img src={home_pic} className="App-main-pic" alt="logo"/>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <p className="App-intro">Welcome to the Accomodations</p>
                    </div>

                    <div>
                        <img src={home_pic} className="App-main-pic" alt="logo"/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="App-intro">Welcome to the Gift Registry</p>
                    </div>

                    <div>
                        <img src={home_pic} className="App-main-pic" alt="logo"/>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
    }
}

export default App;
