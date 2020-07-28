import { createSelector } from "@ngrx/store";

import { IAppState } from "../state/app.state";
import { IUserState} from "../state/user.state";

const selectedUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
    selectedUsers,
    (state: IUserState) => state.users
)

export const selectSelectedUser = createSelector(
    selectedUsers,
    (state: IUserState) => state.selectedUser
)