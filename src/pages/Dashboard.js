import React, { useState, useEffect } from 'react';
import { Table } from "antd";
import { useOktaAuth } from '@okta/okta-react';

const baseURL = process.env.REACT_APP_API_URL + '/tasks';

const columns = [
    {
        title: "Title",
        dataIndex: "title",
    },
    {
        title: "Description",
        dataIndex: "description",
    }
]

function Dashboard() {

    const [tasks, setTasks] = useState(null);
    const { authState, oktaAuth } = useOktaAuth();

    useEffect(() => {
        if (authState && authState.isAuthenticated) {
            const accessToken = oktaAuth.getAccessToken();
            fetch(`${baseURL}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setTasks(data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [authState, oktaAuth]);

    if (!tasks) return null;

    return (
        <Table dataSource={tasks} columns={columns} pagination={false} rowKey='id' />
    );
}

export default Dashboard;