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
