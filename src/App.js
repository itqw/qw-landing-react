import React from 'react';
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            motd: this.getMotd()
        }
    }
    
    getMotd() {
        const motd_list = ["Готовим чай", "Гладим котиков", "Кормим котиков", "Пьём чай"]
        return(motd_list[Math.floor(Math.random() * motd_list.length)])
    }

    componentDidMount() {
        setTimeout(() => {document.querySelector(".motd-text div").innerHTML = "."}, 1000)
        setTimeout(() => {document.querySelector(".motd-text div").innerHTML = ".."}, 2000)
        setTimeout(() => {document.querySelector(".motd-text div").innerHTML = "..."}, 3000)
        setTimeout(() => {document.querySelector(".motd-text div").innerHTML = ".."}, 4000)
        setTimeout(() => {document.querySelector(".motd-text div").innerHTML = "."}, 5000)
        setTimeout(() => {
            // document.querySelector(".loader").style.opacity = 0;
            document.querySelector(".motd").style.opacity = 0;
            document.querySelector(".motd-text div").innerHTML = ""
        }, 6000);
        setTimeout(() => {
            this.setState({loader: false});
            document.querySelector(".content").style.opacity = 1;
            document.querySelector(".links").style.opacity = 1;
        }, 8000);
    }

    render() {
        return(
            <div className={"wrapper"}>
                <div className={"center"}>
                    {this.state.loader && <div className={"motd"}>
                        <Loader
                            className={"loader"}
                            type="Grid"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                        <div className={"motd-text"} style={{color: "white", fontSize: "x-large"}}>
                            {this.getMotd()}<div style={{display: "inline"}}> </div>
                        </div>
                    </div>}
                    <div className={"content"}>
                        <div className={"title"}>
                            QuietW
                        </div>
                        <div className={"subtitle"}>
                            {this.getSubtitle()}
                        </div>
                    </div>
                </div>
                <div className="links"><a href="https://github.com/iamquietw">
                    <div>GitHub</div>
                </a> | <a href="https://vk.com/yumi_team">
                    <div>Yumi</div>
                </a> | <a href="https://vk.com/senkomc">
                    <div>SenkoMC</div>
                </a> | <a href="https://vk.com/neurodev">
                    <div>Neuro</div>
                </a> | <a href="https://vk.com/iamquietw">
                    <div>VK</div>
                </a></div>
            </div>
        )
    }

    getSubtitle() {
        const subtitles = ["/* Fullstack developer */", "# Fullstack developer", "// Fullstack developer"];
        return(subtitles[Math.floor(Math.random() * subtitles.length)])
    }
}

export default App;