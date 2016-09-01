import { SNS } from 'aws-sdk';
import { AxiosResponse } from 'axios';
import { Context, Callback } from 'aws-lambda';
import { HttpRestHelper } from './httpRestHelper';
import { IPost } from './post';

exports.handleIt = function(event: any, context: Context, callback: Callback) {
    let helper: HttpRestHelper = new HttpRestHelper();

    helper.getPosts()
        .then((response: AxiosResponse) => {
            let posts: IPost[] = response.data as IPost[];
            callback(null, {
                message: 'Your get request executed successfully',
                data: posts
            });
        })
        .catch((err: any) => {
            callback(null, { message: 'Get request executed with error : ' + err});
        });
};