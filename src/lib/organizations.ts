import axios from 'axios';

import type { IOrganization } from '../interfaces/organization';

export class OrganizationService
{
    public async GET()
    {
        try
        {
            const { data } = await axios({
                method: 'get',
                url: 'https://api.github.com/users/im-parsa/orgs',
                headers:
                    {
                        Authorization: `Bearer ${ process.env.MONGODB_URI }`,
                        'Content-Type': 'application/json'
                    },
                auth:
                    {
                        username: process.env.GITHUB_USERNAME || '',
                        password: process.env.GITHUB_PASSWORD || ''
                    }
            });

            return {
                items:
                    [
                        ...data
                            .filter((organization: IOrganization) =>
                            {
                                return organization?.login !== 'HAGH-Team';
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

export default OrganizationService;
