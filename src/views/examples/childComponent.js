import React from "react";
class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({ showJobs: !this.state.showJobs });
    }

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists" />
                        {
                            arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} $
                                        <span onClick={() => this.handleOnClickDelete(item)}> x</span>
                                    </div>
                                )
                            })
                        }
                        <div onClick={() => this.handleShowHide()}><button >Hide</button></div>
                    </>}
            </>

        )
    }
}

export default ChildComponent