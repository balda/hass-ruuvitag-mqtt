'use strict'

const targets = [
    {
        type: `mqtt`,
        label: `MQTT`,
        measurement: true,
        config: [
            // {
            //     name: `protocol`,
            // },
            {
                name: `host`,
            },
            {
                name: `port`,
                type: `number`,
            },
            {
                name: `topic`,
            },
            {
                name: `username`,
            },
            {
                name: `password`,
                type: `password`,
            },
        ],
    },
    {
        type: `graphite`,
        label: `Graphite`,
        config: [
            {
                name: `host`,
            },
            {
                name: `port`,
                type: `number`,
            },
            {
                name: `prefix`,
            },
        ],
    },
    {
        type: `influxdb`,
        label: `InfluxDB`,
        measurement: true,
        config: [
            // {
            //     name: `protocol`,
            // },
            {
                name: `host`,
            },
            {
                name: `port`,
                type: `number`,
            },
            {
                name: `database`,
            },
            {
                name: `username`,
            },
            {
                name: `password`,
                type: `password`,
            },
        ],
    },
    {
        type: `ha_mqtt`,
        label: `Home Assistant (MQTT)`,
        config: [
            // {
            //     name: `protocol`,
            // },
            {
                name: `host`,
            },
            {
                name: `port`,
                type: `number`,
            },
            {
                name: `topic`,
            },
            {
                name: `username`,
            },
            {
                name: `password`,
                type: `password`,
            },
            // {
            //     name: `expire_after`,
            // },
        ],
    },
    {
        type: `ha`,
        label: `Home Assistant (API)`,
        config: [
        ],
    },
    // {
    //     type: `webhook`,
    //     label: `Webhook`,
    //     config: [
    //         {
    //             name: `url`,
    //         },
    //         {
    //             name: `headers`,
    //             type: `json`,
    //         },
    //     ],
    // },
]

module.exports = targets
