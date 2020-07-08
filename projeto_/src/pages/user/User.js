import React, { Component } from 'react';
import UserForm from './UserForm';


class User extends Component {

    render() {

        let list = [
            {
                name: "Lucas",
                email: "lucasts@gmail.com"
            },
            {
                name: "João",
                email: "johnny@gmail.com"
            }
        ]


        return (
            <div>
                <UserForm></UserForm>
                <table border="2">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}


export default User;
