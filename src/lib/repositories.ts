import axios from 'axios';

import type { IRepository } from '../interfaces/repository';

export class RepositoryService
{
    public async GET()
    {
        try
        {
            const { data } = await axios({
                method: 'get',
                url: 'https://api.github.com/users/im-parsa/repos',
                headers:
                    {
                        Authorization: 'Bearer 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',
                        'Content-Type': 'application/json'
                    },
                auth:
                    {
                        username: 'im-parsa',
                        password: '@Parsa89'
                    }
            });

            return {
                items:
                    [
                        ...data
                            .filter((repo: IRepository) =>
                            {
                                return repo?.stargazers_count >= 10;
                            })
                            .sort((firstRepo: IRepository, secondRepo: IRepository) =>
                            {
                                return secondRepo?.stargazers_count - firstRepo?.stargazers_count;
                            })
                    ]
            };
        }
        catch (error)
        {
            console.log(error);

            return { status: 'fail', statusCode: 500, message: 'Internal error' };
        }
    }
}

export default RepositoryService;
