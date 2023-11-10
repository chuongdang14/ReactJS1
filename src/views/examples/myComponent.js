import React from 'react';
import ChildComponent from './childComponent'
import AddComponent from './addComponent';
class Mycomponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'job1', title: 'Developers', 'salary': '500' },
            { id: 'job2', title: 'Testers', 'salary': '400' },
            { id: 'job3', title: 'Project manager', 'salary': '1000' },
        ],
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>

        )
    }
}

export default Mycomponent