import React from "react"

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJobName = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        });
    }

    handleClickSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Please fill out the required fields')
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        // console.log('>>> check data input:', this.state)
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(e) => this.handleChangeTitleJobName(e)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(e) => this.handleChangeSalary(e)}
                />
                <br /><br />
                <input
                    type="submit"
                    onClick={(e) => this.handleClickSubmit(e)}
                />
            </form>
        )
    }
}

export default AddComponent