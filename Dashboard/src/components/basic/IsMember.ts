import { User } from '../../config';

// Description: Will render the component is the current user in the project is admin.
// Params
// params 1: props
// returns JSX.Element or NULL
export default function (currentProject: $TSFixMe): void {
    const userId: $TSFixMe = User.getUserId();
    if (
        userId &&
        currentProject &&
        currentProject.users &&
        currentProject.users.length > 0 &&
        currentProject.users.filter(
            (user: $TSFixMe) =>
                user.userId === userId &&
                (user.role !== 'Administrator' || user.role !== 'Owner')
        ).length > 0
    ) {
        return true;
    }

    return false;
}
