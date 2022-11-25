import RestApis from "./RestApis";
const UserService = {
    doOnline: RestApis.userservice+'/user/doonline',
    doOffline: RestApis.userservice+'/user/dooffline',
    getAllOnlineList: RestApis.userservice+'/user/getallonlinelist',
    getMyProfile: RestApis.userservice+'/user/getmyprofile',
};
export default UserService;