//ES6  方式引入
// import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { client } from './api';

// export const mock = new MockAdapter(client, { delayResponse: 2000 });
export const mock = new MockAdapter(client);

export const useMock = () => {
    
    // mock返回get请求
    mock.onGet("api/users").reply(200, {
        "code": 0,
        "message": "Success",
        "result": {}
    });
    // mock返回gpost请求
    mock.onPost("api/users").reply(config => {
        console.log(`[MOCK] ${config.url} 收到数据:`, JSON.parse(config.data))
        return [
            200,
            {
                "code": 0,
                "message": "Success",
                "result": null
            }
        ]
    });
   
}



