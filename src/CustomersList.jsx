import React, { Component } from "react";

export default class CustomersList extends Component {
    state = {
        pageTitle: "Customers",
        customerCount: 5,
        customers: [
            {
                id: 1,
                name: "Scott",
                phone: "678-564",
                address: { city: "Nairobi" },
                photo: "https://picsum.photos/id/1010/60",
            },
            {
                id: 2,
                name: "Jones",
                phone: "648-564",
                address: { city: "Kisii" },
                photo: "https://picsum.photos/id/1011/60",
            },
            {
                id: 3,
                name: "Allen",
                phone: "978-564",
                address: { city: "Kisumu" },
                photo: "https://picsum.photos/id/1012/60",
            },
            {
                id: 4,
                name: "James",
                phone: null,
                address: { city: "Eldoret" },
                photo: "https://picsum.photos/id/1013/60",
            },
            {
                id: 5,
                name: "John",
                phone: null,
                address: { city: "New york" },
                photo: "https://picsum.photos/id/1014/60",
            },
        ],
    };

    onChangePictureClick = (cust) => {
        // Implement your logic for changing the picture here
    }

    render() {
        return (
            <div>
                <h4 className="m-1 p-1">{this.state.pageTitle}
                    <span className="badge badge-secondary m-2">{this.state.customerCount}</span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Customers Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody> {this.getCustomerRow()} </tbody>
                </table>
            </div>
        );
    }

    onRefreshClick = () => {
        this.setState({
            customerCount: 7
        });
    }

    getPhoneToRender = (phone) => {
        if (phone) {
            return phone;
        } else {
            return <div className="bg-warning p text-center">No Phone</div>;
        }
    }

    getCustomerRow = () => {
        return (
            this.state.customers.map((cust, index) => (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} alt="Customer" />
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={() => {
                                this.onChangePictureClick(cust, index);
                            }}>Change Picture</button>
                        </div>
                    </td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            ))
        );
    }
    onChangePictureClick = (cust, index) => {
        // console.log(cust);
        // console.log(index);

        var custArr = this.state.customers;
        custArr[index].photo = "https://picsum.photos/id/104/60";
        this.setState({ customers: custArr });

    };
}
