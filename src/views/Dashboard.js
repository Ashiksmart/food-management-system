function Dashboard() {
    return (
<>
                <main style={{"margin-left" : this.state.slidebar && 210+"px"}} className="mainContainer">
                   <div>
                   <button onClick={()=>{
                        this.setState({
                            "slidebar" : !this.state.slidebar
                        })
                    }}>Open</button>
                <h1>Learning React {this.state.slidebar.toString()}</h1>
                   </div>
                </main>
</>
    );
}

export default Dashboard;